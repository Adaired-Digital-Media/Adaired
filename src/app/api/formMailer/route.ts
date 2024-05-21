import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

// Load and validate environment variables at the start
const config = {
  emailHost: process.env.EMAIL_HOST,
  senderEmail: process.env.SENDER_EMAIL,
  senderPassword: process.env.SENDER_PASSWORD,
  senderName: process.env.SENDER_NAME || "adaired.com",
  adminEmails: [
    process.env.ADMIN_EMAIL || "",
    process.env.SALES_ADMIN_EMAIL || "",
    process.env.YAHOO_MAIL || "",
    process.env.AOL_MAIL || "",
  ],
  recaptchaSecretKey: process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY,
};

const transporter = nodemailer.createTransport({
  host: config.emailHost,
  port: 465,
  secure: true,
  auth: {
    user: config.senderEmail,
    pass: config.senderPassword,
  },
});

async function sendMail(mailOptions: Mail.Options): Promise<string> {
  try {
    await transporter.sendMail(mailOptions);
    return "Email sent";
  } catch (err: unknown) {
    if (typeof err === "string") {
      throw new Error(err);
    } else if (err instanceof Error) {
      throw err;
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}
export async function POST(request: NextRequest) {
  const payload = await request.json();

  // Verify the reCAPTCHA token
  try {
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${config.recaptchaSecretKey}&response=${payload.gRecaptchaToken}`
    ).then((res) => res.json());

    if (!recaptchaResponse.success || recaptchaResponse.score < 0.5) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return NextResponse.json(
      { error: "reCAPTCHA verification error" },
      { status: 500 }
    );
  }

  const formTemplates: { [key: string]: string } = {
    "Homepage Form": `Name: ${payload.Name}\nEmail: ${payload.Email}\nPhone: ${payload.Phone}\nInterest: ${payload.Interest}\nBudget: ${payload.Budget}\nMessage: ${payload.Message}`,
    "Contact page Form": `Name: ${payload.Name}\nEmail: ${payload.Email}\nMessage: ${payload.Message}\nPhone: ${payload.Phone}`,
    "Get in Touch Form": `Name: ${payload.Name}\nEmail: ${payload.Email}\nMessage: ${payload.Message}`,
    "Newsletter Form": `Name: ${payload.Email.split("@").shift()}\nEmail: ${
      payload.Email
    }`,
  };

  const mailText = formTemplates[payload.formId];
  if (!mailText) {
    return NextResponse.json(
      { error: "Invalid request type" },
      { status: 400 }
    );
  }

  const mailOptions: Mail.Options = {
    from: config.senderName,
    to: config.adminEmails,
    subject: `${payload.formId
      .replace(/Form$/, "")
      .replace(/([A-Z])/g, " $1")
      .trim()} Form Submission`,
    text: mailText,
  };

  try {
    await sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
