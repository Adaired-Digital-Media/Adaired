// import { type NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import Mail from "nodemailer/lib/mailer";

// export async function POST(request: NextRequest) {
//   const { Name, Email, Message, Phone, Budget, Interest } =
//     await request.json();

//   const transport = nodemailer.createTransport({
//     service: "gmail",
//     /*
//         setting service as 'gmail' is same as providing these setings:
//         host: "smtp.gmail.com",
//         port: 465,
//         secure: true
//         If you want to use a different email provider other than gmail, you need to provide these manually.
//         Or you can go use these well known services and their settings at
//         https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
//     */
//     auth: {
//       user: process.env.NEXT_PUBLIC_SENDER_EMAIL,
//       pass: process.env.NEXT_PUBLIC_SENDER_PASSWORD,
//     },
//   });

//   const mailOptions: Mail.Options = {
//     from: process.env.NEXT_PUBLIC_SENDER_EMAIL,
//     to: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
//     // cc: email, (uncomment this line if you want to send a copy to the sender)
//     subject: `Message from ${Name} (${Email})`,
//     text: `
//     Name: ${Name}
//     Email: ${Email}
//     Phone: ${Phone}
//     Interest: ${Interest}
//     Budget: ${Budget}
//     Message: ${Message}
//     <html>
//     <h1>test</h1>
//     </html>`,
//   };

//   const sendMailPromise = () =>
//     new Promise<string>((resolve, reject) => {
//       transport.sendMail(mailOptions, function (err) {
//         if (!err) {
//           resolve("Email sent");
//         } else {
//           reject(err.message);
//         }
//       });
//     });

//   try {
//     await sendMailPromise();
//     return NextResponse.json({ message: "Email sent" });
//   } catch (err) {
//     return NextResponse.json({ error: err }, { status: 500 });
//   }
// }

import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { Name, Email, Message, Phone, Budget, Interest } = data;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_SENDER_EMAIL,
      pass: process.env.NEXT_PUBLIC_SENDER_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.NEXT_PUBLIC_SENDER_EMAIL,
    to: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
    subject: `Message from ${Name} (${Email})`,
    html: `<h1 class="text-red">Message from ${Name}</h1>
    <p>Email: ${Email}</p>
    <p>Phone: ${Phone}</p>
    <p>Interest: ${Interest}</p>
    <p>Budget: ${Budget}</p>
    <p>Message: ${Message}</p>`,
  };

  try {
    await transport.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 }
    );
  }
}