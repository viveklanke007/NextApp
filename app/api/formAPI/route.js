// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const { name, email, message } = await req.json();
//     if (!name || !email || !message) {
//       return new Response("missing field", { status: 400 });
//     }
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_ID,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: email,
//       to: process.env.EMAIL_ID,
//       subject: `New message by ${name} from Portfolio web`,
//       text: message,
//     });
//     return Response.json({
//       message: "Email sent successfully !",
//     });
//   } catch (error) {
//     console.log(error);
//     console.log(error.message);
//     return Response.json(
//       {
//         error: "Failed to send email !",
//         detail: error,
//       },
//       { status: 500 }
//     );
//   }
// }

// app/api/formAPI/route.js or route.ts (in Next.js 13+)
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing field(s)' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_ID}>`,
      to: process.env.EMAIL_ID,
      replyTo: email,
      subject: `New message from ${name} via Portfolio`,
      text: message,
    });

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email Error:', error);
    return NextResponse.json(
      { error: 'Failed to send email.', detail: error.message },
      { status: 500 }
    );
  }
}
