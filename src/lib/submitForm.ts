// Contact form submission utility using Nodemailer on Vercel Serverless Endpoint

const PRIMARY_API_ENDPOINT = "/api/send-email";
const FALLBACK_ENDPOINT = "https://submit-form.com/8yqPhUs5T";

/**
 * Submits contact form data to the configured Vercel serverless endpoint with Nodemailer integration.
 */
export async function submitContactForm(
  fields: Record<string, string>,
  options?: { formSource?: string },
): Promise<void> {
  const payload: Record<string, string> = {};

  for (const [key, value] of Object.entries(fields)) {
    const trimmed = (value || "").trim();
    if (trimmed) {
      payload[key] = trimmed;
    }
  }

  if (options?.formSource) {
    payload["formSource"] = options.formSource;
    payload["_subject"] = options.formSource;
  }

  try {
    const res = await fetch(PRIMARY_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      return;
    }
  } catch (err) {
    console.warn("Primary Nodemailer serverless endpoint unreachable, attempting fallback endpoint:", err);
  }

  // Fallback endpoint
  const fallbackRes = await fetch(FALLBACK_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!fallbackRes.ok) {
    throw new Error("Form submission failed.");
  }
}
