import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import HomepageForm from "../emailTemplates/HomepageForm";
import GetintouchForm from "../emailTemplates/GetintouchForm";
import ContactpageForm from "../emailTemplates/ContactpageForm";
import NewsletterForm from "../emailTemplates/NewsletterForm";

// Load and validate environment variables at the start
const config = {
  emailHost: process.env.EMAIL_HOST,
  senderEmail: process.env.SENDER_EMAIL,
  senderPassword: process.env.SENDER_PASSWORD,
  senderName: process.env.SENDER_NAME || '"Adaired Digital" <info@adaired.com>',
  adminEmails: [
    process.env.SUPER_ADMIN_EMAIL || "",
    process.env.SUPPORT_EMAIL || "",
    process.env.SALES_ADMIN_EMAIL || "",
    // process.env.DEV_TL_EMAIL || "",
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

  const formTemplates: { [key: string]: { html: string } } = {
    "Homepage Form": {
      html: HomepageForm({
        Name: payload.Name,
        Email: payload.Email,
        Phone: payload.Phone,
        Interest: payload.Interest,
        Budget: payload.Budget,
        Message: payload.Message,
      }),
    },
    "Contact page Form": {
      html: ContactpageForm({
        Name: payload.Name,
        Email: payload.Email,
        Phone: payload.Phone,
        Message: payload.Message,
      }),
    },
    "Get in Touch Form": {
      html: GetintouchForm({
        Name: payload.Name,
        Email: payload.Email,
        Message: payload.Message,
      }),
    },
    "Newsletter Form": {
      html: NewsletterForm({
        Email: payload.Email,
      }),
    },
  };

  const template = formTemplates[payload.formId];
  if (!template) {
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
    html: template.html, // Include HTML content here
  };

  try {
    await sendMail(mailOptions);
    return NextResponse.json({
      sendMailSuccess: true,
      message: "Email sent successfully",
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
