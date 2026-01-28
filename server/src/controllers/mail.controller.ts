import { Request, Response } from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.MAIL_USER, "process.env.MAIL_USERNAME");
export const sendMail = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, message, formId } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      // tls: {
      //   rejectUnauthorized: false,
      // },
    });

    await transporter.sendMail({
      from: `"New Inquiry" <${process.env.MAIL_USER}>`,
      // to: ["dheeraj@adaired.com", "sahil@adaired.com", "anuj@adaired.org"],
      to: ["anuj@adaired.org"],

      subject: `New Inquiry`,
      html: `
  <div style="background:#f4f6f8;padding:30px 0;font-family:Arial,Helvetica,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.08);">
            
            <!-- Header -->
            <tr>
              <td style="background:#0f172a;padding:20px 30px;">
                <h2 style="margin:0;color:#ffffff;font-size:20px;">
                  New Inquiry Received
                </h2>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:30px;">
                <p style="margin:0 0 20px;color:#334155;font-size:14px;">
                  You’ve received a new inquiry with the following details:
                </p>

                <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#334155;">
                  <tr>
                    <td style="padding:10px 0;width:120px;font-weight:bold;">Name</td>
                    <td style="padding:10px 0;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;font-weight:bold;">Email</td>
                    <td style="padding:10px 0;">${email}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;font-weight:bold;">Phone</td>
                    <td style="padding:10px 0;">${phone}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;font-weight:bold;vertical-align:top;">Message</td>
                    <td style="padding:10px 0;line-height:1.6;">
                      ${message}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f1f5f9;padding:16px 30px;text-align:center;">
                <p style="margin:0;font-size:12px;color:#64748b;">
                  This email was sent from your website contact form.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </div>
`,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};
