require('dotenv').config()
const { GATSBY_MAILGUN_API_KEY, GATSBY_MAILGUN_DOMAIN, GATSBY_MAILGUN_URL } = process.env
const mailgun = require('mailgun-js')({ apiKey: GATSBY_MAILGUN_API_KEY, domain: GATSBY_MAILGUN_DOMAIN, url: GATSBY_MAILGUN_URL })

exports.handler = async (event, context, callback) => {
  const pass = (body) => {callback(null, {statusCode: 200, body: "Your message was sent successfully! We'll be in touch soon."})}
  
  if (event.httpMethod !== 'POST') {
    await pass({ statusCode: 405, body: 'Method Not Allowed', headers: {'Allow': 'POST'}})
  }

  const data = JSON.parse(event.body)

  const mailgunData = {
    from: process.env.GATSBY_EMAIL,
    to: process.env.GATSBY_EMAIL,
    subject: data.subject,
    text: `
    Name: ${data.Name} 
    Message: ${data.Message}`
  }

  console.log(mailgunData)

  try {
    await mailgun.messages().send(mailgunData, function(error, body){
      console.log(body)
    })

    await pass({statusCode: 200, body: "Your message was sent successfully! We'll be in touch soon."})
  } catch(err) {
      await pass(error)
  }
}