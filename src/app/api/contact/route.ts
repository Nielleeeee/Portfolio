import nodemailer from "nodemailer";
import type { NextRequest } from "next/server";

interface ContactForm {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export async function POST(req: NextRequest) {
  const body: ContactForm = await req.json();

  const { name, email, phoneNumber, message } = body;

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

    return new Response(
      JSON.stringify({ message: "Email sent successfully." }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log(error);
    // Similarly, return a Response object for error handling.
    return new Response(JSON.stringify({ message: "Could not send email." }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
