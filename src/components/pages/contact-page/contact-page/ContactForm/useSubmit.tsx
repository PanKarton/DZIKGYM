import { buildPayload } from "./buildPayload";
import { FormValues } from "./ContactForm";

export const useSubmit = () => {
  const onSubmit = (data: FormValues) => {
    const payload = buildPayload(data);
    // handle your submit
    console.log(payload);
  };

  return { onSubmit };
};
