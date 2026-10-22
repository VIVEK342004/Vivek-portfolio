import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Strict Server-Side Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      return NextResponse.json(
        { error: "Please provide a subject line (at least 3 characters)." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must contain at least 10 characters." },
        { status: 400 }
      );
    }

    // In production, forward to Resend, SendGrid, or Formspree if configured in .env
    // e.g.:
    // if (process.env.RESEND_API_KEY) { await resend.emails.send(...) }

    // Log securely without exposing sensitive payload secrets
    console.log(`[Contact Message Received from ${name} <${email}>]: Subject: "${subject}"`);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been received. Vivek will reply to your email shortly.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API Error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while submitting your message. Please reach out via email directly." },
      { status: 500 }
    );
  }
}
