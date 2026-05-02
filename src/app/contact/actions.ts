"use server";

import { createClient } from "@supabase/supabase-js";

export type FormState = {
  success: boolean;
  error?: string;
};

export async function submitContactForm(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const service = (formData.get("service") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { error } = await supabase.from("contact_submissions").insert({
    name,
    email,
    phone: phone || null,
    service: service || null,
    message,
  });

  if (error) {
    console.error("Supabase insert error:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }

  return { success: true };
}
