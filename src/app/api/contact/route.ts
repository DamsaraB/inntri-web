import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, phone, projectType, message, budget, timeline } = body;

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Admin email (styled HTML)
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; background:#fff; color:#000; padding:20px; border:1px solid #eee; border-radius:10px;">
        <div style="text-align:center; margin-bottom:20px;">
          <img src="https://unreallabss.com/logo/unreallabslogo.png" alt="UnrealLabs" style="max-width:180px;">
        </div>
        <h2 style="text-align:center; margin:0; padding:10px; background:#000; color:#fff; border-radius:8px;">
          New Contact Form Submission
        </h2>
        <table style="width:100%; margin-top:20px; border-collapse:collapse;">
          <tr><td style="padding:8px; font-weight:bold;">Name:</td><td style="padding:8px;">${name}</td></tr>
          <tr><td style="padding:8px; font-weight:bold;">Email:</td><td style="padding:8px;">${email}</td></tr>
          <tr><td style="padding:8px; font-weight:bold;">Company:</td><td style="padding:8px;">${company}</td></tr>
          <tr><td style="padding:8px; font-weight:bold;">Phone:</td><td style="padding:8px;">${phone}</td></tr>
          <tr><td style="padding:8px; font-weight:bold;">Project Type:</td><td style="padding:8px;">${projectType}</td></tr>
          <tr><td style="padding:8px; font-weight:bold;">Budget:</td><td style="padding:8px;">${budget}</td></tr>
          <tr><td style="padding:8px; font-weight:bold;">Timeline:</td><td style="padding:8px;">${timeline}</td></tr>
          <tr><td style="padding:8px; font-weight:bold; vertical-align:top;">Message:</td><td style="padding:8px;">${message}</td></tr>
        </table>
        <p style="text-align:center; margin-top:30px; font-size:12px; color:#555;">
          © ${new Date().getFullYear()} UnrealLabs. All Rights Reserved.
        </p>
      </div>
    `;

    // Confirmation email to client
    const clientHtml = `
      <div style="font-family: Arial, sans-serif; background:#fff; color:#000; padding:20px; border:1px solid #eee; border-radius:10px;">
        <div style="text-align:center; margin-bottom:20px;">
          <img src="https://unreallabss.com/logo/unreallabslogo.png" alt="UnrealLabs" style="max-width:180px;">
        </div>
        <h2 style="text-align:center; margin:0; padding:10px; background:#000; color:#fff; border-radius:8px;">
          Thank You for Reaching Out
        </h2>
        <p style="font-size:15px; line-height:1.6; margin-top:20px;">
          Hi <b>${name}</b>,<br><br>
          Thank you for contacting <b>UnrealLabs</b>. We’ve received your request about 
          <b>${projectType}</b> and our team will get back to you within <b>24 hours</b>.
        </p>
        <p style="font-size:15px; line-height:1.6; margin-top:10px;">
          Here’s a quick summary of what you shared:
        </p>
        <ul style="font-size:14px; line-height:1.6; margin:10px 0 20px 20px;">
          <li><b>Company:</b> ${company}</li>
          <li><b>Phone:</b> ${phone}</li>
          <li><b>Budget:</b> ${budget}</li>
          <li><b>Timeline:</b> ${timeline}</li>
        </ul>
        <p style="font-size:15px; line-height:1.6;">
          We look forward to working with you.<br><br>
          Best regards,<br>
          <b>The UnrealLabs Team</b>
        </p>
        <p style="text-align:center; margin-top:30px; font-size:12px; color:#555;">
          © ${new Date().getFullYear()} UnrealLabs. All Rights Reserved.
        </p>
      </div>
    `;

    // Send admin email
    await transporter.sendMail({
      from: `"UnrealLabs Website" <${process.env.SMTP_USER}>`,
      to: "info@unreallabss.com",
      subject: `New Contact Form Submission: ${projectType}`,
      html: adminHtml,
    });

    // Send client confirmation
    await transporter.sendMail({
      from: `"UnrealLabs" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We received your message!",
      html: clientHtml,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email sending failed:", err);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
