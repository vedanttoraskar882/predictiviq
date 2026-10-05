import { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

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
  if (!fullName) {
    errors.fullName = "Full name is required.";
  } else if (fullName.length < 2) {
    errors.fullName = "Minimum 2 characters required.";
  } else if (!NAME_RE.test(fullName)) {
    errors.fullName = "Letters, spaces, hyphens and apostrophes only.";
  }

  // Strip spaces, brackets, and hyphens before validating phone digits
  const cleanPhone = values.phoneNumber.replace(/[\s\-()]/g, "");
  if (!values.phoneNumber.trim()) {
    errors.phoneNumber = "Phone number is required.";
  } else if (!PHONE_RE.test(cleanPhone)) {
    errors.phoneNumber = "Enter 7–15 digits (e.g. +44 20 7946 0018).";
  }

  const email = values.emailAddress.trim().toLowerCase();
  if (!email) {
    errors.emailAddress = "Email address is required.";
  } else if (!EMAIL_RE.test(email)) {
    errors.emailAddress = "Please enter a valid email address.";
  }

  const organisation = values.organisationName.trim();
  if (!organisation) {
    errors.organisationName = "Organisation name is required.";
  } else if (organisation.length < 2) {
    errors.organisationName = "Minimum 2 characters required.";
  }

  return errors;
}

const inputClass =
  "mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/20 transition shadow-xs";
const labelClass = "text-xs font-semibold text-slate-700 uppercase font-mono tracking-wider";

export function PilotForm() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [success, setSuccess] = useState(false);

  const update = (key: keyof Fields) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
    setSuccess(false);
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSuccess(false);
      return;
    }

    try {
      const existingData = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

      const list = Array.isArray(existingData) ? existingData : [];

      const newSubmission = {
        fullName: values.fullName.trim(),
        phoneNumber: values.phoneNumber.trim(),
        emailAddress: values.emailAddress.trim().toLowerCase(),
        organisationName: values.organisationName.trim(),
        submittedAt: new Date().toISOString(),
      };

      list.push(newSubmission);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch {
      const fallbackSubmission = {
        fullName: values.fullName.trim(),
        phoneNumber: values.phoneNumber.trim(),
        emailAddress: values.emailAddress.trim().toLowerCase(),
        organisationName: values.organisationName.trim(),
        submittedAt: new Date().toISOString(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify([fallbackSubmission]));
    }

    setValues(EMPTY);
    setErrors({});
    setSuccess(true);
  };

  return (
    <section id="pilot" className="border-t border-slate-200/80 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column Description */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
              Begin Evaluation
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl font-serif">
              Request an Operational Pilot on Your Own Data
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Discover where shrinkage, portion drift, and unbilled supplier shortages occur across
              your estate. PredictivIQ proposes a scoped, two-week shadow assessment with zero
              operational disruption.
            </p>

            <div className="mt-8 space-y-3.5 text-xs text-slate-600">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="size-4 text-emerald shrink-0" />
                <span>Zero hardware installation or POS replacement required</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="size-4 text-emerald shrink-0" />
                <span>Two-week non-intrusive shadow reconciliation audit</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="size-4 text-emerald shrink-0" />
                <span>Board-level report demonstrating identified margin recovery</span>
              </div>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-7">
            <form
              noValidate
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-slate-50/80 p-8 shadow-md sm:p-10"
            >
              <div className="flex items-center justify-between pb-5 border-b border-slate-200/80 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-navy font-serif">Pilot Application</h3>
                  <p className="text-xs text-slate-500">Fast, confidential estate assessment</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 font-mono text-xs font-bold text-emerald border border-emerald-100">
                  Step 1 of 1
                </span>
              </div>

              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label className={labelClass} htmlFor="fullName">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={values.fullName}
                      onChange={update("fullName")}
                      placeholder="e.g. Jordan Ellis"
                      className={inputClass}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-600 font-medium">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className={labelClass} htmlFor="phoneNumber">
                      Phone Number *
                    </label>
                    <input
                      id="phoneNumber"
                      type="tel"
                      value={values.phoneNumber}
                      onChange={update("phoneNumber")}
                      placeholder="e.g. +44 7301 504241"
                      className={inputClass}
                    />
                    {errors.phoneNumber && (
                      <p className="mt-1 text-xs text-red-600 font-medium">{errors.phoneNumber}</p>
                    )}
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className={labelClass} htmlFor="emailAddress">
                    Email Address *
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    value={values.emailAddress}
                    onChange={update("emailAddress")}
                    placeholder="e.g. j.ellis@hospitalitygroup.co.uk"
                    className={inputClass}
                  />
                  {errors.emailAddress && (
                    <p className="mt-1 text-xs text-red-600 font-medium">{errors.emailAddress}</p>
                  )}
                </div>

                {/* Organisation Name */}
                <div>
                  <label className={labelClass} htmlFor="organisationName">
                    Organisation / Estate Name *
                  </label>
                  <input
                    id="organisationName"
                    type="text"
                    value={values.organisationName}
                    onChange={update("organisationName")}
                    placeholder="e.g. Apex Café Group (8 Sites)"
                    className={inputClass}
                  />
                  {errors.organisationName && (
                    <p className="mt-1 text-xs text-red-600 font-medium">
                      {errors.organisationName}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-emerald-dark active:scale-[0.99] cursor-pointer"
                  >
                    Request a Pilot
                    <ArrowRight className="size-4" />
                  </button>
                </div>

                {/* Success Message Banner */}
                {success && (
                  <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-center text-sm font-semibold text-emerald-900 animate-in fade-in duration-300">
                    Thank you. Your pilot request has been submitted successfully.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
