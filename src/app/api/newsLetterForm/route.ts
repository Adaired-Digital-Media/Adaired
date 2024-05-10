import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import NewsLetterTemplate from "../emailTemplates/NewsLetterTemplate";

export async function POST(request: NextRequest) {
  const { Email } = await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASSWORD,
    },
  });

  // Notification email options for the user
  const userMailOptions: Mail.Options = {
    from: process.env.SENDER_NAME,
    to: Email, // Send email to the user who filled the form
    subject: `Thank you for subscribing to our newsletter!`,
    html: `<h1 class="text-3xl">Thank you for subscribing to our newsletter!</h1>
        <p>You will now receive our latest news and updates.</p>`,
  };

  // Options for the email notification you receive
  const adminEmail = process.env.ADMIN_EMAIL || "";
  const salesAdminEmail = process.env.SALES_ADMIN_EMAIL || "";

  const mailOptions: Mail.Options = {
    from: process.env.SENDER_NAME,
    to: [adminEmail, salesAdminEmail, "zulemavub81@yahoo.com"],
    subject: `New subscriber: ${Email}`,
    html: NewsLetterTemplate({ email: Email }),
  };

  // Function to send the email
  const sendMailPromise = (mailOptions: Mail.Options) =>
    new Promise<string>((resolve, reject) => {
      transporter.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    // Send notification email to the user
    // await sendMailPromise(userMailOptions);
    // Send email notification to the site owner
    await sendMailPromise(mailOptions);
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    console.log(err);
    console.log(
      process.env.SENDER_EMAIL,
      process.env.SENDER_PASSWORD,
      process.env.EMAIL_HOST
    );
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
