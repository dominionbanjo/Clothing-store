import sgMail from "@sendgrid/mail";

interface sendEmail {
  to: string;
  subject: string;
  html: string;
}

export const sendEmail = async ({ to, subject, html }: sendEmail) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
  const info = await sgMail
    .send({
      from: "joshuabanjo4@gmail.com",
      to,
      subject,
      text: "Clean Bees",
      html,
    })
    .catch((error) => {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(
          "There was an error sending the email please try again later"
        );
      }
    });
  return;
};
