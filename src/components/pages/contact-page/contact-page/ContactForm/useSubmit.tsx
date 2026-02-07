import { buildPayload } from "./buildPayload";
import { FormValues } from "./ContactForm";

export const useSubmit = () => {
  const onSubmit = async (data: FormValues) => {
    const payload = buildPayload(data);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorData = await res.json();
      alert(`Błąd: ${errorData.error}`);
    }
    alert("Wiadomość została wysłana!");
  };

  return { onSubmit };
};
