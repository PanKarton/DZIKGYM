import { FormValues } from "./ContactForm";

export function buildPayload(data: FormValues) {
  const { businessName, ...rest } = data;

  if (!data.isBusiness) return rest;

  return {
    ...rest,
    businessName: (businessName ?? "").trim(),
  };
}
