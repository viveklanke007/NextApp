
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req){
  const {name, email, message} = await req.json();

  if(!name || !email || !message){
    return NextResponse.json({message:"all fields require"})
  }

  try{
    const data = await resend.emails.send({
      from:"onbording@resend.dev",
      to:process.env.EMAIL_ID,
      subject:`FROM PORTFOLIO WEB BY ${name}`,
      html:`<h1>New message from Portfolio by ${name}</h1>
      <h3><strong>Email: ${email}</strong></h3>
      <p> ${message}</h1>`,
      replyTo:email
    });

    return NextResponse.json({message:"sent successfully"})
  }catch(error){
    console.error("Error" ,error)
    return NextResponse.json({error:error.message})
  }
}
