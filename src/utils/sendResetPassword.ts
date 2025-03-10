import { sendEmail } from "./sendEmail.js";

interface resetPasswordEmail {
  name: string;
  email: string;
  token: string;
  origin: string;
}

export const sendResetPasswordEmail = async ({
  name,
  email,
  token,
  origin,
}: resetPasswordEmail) => {
  const resetURL = `${origin}/reset-password?token=${token}&email=${email}`;
  const message = `<p>Please reset password by clicking on the following link : 
  <a href="${resetURL}">Reset Password</a></p>`;

  return sendEmail({
    to: email,
    subject: "Reset Password",
    html: `<h4> Hello, ${name}<h4/>
    ${message}
    `,
  });
};
