"use server";

import { Resend } from "resend";

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

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "F&A Electrical <onboarding@resend.dev>",
    to: "giomfinoro@gmail.com",
    replyTo: email,
    subject: `New Enquiry from ${name}${service ? ` — ${service}` : ""}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ffffff; border-radius: 8px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #f97316, #ea580c); padding: 24px 32px;">
          <h1 style="margin: 0; font-size: 22px; font-weight: 900; color: #ffffff; letter-spacing: 1px;">
            New Contact Form Submission
          </h1>
          <p style="margin: 4px 0 0; font-size: 13px; color: rgba(255,255,255,0.8);">F&A Electrical Contractors Inc</p>
        </div>

        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #222; width: 130px;">
                <span style="color: #f97316; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Name</span>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #ffffff; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #222;">
                <span style="color: #f97316; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Email</span>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #ffffff; font-size: 15px;">${email}</td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #222;">
                <span style="color: #f97316; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Phone</span>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #ffffff; font-size: 15px;">${phone}</td>
            </tr>
            ` : ""}
            ${service ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #222;">
                <span style="color: #f97316; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Service</span>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #ffffff; font-size: 15px;">${service}</td>
            </tr>
            ` : ""}
            <tr>
              <td style="padding: 10px 0; vertical-align: top;">
                <span style="color: #f97316; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Message</span>
              </td>
              <td style="padding: 10px 0; color: #cccccc; font-size: 15px; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</td>
            </tr>
          </table>

          <div style="margin-top: 28px; padding: 16px; background: #1a1a1a; border-left: 3px solid #f97316; border-radius: 4px;">
            <p style="margin: 0; font-size: 13px; color: #999;">
              Reply directly to this email to respond to ${name} at <strong style="color: #f97316;">${email}</strong>
            </p>
          </div>
        </div>

        <div style="padding: 16px 32px; background: #111; text-align: center;">
          <p style="margin: 0; font-size: 11px; color: #555;">F&A Electrical Contractors Inc · Guelph, Ontario · Lic. No. 7009205</p>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }

  return { success: true };
}
