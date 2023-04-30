import sgMail from '@sendgrid/mail' 
sgMail.setApiKey(process.env.SENDGRIP_API_KEY!)


 

  export async function sendContactMessage(name: string, email: string, phone: string, message: string) {
    const msg = {
        to: 'nathaniel.1stacc@gmail.com', // Change to your recipient
        from: 'styleitdaily.dev@gmail.com', // Change to your verified sender
        subject: 'Contact Message from my Portfolio',
        text: message ,
        html: `
        From: <strong>${name}</strong><br>
        Phone: <strong>${phone}</strong><br>
        Email: <strong>${email}</strong><br>
        Message: <br>
        ${message} 
        `,
      }
      try {
        return await sgMail.send(msg) 
      } catch (error) {
        console.log(error);
      } 
  } 