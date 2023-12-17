//email-sender
const nodemailer = require('nodemailer');


//Creating a transporter using my email credentials
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'justinofodile@gmail.com',
        pass: 'xxxx xxxx xxxx xxxx',
    }
})

//Defining the email options
const mailOptions = {
    from: 'justinofoidle@gmail.com',
    to: 'justinofodile@gmail.com',
    subject: 'testing Email from code',
    text: 'This is the test email sent from Node.js! This is the send test. Let me know if it is working as expected'
};


//Sending the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Email sent: ', info.response)
    }
});