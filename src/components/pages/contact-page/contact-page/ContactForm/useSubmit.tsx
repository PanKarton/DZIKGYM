import { useState } from "react";
import { buildPayload } from "./buildPayload";
import { FormValues } from "./ContactForm";
import { NextResponse } from "next/server";

export const useSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: FormValues) => {
    try {
      setIsLoading(true);
      setError(null);
      setSuccess(false);

      const payload = buildPayload(data);

      // Honeypot check
      const { website } = data;
      if (website && website.trim().length > 0) {
        setIsLoading(false);
        setSuccess(true);
        console.warn("Bot detected, submission ignored.");
        return NextResponse.json({ ok: true });
      }
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      // Error handling
      if (!res.ok) {
        setError(
          json.message ||
            "Nie udało się wysłać wiadomości. Spróbuj ponownie później.",
        );
      }
      setSuccess(true);
      return;
    } catch {
      setIsLoading(false);
      setError("Brak połączenia z serwerem. Spróbuj ponownie później.");
    } finally {
      setIsLoading(false);
    }
  };

  return { onSubmit, isLoading, error, success };
};
