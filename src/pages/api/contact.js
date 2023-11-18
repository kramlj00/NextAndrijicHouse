import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  const { name, email, message } = req.body;

  try {
    await sendgrid.send({
      to: "kristinaramljak5@gmail.com",
      from: "kristinaramljak5@gmail.com",
      subject: "Andrijić House",
      text: `Novi upit za Andrijić House od ${name}. Email: ${email} Poruka: ${message}`,
      html: `<div style="color:#444444; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:Center;">
        <img src="http://cdn.mcauto-images-production.sendgrid.net/bfb1bbfa00a8561b/3df4bf0e-7fea-4e91-a492-e101f032e89d/271x51.png" style="height: 50px; margin-bottom: 20px"/>
        <h1 style="line-height:30px; margin-bottom:10px;">Novi upit za Andrijić House od ${name}</h1>
        <p style="font-size: 18px;">Email: <strong>${email}</strong></p><br/>
        <p style="font-size: 18px; line-height:30px; text-align:left;">Poruka: <strong>${message}</strong></p>`,
    });

    return res.status(200).json({ status: "Ok" });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}

export default sendEmail;
