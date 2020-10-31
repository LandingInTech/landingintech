require("dotenv").config()
const {
  GATSBY_MAILGUN_API_KEY,
  GATSBY_MAILGUN_DOMAIN,
  GATSBY_MAILGUN_URL,
} = process.env
const mailgun = require("mailgun-js")({
  apiKey: GATSBY_MAILGUN_API_KEY,
  domain: GATSBY_MAILGUN_DOMAIN,
  url: GATSBY_MAILGUN_URL,
})

exports.handler = async (event, context, callback) => {
  if (event.httpMethod !== "POST") {
    await callback(null, {
      statusCode: 405,
      body: "Method Not Allowed",
      headers: { Allow: "POST" },
    })
  }

  const { data } = JSON.parse(event.body)

  const mailgunData = {
    from: process.env.GATSBY_EMAIL,
    to: process.env.GATSBY_EMAIL,
    subject: data.subject,
    text: `
    Name: ${data.name} 
    Message: ${data.message}`,
  }

  try {
    await mailgun.messages().send(mailgunData, function (error, body) {
      console.log(body)
    })

    await callback(null, {
      statusCode: 200,
      body: "Your message was sent successfully! We'll be in touch soon.",
    })
  } catch (err) {
    await callback(null, { statusCode: 500, body: JSON.stringify(error) })
  }
}
