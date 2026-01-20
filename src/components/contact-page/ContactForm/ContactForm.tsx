"use client";

import CTA from "@/components/ui/Cta";
import * as React from "react";
import { useForm } from "react-hook-form";
import { FaArrowRightLong } from "react-icons/fa6";
import { buildPayload } from "./buildPayload";

export type FormValues = {
  fullName: string;
  email: string;
  message: string;
  isBusiness: boolean;
  businessName?: string;
  consent: boolean;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
      isBusiness: false,
      businessName: "",
      consent: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    const payload = buildPayload(data);
    // handle your submit
    console.log(payload);
  };

  const isBusiness = watch("isBusiness");
  const MESSAGE_MAX = 10;
  const message = watch("message") ?? "";
  const messageLen = message.length;
  const progress = Math.min(1, messageLen / MESSAGE_MAX);

  const ring = React.useMemo(() => {
    const size = 30;
    const stroke = 3;
    const r = (size - stroke) / 2;
    const c = 2 * Math.PI * r;
    const dashOffset = c * (1 - progress);
    return { size, stroke, r, c, dashOffset };
  }, [progress]);

  const labelCls = "mb-2 text-sm font-semibold text-(--secondary)";
  const helperErrorCls = "mt-2 text-xs font-medium text-(--red)";

  const baseField =
    "w-full  border bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition";
  const defaultBorder = "border-(--offWhite)";
  const focusBorder = "focus:border-(--blue) border-2";
  const errorBorder = "border-(--red)";
  const commonCheckbox =
    "h-5 w-5 rounded border-(--offWhite) text-(--blue) focus:outline-none focus:ring-(--blue) cursor-pointer";

  const fieldClass = (hasError?: boolean) =>
    cn(baseField, defaultBorder, focusBorder, hasError && errorBorder);

  const messageFieldClass = (hasError?: boolean) =>
    cn(
      baseField,
      focusBorder,
      "min-h-[210px] resize-none pt-3 pr-20",
      hasError && errorBorder,
    );

  const messageReg = register("message", {
    required: "Musisz wypełnić to pole",
    maxLength: {
      value: MESSAGE_MAX,
      message: `Maksymalnie ${MESSAGE_MAX} znaków`,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Left: inputs */}
        <div className="space-y-8">
          <div className="flex flex-wrap items-center gap-6">
            <label className="flex cursor-pointer items-center gap-3 text-sm text-(--secondary) select-none">
              <input
                type="checkbox"
                checked={!isBusiness}
                onChange={() => {
                  setValue("isBusiness", false, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true,
                  });
                }}
                className={commonCheckbox}
              />
              <span>Osoba prywatna</span>
            </label>

            <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-900 select-none">
              <input
                type="checkbox"
                checked={!!isBusiness}
                onChange={() => {
                  setValue("isBusiness", true, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true,
                  });
                }}
                className={commonCheckbox}
              />
              <span>Działalność</span>
            </label>
          </div>
          {/* Full name */}
          <div>
            <label htmlFor="fullName" className={labelCls}>
              Imię i nazwisko*
            </label>
            <input
              id="fullName"
              type="text"
              className={fieldClass(!!errors.fullName)}
              placeholder=""
              aria-invalid={!!errors.fullName}
              {...register("fullName", {
                required: "Musisz wypełnić to pole",
                minLength: { value: 2, message: "Wpisz co najmniej 2 znaki" },
                maxLength: { value: 40, message: "Maksymalnie 40 znaków" },
              })}
            />
            {errors.fullName && (
              <div className={helperErrorCls}>{errors.fullName.message}</div>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={labelCls}>
              E-mail*
            </label>
            <input
              id="email"
              type="email"
              className={fieldClass(!!errors.email)}
              placeholder="E-mail"
              aria-invalid={!!errors.email}
              {...register("email", {
                required: "Musisz wypełnić to pole",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Podaj poprawny adres e-mail",
                },
                maxLength: { value: 50, message: "Maksymalnie 50 znaków" },
              })}
            />
            {errors.email && (
              <div className={helperErrorCls}>{errors.email.message}</div>
            )}
          </div>

          {/* Business name */}
          {isBusiness && (
            <div>
              <label htmlFor="businessName" className={labelCls}>
                Nazwa działalności
              </label>
              <input
                id="businessName"
                type="text"
                className={fieldClass(!!errors.businessName)}
                placeholder=""
                aria-invalid={!!errors.businessName}
                {...register("businessName", {
                  required: "Musisz wypełnić to pole",
                  minLength: { value: 2, message: "Wpisz co najmniej 2 znaki" },
                  maxLength: { value: 40, message: "Maksymalnie 40 znaków" },
                })}
              />
              {errors.businessName && (
                <div className={helperErrorCls}>
                  {errors.businessName.message}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right: message + consent */}
        <div className="space-y-8">
          {/* Message */}
          <div>
            <label htmlFor="message" className={labelCls}>
              O czym chcesz porozmawiać?
            </label>

            <div className="relative">
              <textarea
                id="message"
                className={messageFieldClass(!!errors.message)}
                placeholder="Opisz swoją sprawę."
                aria-invalid={!!errors.message}
                {...messageReg}
                onChange={(e) => {
                  const v = e.target.value;
                  if (v.length <= MESSAGE_MAX) {
                    messageReg.onChange(e);
                    return;
                  }
                  // twarde uciecie + brak mozliwosci wpisywania dalej
                  setValue("message", v.slice(0, MESSAGE_MAX), {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true,
                  });
                }}
              />

              {/* Progress ring + counter */}
              <div className="absolute right-4 top-4 flex flex-col items-center">
                <svg
                  width={ring.size}
                  height={ring.size}
                  viewBox={`0 0 ${ring.size} ${ring.size}`}
                  className="block"
                >
                  <circle
                    cx={ring.size / 2}
                    cy={ring.size / 2}
                    r={ring.r}
                    strokeWidth={ring.stroke}
                    className="text-slate-200"
                    stroke="currentColor"
                    fill="none"
                  />
                  <circle
                    cx={ring.size / 2}
                    cy={ring.size / 2}
                    r={ring.r}
                    strokeWidth={ring.stroke}
                    className="text-cyan-600"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={ring.c}
                    strokeDashoffset={ring.dashOffset}
                    style={{ transition: "stroke-dashoffset 180ms ease" }}
                    transform={`rotate(-90 ${ring.size / 2} ${ring.size / 2})`}
                  />
                </svg>
                <div className="mt-1 text-[11px] font-medium text-slate-500">
                  {messageLen}/{MESSAGE_MAX}
                </div>
              </div>
            </div>

            {errors.message && (
              <div className={helperErrorCls}>{errors.message.message}</div>
            )}
          </div>

          {/* Consent */}
          <div className="flex items-start gap-4">
            <input
              id="consent"
              type="checkbox"
              className={cn(
                "mt-1 h-5 w-5 border-slate-300 text-cyan-600 focus:ring-2 focus:ring-cyan-100",
              )}
              aria-invalid={!!errors.consent}
              {...register("consent", {
                validate: (v) => (v ? true : "Musisz zaakceptować zgodę"),
              })}
            />
            <label
              htmlFor="consent"
              className="text-sm leading-5 text-(--secondary)"
            >
              Wyrażam zgodę na przetwarzanie danych w celach marketingowych.
              <br />
              <span className="underline">(polityka prywatności)</span>
            </label>
          </div>
          {errors.consent && (
            <div className={helperErrorCls}>{errors.consent.message}</div>
          )}

          <div className="w-50 ml-auto">
            <CTA variant="redDarkGradient">
              Wyślij
              <FaArrowRightLong className="relative -translate-y-[1px] scale-[1.2]" />
            </CTA>
          </div>
        </div>
      </div>
    </form>
  );
}
