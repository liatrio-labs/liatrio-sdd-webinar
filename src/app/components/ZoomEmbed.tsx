"use client";

import { useState, type FormEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ZoomEmbed() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || "Registration failed. Please try again.");
        setFormState("error");
        return;
      }

      setFormState("success");
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <div className="rounded-lg border border-accent-green/30 bg-accent-green/10 p-6 text-center">
        <p className="text-lg font-semibold text-accent-green mb-1">
          You&apos;re registered!
        </p>
        <p className="text-sm text-grey-700 dark:text-text-secondary-dark">
          Check your email for the join link.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-grey-700 dark:text-text-secondary-dark mb-1"
          >
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            required
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full rounded-md border border-grey-100 dark:border-border-dark bg-white dark:bg-bg-dark px-3 py-2.5 text-sm text-grey-800 dark:text-text-primary-dark placeholder:text-grey-700/50 dark:placeholder:text-text-secondary-dark/50 focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent"
            placeholder="Jane"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-grey-700 dark:text-text-secondary-dark mb-1"
          >
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            required
            autoComplete="family-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full rounded-md border border-grey-100 dark:border-border-dark bg-white dark:bg-bg-dark px-3 py-2.5 text-sm text-grey-800 dark:text-text-primary-dark placeholder:text-grey-700/50 dark:placeholder:text-text-secondary-dark/50 focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent"
            placeholder="Doe"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-grey-700 dark:text-text-secondary-dark mb-1"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-grey-100 dark:border-border-dark bg-white dark:bg-bg-dark px-3 py-2.5 text-sm text-grey-800 dark:text-text-primary-dark placeholder:text-grey-700/50 dark:placeholder:text-text-secondary-dark/50 focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent"
          placeholder="jane@company.com"
        />
      </div>

      {formState === "error" && (
        <p className="text-sm text-red-600 dark:text-red-400" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={formState === "submitting"}
        className="flex items-center justify-center gap-2 w-full bg-accent-green text-white dark:text-grey-800 font-semibold py-3.5 rounded-md hover:brightness-110 transition-[filter] text-base focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {formState === "submitting" ? (
          <>
            <svg
              className="animate-spin h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Registering…
          </>
        ) : (
          "Register Now"
        )}
      </button>
    </form>
  );
}
