import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    // Check if RESEND_API_KEY is defined.
    // Doing this inside the POST handler prevents startup/loading exceptions if the key is not yet set.
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not defined in environment variables.");
      return NextResponse.json(
        { error: "Email service configuration is missing. Please define RESEND_API_KEY in your server environment." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Check if the content-type is application/json
    const contentType = request.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "Content-Type must be application/json" },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { name, email, phone, companyName, service, message } = body;

    // Backend validation of required fields
    if (!name || !name.trim()) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!email || !email.trim()) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }
    if (!message || !message.trim()) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    // Basic email validation regex on the server side
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Prepare email HTML body
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Business Consultation Inquiry</title>
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333333; line-height: 1.6; }
            .container { max-w: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 4px; }
            .header { border-bottom: 2px solid #C5A880; padding-bottom: 15px; margin-bottom: 20px; }
            .header h2 { margin: 0; color: #1a1a1a; font-weight: normal; text-transform: uppercase; letter-spacing: 1px; }
            .field-row { margin-bottom: 12px; }
            .field-label { font-weight: bold; color: #4a5568; display: inline-block; width: 140px; }
            .field-value { color: #2d3748; }
            .message-box { background-color: #f7fafc; border-left: 3px solid #C5A880; padding: 15px; margin-top: 20px; white-space: pre-wrap; font-style: italic; }
            .footer { margin-top: 30px; font-size: 11px; color: #a0aec0; border-top: 1px solid #edf2f7; padding-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Business Consultation Inquiry</h2>
            </div>
            <div class="field-row">
              <span class="field-label">Full Name:</span>
              <span class="field-value">${name.trim()}</span>
            </div>
            <div class="field-row">
              <span class="field-label">Email Address:</span>
              <span class="field-value"><a href="mailto:${email.trim()}">${email.trim()}</a></span>
            </div>
            <div class="field-row">
              <span class="field-label">Phone Number:</span>
              <span class="field-value">${phone ? phone.trim() : "Not provided"}</span>
            </div>
            <div class="field-row">
              <span class="field-label">Company Name:</span>
              <span class="field-value">${companyName ? companyName.trim() : "Not provided"}</span>
            </div>
            <div class="field-row">
              <span class="field-label">Service of Interest:</span>
              <span class="field-value">${service ? service.trim() : "Not specified"}</span>
            </div>
            
            <p><strong>Inquiry Message:</strong></p>
            <div class="message-box">${message.trim()}</div>
            
            <div class="footer">
              <p>This inquiry was sent from the secure Contact Form on Open Business in UAE website.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Note: By default, Resend sandbox/trial accounts can only send from onboarding@resend.dev
    // to their registered account email address.
    const { error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "sandipsawant0107@gmail.com",
      subject: `New Business Setup Inquiry: ${name.trim()}`,
      html: emailHtml,
      replyTo: email.trim(),
    });

    if (error) {
      console.error("Resend API failed:", error);
      return NextResponse.json(
        { error: error.message || "Failed to dispatch email notification." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Your inquiry has been successfully sent." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Internal API Contact Route error:", error);
    return NextResponse.json(
      { error: "An unexpected server error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
