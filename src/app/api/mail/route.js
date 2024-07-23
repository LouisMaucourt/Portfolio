import { render } from "@react-email/components";
import KoalaWelcomeEmail from "../../../emails";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
    try {
        // Parse the JSON body of the request
        const { email, userFirstName } = await request.json();

        // Validate input
        if (!email || !userFirstName) {
            return new Response(JSON.stringify({ error: "Missing email or userFirstName" }), { status: 400 });
        }

        // Send the email using Resend API
        const { data, error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: [email],
            subject: "Merci",
            html: render(KoalaWelcomeEmail({ userFirstName })),
        });

        // Handle errors
        if (error) {
            return new Response(JSON.stringify(error), { status: 500 });
        }

        // Return a success response
        return new Response(JSON.stringify({ message: "Email bien envoyé" }), { status: 200 });
    } catch (err) {
        // Handle unexpected errors
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}
