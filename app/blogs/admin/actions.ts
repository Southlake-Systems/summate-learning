"use server";

import { revalidatePath } from "next/cache";
import { isBlogAdmin, signIn, signOut } from "@/lib/blogAuth";
import { deletePost, savePost } from "@/lib/blogs";
import type { BlogInput } from "@/lib/blogUtils";

function refreshPublicBlog() {
  revalidatePath("/blogs");
  revalidatePath("/blogs/admin");
}

export async function savePostAction(input: BlogInput) {
  if (!isBlogAdmin()) {
    return { ok: false as const, error: "Your session has expired. Sign in again." };
  }

  const result = await savePost(input);

  if (result.ok) {
    refreshPublicBlog();
    revalidatePath(`/blogs/${result.post.slug}`);
  }

  return result;
}

export async function deletePostAction(id: string) {
  if (!isBlogAdmin()) {
    return { ok: false as const, error: "Your session has expired. Sign in again." };
  }

  const result = await deletePost(id);

  if (result.ok) refreshPublicBlog();

  return result;
}

export async function loginAction(password: string) {
  const result = await signIn(password);
  if (result.ok) revalidatePath("/blogs/admin");
  return result;
}

export async function logoutAction() {
  await signOut();
  revalidatePath("/blogs/admin");
}
