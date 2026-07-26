import { Router } from "express";
import nodemailer from "nodemailer";
import { logger } from "../lib/logger";

const router = Router();

router.post("/contact", async (req, res) => {
  const { name, email, projectType, budget, timeline, message } = req.body as {
    name: string;
    email: string;
    projectType: string;
    budget: string;
    timeline: string;
    message: string;
  };

  if (!name || !email || !message) {
    res.status(400).json({ error: "name, email and message are required" });
    return;
  }

  const gmailPass = process.env["GMAIL_APP_PASSWORD"];
  if (!gmailPass) {
    logger.error("GMAIL_APP_PASSWORD secret is not set");
    res.status(500).json({ error: "Email service not configured" });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "developerhallins@gmail.com",
      pass: gmailPass,
    },
  });

  const projectLabels: Record<string, string> = {
    "web-design": "Web Design",
    "fullstack": "Full Stack Development",
    "uiux": "UI/UX Design",
    "nocode": "No-Code / Webflow",
    "landing": "Landing Page",
    "ai": "AI Development",
    "other": "Other",
  };
  const budgetLabels: Record<string, string> = {
    "lt500": "Under $500",
    "500-1k": "$500 – $1,000",
    "1k-3k": "$1,000 – $3,000",
    "3k-5k": "$3,000 – $5,000",
    "5k+": "$5,000+",
  };
  const timelineLabels: Record<string, string> = {
    "asap": "ASAP",
    "1-2w": "1 – 2 Weeks",
    "1m": "About 1 Month",
    "1-3m": "1 – 3 Months",
    "flexible": "Flexible",
  };

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#fff;border-radius:12px;overflow:hidden">
      <div style="background:#ff3278;padding:24px 32px">
        <h1 style="margin:0;font-size:22px;font-weight:700;letter-spacing:-0.5px">New Project Enquiry 🚀</h1>
        <p style="margin:6px 0 0;opacity:0.85;font-size:14px">Submitted via hallinsDev.com</p>
      </div>
      <div style="padding:32px">
        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #222;width:140px;color:#888;font-size:13px">Name</td>
            <td style="padding:10px 0;border-bottom:1px solid #222;font-size:14px;font-weight:600">${name}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #222;color:#888;font-size:13px">Email</td>
            <td style="padding:10px 0;border-bottom:1px solid #222;font-size:14px"><a href="mailto:${email}" style="color:#ff3278">${email}</a></td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #222;color:#888;font-size:13px">Project Type</td>
            <td style="padding:10px 0;border-bottom:1px solid #222;font-size:14px">${projectLabels[projectType] ?? projectType ?? "—"}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #222;color:#888;font-size:13px">Budget</td>
            <td style="padding:10px 0;border-bottom:1px solid #222;font-size:14px">${budgetLabels[budget] ?? budget ?? "—"}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #222;color:#888;font-size:13px">Timeline</td>
            <td style="padding:10px 0;border-bottom:1px solid #222;font-size:14px">${timelineLabels[timeline] ?? timeline ?? "—"}</td>
          </tr>
        </table>
        <div style="margin-top:24px">
          <p style="color:#888;font-size:13px;margin-bottom:8px">Message</p>
          <div style="background:#111;border:1px solid #222;border-radius:8px;padding:16px;font-size:14px;line-height:1.6;white-space:pre-wrap">${message}</div>
        </div>
        <div style="margin-top:28px;text-align:center">
          <a href="mailto:${email}" style="display:inline-block;background:#ff3278;color:#fff;text-decoration:none;padding:12px 28px;border-radius:50px;font-size:14px;font-weight:600">Reply to ${name}</a>
        </div>
      </div>
      <div style="padding:16px 32px;border-top:1px solid #1a1a1a;text-align:center;color:#444;font-size:12px">
        Sent from your portfolio contact form
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Hallins Portfolio" <developerhallins@gmail.com>`,
      to: "developerhallins@gmail.com",
      replyTo: email,
      subject: `New enquiry from ${name} — ${projectLabels[projectType] ?? projectType ?? "Project"}`,
      html,
    });

    logger.info({ name, email }, "Contact form email sent");
    res.json({ success: true });
  } catch (err) {
    logger.error({ err }, "Failed to send contact email");
    res.status(500).json({ error: "Failed to send email. Please try again." });
  }
});

export default router;
