const fetch = require("node-fetch")

exports.handler = async (event, context, callback) => {
  const data = JSON.parse(event.body)
  data["api_key"] = process.env.GATSBY_NEWSLETTER_API_KEY

  const pass = body => {
    callback(null, { statusCode: 200, body: JSON.stringify(body) })
  }

  try {
    const request = await fetch(process.env.GATSBY_NEWSLETTER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const response = await request.json()

    await pass(response)
  } catch (err) {
    await pass(err)
  }
}
