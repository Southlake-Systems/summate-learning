"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, Loader2, LockKeyhole } from "lucide-react";
import { loginAction } from "./actions";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    startTransition(async () => {
      const result = await loginAction(password);
      if (result.ok) {
        router.refresh();
      } else {
        setError(result.error);
      }
    });
  }

  return (
    <div className="mx-auto flex min-h-[62vh] max-w-md items-center px-6 py-16">
      <form
        onSubmit={handleSubmit}
        className="w-full rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_24px_70px_rgba(15,42,49,0.08)]"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E9F4EF] text-[#1C5E6E]">
          <LockKeyhole size={21} strokeWidth={1.9} aria-hidden="true" />
        </span>

        <h1 className="mt-6 font-display text-2xl font-bold tracking-[-0.03em] text-[#0F2A31]">
          Blog studio
        </h1>
        <p className="mt-2 text-[14px] leading-[1.6] text-slate-600">
          Enter the studio password to add and edit posts.
        </p>

        <label className="mt-6 block">
          <span className="text-[13px] font-semibold text-[#0F2A31]">Password</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            required
            autoFocus
            disabled={pending}
            className="mt-2 block w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-[15px] text-[#0F2A31] focus:border-[#1C5E6E] focus:outline-none focus:ring-4 focus:ring-[#1C5E6E]/10 disabled:bg-slate-50"
          />
        </label>

        {error && (
          <p role="alert" className="mt-3 flex items-start gap-2 rounded-xl bg-[#FBEDEA] px-3.5 py-2.5 text-[13px] text-[#8E2B20]">
            <AlertCircle size={15} aria-hidden="true" className="mt-0.5 shrink-0" />
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#0F2A31] text-[14px] font-semibold text-white transition-colors hover:bg-[#1C5E6E] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending && <Loader2 size={15} aria-hidden="true" className="animate-spin" />}
          {pending ? "Checking…" : "Enter studio"}
        </button>
      </form>
    </div>
  );
}
