import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "summate_blog_admin";
const TOKEN_MESSAGE = "summate-blog-admin-v1";
const SESSION_SECONDS = 60 * 60 * 12;

function password(): string {
  return process.env.BLOG_ADMIN_PASSWORD ?? "";
}

export function adminIsConfigured(): boolean {
  return password().length > 0;
}

function sessionToken(): string {
  return createHmac("sha256", password()).update(TOKEN_MESSAGE).digest("hex");
}

/**
 * When BLOG_ADMIN_PASSWORD is unset the studio stays open, which keeps local
 * development friction-free. Set the variable before exposing the site.
 */
export function isBlogAdmin(): boolean {
  if (!adminIsConfigured()) return true;

  const value = cookies().get(COOKIE_NAME)?.value;
  if (!value) return false;

  const expected = sessionToken();
  const supplied = Buffer.from(value);
  const target = Buffer.from(expected);
  return supplied.length === target.length && timingSafeEqual(supplied, target);
}

export type LoginResult = { ok: true } | { ok: false; error: string };

export async function signIn(passwordAttempt: string): Promise<LoginResult> {
  if (!adminIsConfigured()) return { ok: true };

  if (passwordAttempt !== password()) {
    return { ok: false, error: "That password doesn't match." };
  }

  cookies().set(COOKIE_NAME, sessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/blogs/admin",
    maxAge: SESSION_SECONDS,
  });

  return { ok: true };
}

export async function signOut(): Promise<void> {
  cookies().delete(COOKIE_NAME);
}
