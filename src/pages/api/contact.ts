import nodemailer from "nodemailer";

export default async function contactAPI(req: any, res: any) {
  const { name, email, phoneNumber, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_TO_USER,
      subject: "New Contact Form Submission",
      text: `
      Name: ${name}\n
      Email: ${email}\n
      Phone Number: ${phoneNumber}\n
      Message: ${message}
    `,
    });

    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Could not send email." });
  }
}
