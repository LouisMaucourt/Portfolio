// import { render } from "@react-email/components";
// import KoalaWelcomeEmail from "../../../emails";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY!);

// interface EmailRequestBody {
//     email: string;
//     userFirstName: string;
// }

// export async function POST(request: Request): Promise<Response> {
//     try {
//         // Parse the JSON body of the request
//         const { email, userFirstName }: EmailRequestBody = await request.json();

//         // Validate input
//         if (!email || !userFirstName) {
//             return new Response(JSON.stringify({ error: "Missing email or userFirstName" }), { status: 400 });
//         }

//         // Send the email using Resend API
//         const { data, error } = await resend.emails.send({
//             from: "Acme <onboarding@resend.dev>",
//             to: [email],
//             subject: "Merci",
//             html: render(KoalaWelcomeEmail({ userFirstName })),
//         });

//         // Handle errors
//         if (error) {
//             return new Response(JSON.stringify({ error: "Failed to send email", details: error }), { status: 500 });
//         }

//         // Return a success response
//         return new Response(JSON.stringify({ message: "Email bien envoyé" }), { status: 200 });
//     } catch (err) {
//         // Handle unexpected errors
//         console.error("Unexpected error:", err); // Optional: log the error for debugging
//         return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
//     }
// }
