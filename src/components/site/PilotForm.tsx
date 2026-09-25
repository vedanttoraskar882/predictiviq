import { useState } from "react";

const STORAGE_KEY = "pilotSubmissions";

type Fields = {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  organisationName: string;
};

const EMPTY: Fields = {
  fullName: "",
  phoneNumber: "",
  emailAddress: "",
  organisationName: "",
};

const NAME_RE = /^[A-Za-z\s'-]+$/;
const PHONE_RE = /^\+?[0-9]{7,15}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};

  const fullName = values.fullName.trim();
  if (!fullName) errors.fullName = "Full name is required.";
  else if (fullName.length < 2) errors.fullName = "Please enter at least 2 characters.";
  else if (!NAME_RE.test(fullName))
    errors.fullName = "Use letters, spaces, hyphens and apostrophes only.";

  const phone = values.phoneNumber.replace(/[\s-]/g, "");
  if (!values.phoneNumber.trim()) errors.phoneNumber = "Phone number is required.";
  else if (!PHONE_RE.test(phone))
    errors.phoneNumber = "Enter 7–15 digits, optionally starting with +.";

  const email = values.emailAddress.trim();
  if (!email) errors.emailAddress = "Email address is required.";
  else if (!EMAIL_RE.test(email)) errors.emailAddress = "Enter a valid email address.";

  const organisation = values.organisationName.trim();
  if (!organisation) errors.organisationName = "Organisation name is required.";
  else if (organisation.length < 2) errors.organisationName = "Please enter at least 2 characters.";

  return errors;
}

const inputClass =
  "mt-2 w-full rounded-[10px] border border-line bg-ink/60 px-4 py-3 text-sm placeholder:text-muted/60 focus:border-accent focus:outline-none";
const labelClass = "font-mono text-[11px] uppercase tracking-[0.15em] text-muted";

export function PilotForm() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [success, setSuccess] = useState(false);

  const update = (key: keyof Fields) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
    setSuccess(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSuccess(false);
      return;
    }

    const submission = {
      fullName: values.fullName.trim(),
      phoneNumber: values.phoneNumber.trim(),
      emailAddress: values.emailAddress.trim(),
      organisationName: values.organisationName.trim(),
      submittedAt: new Date().toISOString(),
    };

    try {
      const existingData = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      const list = Array.isArray(existingData) ? existingData : [];
      list.push(submission);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([submission]));
    }

    setValues(EMPTY);
    setSuccess(true);
  };

  const fields: Array<{ key: keyof Fields; label: string; type: string; placeholder: string }> = [
    { key: "fullName", label: "Full Name", type: "text", placeholder: "Jordan Ellis" },
    { key: "phoneNumber", label: "Phone Number", type: "tel", placeholder: "+44 20 7946 0018" },
    {
      key: "emailAddress",
      label: "Email Address",
      type: "email",
      placeholder: "j.ellis@organisation.co.uk",
    },
    {
      key: "organisationName",
      label: "Organisation Name",
      type: "text",
      placeholder: "Meridian Hospitality Group",
    },
  ];

  return (
    <section id="pilot" className="border-t border-line/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            Request a pilot
          </p>
          <h2 className="mt-4 max-w-[30ch] text-3xl font-semibold tracking-tight text-balance">
            Run a scoped pilot on your own operational data.
          </h2>
          <p className="mt-5 max-w-[44ch] text-pretty text-muted">
            Tell us where the operational pressure is. PredictivIQ LTD will propose a pilot with a
            measurable success criterion before wider adoption.
          </p>
        </div>
        <form
          noValidate
          onSubmit={handleSubmit}
          className="glass space-y-5 rounded-[16px] p-7 ring-1 ring-white/10 lg:col-span-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.slice(0, 2).map((field) => (
              <label key={field.key} className="block">
                <span className={labelClass}>{field.label}</span>
                <input
                  type={field.type}
                  value={values[field.key]}
                  onChange={update(field.key)}
                  placeholder={field.placeholder}
                  className={inputClass}
                />
                {errors[field.key] && (
                  <span className="mt-2 block font-mono text-[11px] text-danger">
                    {errors[field.key]}
                  </span>
                )}
              </label>
            ))}
          </div>
          {fields.slice(2).map((field) => (
            <label key={field.key} className="block">
              <span className={labelClass}>{field.label}</span>
              <input
                type={field.type}
                value={values[field.key]}
                onChange={update(field.key)}
                placeholder={field.placeholder}
                className={inputClass}
              />
              {errors[field.key] && (
                <span className="mt-2 block font-mono text-[11px] text-danger">
                  {errors[field.key]}
                </span>
              )}
            </label>
          ))}
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-brand px-5 py-3 text-sm font-medium text-ink ring-1 ring-brand/40 transition-colors hover:bg-brand/90"
          >
            Request a Pilot <span className="font-mono">→</span>
          </button>
          {success && (
            <p className="rounded-[10px] bg-brand/15 px-4 py-3 text-sm text-brand">
              Thank you. Your pilot request has been submitted successfully.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
