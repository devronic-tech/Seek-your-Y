import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

// Hardcoded Email Credentials as requested
const SMTP_EMAIL = "seekyoury@gmail.com";
const SMTP_PASS = "lwurybcnzhagrbmx";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SMTP_EMAIL,
    pass: SMTP_PASS,
  },
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Only POST is supported." });
  }

  try {
    const { name, email, message, phone, exam, _subject, formSource } = req.body || {};

    const clientName = (name || "Valued Aspirant").trim();
    const clientEmail = (email || "").trim();
    const subjectTitle = formSource || _subject || "Website Form Submission";
    const clientMessage = (message || "No message provided").trim();
    const clientPhone = (phone || "").trim();
    const selectedCourse = (exam || "").trim();
    const submissionTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    if (!clientEmail) {
      return res.status(400).json({ error: "Email address is required." });
    }

    // 1. HTML Template for Company Notification (Sent to seekyoury@gmail.com)
    const companyMailOptions = {
      from: `"Seek Your Y Website" <${SMTP_EMAIL}>`,
      to: SMTP_EMAIL,
      replyTo: clientEmail,
      subject: `📥 [NEW ENQUIRY] ${subjectTitle} - ${clientName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f1f5f9; margin: 0; padding: 20px; color: #0f172a; }
            .container { max-w: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border: 1px solid #e2e8f0; }
            .header { background: linear-gradient(135deg, #061225 0%, #1e293b 100%); color: #ffffff; padding: 24px 32px; text-align: left; }
            .header h1 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; color: #38bdf8; }
            .header p { margin: 4px 0 0 0; font-size: 13px; color: #94a3b8; font-weight: 600; text-transform: uppercase; tracking: 1px; }
            .body { padding: 32px; }
            .badge { display: inline-block; background: #eff6ff; color: #2563eb; font-weight: 800; font-size: 12px; padding: 6px 14px; border-radius: 9999px; text-transform: uppercase; border: 1px solid #bfdbfe; margin-bottom: 20px; }
            .field-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
            .field-table td { padding: 12px 16px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
            .field-table td.label { font-weight: 700; color: #475569; width: 35%; background: #f8fafc; }
            .field-table td.value { font-weight: 600; color: #0f172a; }
            .message-box { background: #f8fafc; border-left: 4px solid #2563eb; padding: 16px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
            .footer { background: #f8fafc; padding: 16px 32px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Seek Your Y — Admin Alert</h1>
              <p>New Form Submission Received</p>
            </div>
            <div class="body">
              <div class="badge">Source: ${subjectTitle}</div>
              
              <table class="field-table">
                <tr>
                  <td class="label">Full Name</td>
                  <td class="value">${clientName}</td>
                </tr>
                <tr>
                  <td class="label">Email Address</td>
                  <td class="value"><a href="mailto:${clientEmail}" style="color: #2563eb; text-decoration: none;">${clientEmail}</a></td>
                </tr>
                ${clientPhone ? `
                <tr>
                  <td class="label">Phone Number</td>
                  <td class="value"><a href="tel:${clientPhone}" style="color: #2563eb; text-decoration: none;">${clientPhone}</a></td>
                </tr>` : ""}
                ${selectedCourse ? `
                <tr>
                  <td class="label">Course / Service</td>
                  <td class="value">${selectedCourse}</td>
                </tr>` : ""}
                <tr>
                  <td class="label">Date & Time</td>
                  <td class="value">${submissionTime} (IST)</td>
                </tr>
              </table>

              <div style="font-weight: 700; font-size: 13px; color: #475569; text-transform: uppercase; margin-bottom: 8px;">Submission Details / Message</div>
              <div class="message-box">${clientMessage}</div>
            </div>
            <div class="footer">
              Automated alert generated by Seek Your Y Cloud Notification Engine
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // 2. HTML Template for Customer Confirmation (Sent to user)
    const customerMailOptions = {
      from: `"Seek Your Y" <${SMTP_EMAIL}>`,
      to: clientEmail,
      subject: `Thank you for contacting Seek Your Y! We've received your request.`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #0f172a; }
            .container { max-w: 600px; margin: 0 auto; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 15px 35px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
            .header { background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%); color: #ffffff; padding: 36px 32px; text-align: center; }
            .header h1 { margin: 0; font-size: 26px; font-weight: 900; letter-spacing: -0.5px; }
            .header p { margin: 8px 0 0 0; font-size: 15px; color: #dbeafe; font-weight: 500; }
            .body { padding: 36px 32px; }
            .greeting { font-size: 18px; font-weight: 700; color: #0f172a; margin-bottom: 16px; }
            .text { font-size: 15px; color: #475569; line-height: 1.7; margin-bottom: 24px; }
            .card { background: #f1f5f9; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; margin-bottom: 28px; }
            .card-title { font-weight: 700; font-size: 13px; text-transform: uppercase; color: #64748b; margin-bottom: 10px; tracking: 1px; }
            .card-item { font-size: 14px; font-weight: 600; color: #1e293b; margin-bottom: 6px; }
            .cta-button { display: inline-block; background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%); color: #ffffff !important; font-weight: 800; font-size: 15px; text-decoration: none; padding: 14px 32px; border-radius: 9999px; box-shadow: 0 4px 14px rgba(37,99,235,0.3); }
            .footer { background: #f8fafc; padding: 24px 32px; text-align: center; font-size: 13px; color: #64748b; border-top: 1px solid #e2e8f0; line-height: 1.5; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Seek Your Y</h1>
              <p>Your Journey to Higher Scores Begins Here</p>
            </div>
            <div class="body">
              <div class="greeting">Hi ${clientName},</div>
              <div class="text">
                Thank you for reaching out to us! We have successfully received your enquiry regarding <strong>${subjectTitle}</strong>.
              </div>
              <div class="text">
                Our lead faculty & admissions mentor <strong>Aman</strong> will review your details and reach out to you within 2 hours to help you map out your target score and study plan.
              </div>
              
              <div class="card">
                <div class="card-title">Summary of Your Request</div>
                <div class="card-item"><strong>Topic / Service:</strong> ${subjectTitle}</div>
                ${selectedCourse ? `<div class="card-item"><strong>Selected Course:</strong> ${selectedCourse}</div>` : ""}
                <div class="card-item"><strong>Submitted On:</strong> ${submissionTime} (IST)</div>
              </div>

              <div style="text-align: center; margin-bottom: 10px;">
                <a href="https://seekyoury.com" class="cta-button">Visit Seek Your Y Website</a>
              </div>
            </div>
            <div class="footer">
              <strong>Seek Your Y Prep & Mentoring</strong><br/>
              Gorewada Sq., Nagpur | Email: <a href="mailto:${SMTP_EMAIL}" style="color: #2563eb;">${SMTP_EMAIL}</a><br/>
              Need urgent assistance? Call/WhatsApp us at +91 70201 83495
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send Company Notification Email (Mandatory)
    await transporter.sendMail(companyMailOptions);

    // Send Customer Confirmation Email (Best effort)
    try {
      await transporter.sendMail(customerMailOptions);
    } catch (custErr) {
      console.warn("Customer confirmation email failed, but company alert was sent:", custErr);
    }

    return res.status(200).json({
      success: true,
      message: "Notification email sent successfully to company and user.",
    });
  } catch (error: any) {
    console.error("Error sending email via Nodemailer:", error);
    return res.status(500).json({
      error: "Failed to send email.",
      details: error?.message || "Unknown error",
    });
  }
}
