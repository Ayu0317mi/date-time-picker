import { Resend } from "resend";
import LunchBuddyInviteUserEmail from "@/app/emails/my-email";


const resend = new Resend('re_9Umw5D4d_Kqq3Mp7p3fDGKaoyzAX1shsy');

export async function POST(request: Request) {
    const { email, firstname } = await request.json();

  // Send the email
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'It\'s lunch time!',
    react: LunchBuddyInviteUserEmail({
        username: firstname,
        invitedByUsername: "Callum",
        invitedByEmail: "callum@example.com",
        teamName: "Sushi lovers",
        inviteLink: "https://lunchbuddy-omega.vercel.app/",
    }),
  });
}