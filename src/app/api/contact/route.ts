import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
console.log("RESEND KEY:", process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { fullName, email, message, isBusiness, businessName } = data;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Brak wymaganych pól" },
        { status: 400 },
      );
    }

    const thing = await resend.emails.send({
      from: "Formularz <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
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
