import { assertOrigin } from "@/lib/assert-origin";
import { ipRatelimit, emailRatelimit } from "@/lib/ratelimit";
import { requireEnv } from "@/lib/utils/requireEnv";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(requireEnv("RESEND_API_KEY"));

function getIP(req: Request) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0] ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { fullName, email, message, isBusiness, businessName, website } =
      data;

    console.log("origin:", req.headers.get("origin"));
    console.log("host:", req.headers.get("host"));
    console.log("referer:", req.headers.get("referer"));

    // Origin check
    if (!assertOrigin(req)) {
      return NextResponse.json(
        { error: "Nieautoryzowany dostęp" },
        { status: 403 },
      );
    }

    // Honeypot check
    if (website && website.trim().length > 0) {
      console.warn("Bot detected, submission ignored.");
      return NextResponse.json({ ok: true });
    }

    // Rate limit by IP
    const ip = getIP(req);

    const ipLimit = await ipRatelimit.limit(ip);

    if (!ipLimit.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Za dużo prób. Spróbuj ponownie za chwilę.",
        },
        { status: 429 },
      );
    }

    // Basic validation
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Brak wymaganych pól" },
        { status: 400 },
      );
    }

    // Rate limit by email
    const emailLimit = await emailRatelimit.limit(email.toLowerCase());

    if (!emailLimit.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Za dużo wiadomości z tego adresu e-mail. Spróbuj później.",
        },
        { status: 429 },
      );
    }

    const thing = await resend.emails.send({
      from: "Formularz <onboarding@resend.dev>",
      to: requireEnv("CONTACT_EMAIL"),
      replyTo: email,
      subject: `Nowa wiadomość – ${fullName}`,
      text: `
Imię: ${fullName}
Email: ${email}
Typ: ${isBusiness ? "Firma" : "Osoba prywatna"}
Firma: ${businessName || "-"}

Wiadomość:
${message}
      `,
    });

    console.log("Resend response:", thing);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Błąd serwera" }, { status: 500 });
  }
}
