import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { Name, Email, Message, Phone } = await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASSWORD,
    },
  });

  const adminEmail = process.env.ADMIN_EMAIL || "";
  const salesAdminEmail = process.env.SALES_ADMIN_EMAIL || "";
  const mailOptions: Mail.Options = {
    from: process.env.SENDER_NAME,
    to: [adminEmail, salesAdminEmail],
    subject: `Message from ${Name} (${Email})`,
    html: `<h1 class="text-3xl">Message from ${Name}</h1>
    <p>Email: ${Email}</p>
    <p>Phone: ${Phone}</p>
    <p>Message: ${Message}</p>`,
  };

  const sendMailPromise = () =>
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
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
