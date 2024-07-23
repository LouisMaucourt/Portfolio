import { render } from "@react-email/components";
import KoalaWelcomeEmail from "../../../emails";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request, response: Response) {
    const {email, userFirstName} = await request.json();
}

const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: [email],
    subject: "Merci"
    html: render(KoalaWelcomeEmail({ userFirstname }))
});

if (error) { 
    return Response.json(error)
}
return Response.json({ message: "Email bien envoyé" });