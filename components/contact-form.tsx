"use client";

import { useState } from "react";

type FormValues = {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  message: string;
  website: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  companyName: "",
  email: "",
  phone: "",
  message: "",
  website: "",
};

function validate(values: FormValues) {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your full name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Please share your inquiry so we can respond properly.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Please provide at least 20 characters in your message.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("error");
      setFeedback("Please fix the highlighted fields and try again.");
      return;
    }

    setStatus("submitting");
    setFeedback("Sending your inquiry...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "We could not send your message right now.");
      }

      setValues(initialValues);
      setErrors({});
      setStatus("success");
      setFeedback(data.message || "Your inquiry has been sent successfully.");
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "We could not send your message right now. Please email us directly.",
      );
    }
  }

  function updateValue<Key extends keyof FormValues>(key: Key, value: FormValues[Key]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <Field
          id="name"
          label="Full Name"
          required
          value={values.name}
          error={errors.name}
          onChange={(value) => updateValue("name", value)}
        />
        <Field
          id="companyName"
          label="Company Name"
          value={values.companyName}
          error={errors.companyName}
          onChange={(value) => updateValue("companyName", value)}
        />
        <Field
          id="email"
          label="Email Address"
          type="email"
          required
          value={values.email}
          error={errors.email}
          onChange={(value) => updateValue("email", value)}
        />
        <Field
          id="phone"
          label="Phone Number"
          type="tel"
          value={values.phone}
          error={errors.phone}
          onChange={(value) => updateValue("phone", value)}
        />
      </div>

      <div className="form-field form-field--honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => updateValue("website", event.target.value)}
        />
      </div>

      <div className="form-field">
        <label htmlFor="message">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          value={values.message}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          onChange={(event) => updateValue("message", event.target.value)}
        />
        {errors.message ? (
          <p className="form-error" id="message-error" role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="contact-form__footer">
        <button className="button button--primary" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
        <p className={`form-status form-status--${status}`} aria-live="polite">
          {feedback}
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  required?: boolean;
}) {
  const errorId = `${id}-error`;

  return (
    <div className="form-field">
      <label htmlFor={id}>
        {label} {required ? <span aria-hidden="true">*</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? (
        <p className="form-error" id={errorId} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
