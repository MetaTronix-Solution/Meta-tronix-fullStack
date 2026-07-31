"use client";

import { useForm } from "react-hook-form";
import { GradientButton } from "@/components/shared/GradientButton";

type FormValues = {
  name: string;
  email: string;
  service: string;
  message: string;
};

const serviceOptions = [
  "Web development",
  "Mobile app development",
  "Custom CRM",
  "SaaS product",
  "UI/UX design",
  "Cloud & DevOps",
  "Other / not sure",
];

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.info("Meta Tronix contact (demo, wire to API)", data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-brand-border bg-white p-6 md:p-8 space-y-5 shadow-soft"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-brand-navy mb-1.5"
        >
          Name
        </label>
        <input
          id="name"
          className="w-full rounded-xl border border-brand-border bg-brand-section px-4 py-3 text-sm text-brand-navy placeholder:text-brand-muted focus:border-[#0EA5E9] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/20"
          placeholder="Your full name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name ? (
          <p className="mt-1 text-xs text-orange-600">{errors.name.message}</p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-brand-navy mb-1.5"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full rounded-xl border border-brand-border bg-brand-section px-4 py-3 text-sm text-brand-navy placeholder:text-brand-muted focus:border-[#0EA5E9] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/20"
          placeholder="you@company.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors.email ? (
          <p className="mt-1 text-xs text-orange-600">{errors.email.message}</p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-brand-navy mb-1.5"
        >
          Service needed
        </label>
        <select
          id="service"
          className="w-full rounded-xl border border-brand-border bg-brand-section px-4 py-3 text-sm text-brand-navy focus:border-[#0EA5E9] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/20"
          {...register("service", { required: "Please select a service" })}
        >
          <option value="">Select an option</option>
          {serviceOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        {errors.service ? (
          <p className="mt-1 text-xs text-orange-600">
            {errors.service.message}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-brand-navy mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className="w-full rounded-xl border border-brand-border bg-brand-section px-4 py-3 text-sm text-brand-navy placeholder:text-brand-muted focus:border-[#0EA5E9] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/20 resize-y min-h-[120px]"
          placeholder="Tell us about goals, timeline, and links to any briefs."
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 20,
              message: "Please share at least 20 characters so we can help",
            },
          })}
        />
        {errors.message ? (
          <p className="mt-1 text-xs text-orange-600">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      {isSubmitSuccessful ? (
        <p className="text-sm text-[#0D9488]">
          Thanks. This demo form logged your message locally. Connect it to
          email or a backend to deliver real inquiries.
        </p>
      ) : null}

      <GradientButton type="submit" variant="primary" className="w-full">
        Send Message
      </GradientButton>
    </form>
  );
}
