import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import HomePageForm from "../emailTemplates/HomepageFormTemplate";

const formatDate = (dateString: number) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export async function POST(request: NextRequest) {
  const { Name, Email, Message, Phone, Budget, Interest } =
    await request.json();

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
    subject: `Thank you for contacting us, ${Name}!`,
    html: `<h1 class="text-3xl">Thank you for contacting us, ${Name}!</h1>
    <p>We have received your message and will get back to you as soon as possible.</p>
    <p>Your Message: ${Message}</p>`,
  };

  // Options for the email notification you receive
  const adminEmail = process.env.ADMIN_EMAIL || "";
  const salesAdminEmail = process.env.SALES_ADMIN_EMAIL || "";
  const mailOptions: Mail.Options = {
    from: process.env.SENDER_NAME,
    to: [adminEmail, salesAdminEmail],
    subject: `Message from ${Name} (${Email})`,
    html: HomePageForm({ Name, Email, Phone, Interest, Message }),
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
    await sendMailPromise(userMailOptions);

    // Send email notification to you
    await sendMailPromise(mailOptions);

    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
