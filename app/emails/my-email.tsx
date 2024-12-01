//my-email.tsx
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import { Briefcase } from "lucide-react";
import * as React from "react";

interface LunchBuddyInviteUserEmailProps {
  username?: string;
  invitedByUsername?: string;
  invitedByEmail?: string;
  teamName?: string;
  inviteLink?: string;
}

const baseUrl =
  "https://github.com/Ayu0317mi/date-time-picker/tree/main/public";

export const LunchBuddyInviteUserEmail = ({
  username,
  invitedByUsername,
  invitedByEmail,
  teamName,
  inviteLink,
}: LunchBuddyInviteUserEmailProps) => {
  const previewText = `Lunch buddy notification for ${teamName}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Link href="/" className="flex items-center gap-2">
                <Briefcase className="w-8 h-8" />
                <span className="className=text-lg font-semibold">Lunch Buddy</span>
              </Link>
            </Section>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Img
                src={`${baseUrl}/briefcase-icon.png`}
                alt="Lunch Buddy icon"
                className="w-[100px] h-[100px] rounded-full"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              It s lunch time for <strong>{teamName}</strong> !
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hi {username},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>{invitedByUsername}</strong> (
              <Link
                href={`mailto:${invitedByEmail}`}
                className="text-blue-600 no-underline"
              >
                {invitedByEmail}
              </Link>
              ) has invited you to a lunch plan for <strong>{teamName}</strong>.
            </Text>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href="https://lunchbuddy-omega.vercel.app/"
              >
                Open Lunch Buddy
              </Button>
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              or copy and paste this URL into your browser:{" "}
              <Link href={inviteLink} className="text-blue-600 no-underline">
                {inviteLink}
              </Link>
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              This invitation was intended for{" "}
              <span className="text-black">{username}</span>. If you
              were not expecting this invitation, you can ignore this email. If
              you are concerned about your account s safety, please reply to
              this email to get in touch with us.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

LunchBuddyInviteUserEmail.PreviewProps = {
  username: "Ayumi",
  invitedByUsername: "Callum",
  invitedByEmail: "callum@example.com",
  teamName: "Sushi lovers",
  inviteLink: "https://lunchbuddy-omega.vercel.app/",
} as LunchBuddyInviteUserEmailProps;

export default LunchBuddyInviteUserEmail;
