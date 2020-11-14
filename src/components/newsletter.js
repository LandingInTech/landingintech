import React, { useState } from "react"
import { useForm } from "react-hook-form"

const Newsletter = () => {
  const [sent, setSent] = useState(null)
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(false)

  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    fetch("/.netlify/functions/newsletter", {
      method: "POST",
      body: JSON.stringify({
        first_name: data.name,
        email: data.email,
      }),
    })
      .then(() => {
        setDisabled(true)
        setSent(true)
      })
      .catch(e => setError(e))
  }

  return (
    <form
      className="flex self-center flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="name">Name</label>
      <input
        name="name"
        placeholder="John Doe"
        ref={register({ required: true })}
        autoComplete="name"
      />

      <label htmlFor="email">Email</label>
      <input
        name="email"
        placeholder="john.doe@example.com"
        ref={register({
          required: true,
          pattern: /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/,
        })}
        autoComplete="email"
      />

      <button
        className="green-button my-5 p-2 flex justify-center items-center"
        type="submit"
        disabled={disabled}
      >
        {sent ? (
          <>
            <i className="gg-check mr-2" /> Confirmation email sent
          </>
        ) : (
          <>
            <i className="gg-mail mr-2" /> Subscribe to the newsletter!
          </>
        )}{" "}
      </button>
      <div className="flex flex-col justify-center">
        {errors.name && <span className="error">Name field is required.</span>}
        {errors.email && (
          <span className="error">Please enter a valid email.</span>
        )}
        {errors.subject && (
          <span className="error">Subject field is required.</span>
        )}
        {errors.message && (
          <span className="error">Message field is required.</span>
        )}
        {error && (
          <span className="error">
            Oops! An error occurred when submitting the form, please try again
            later.
          </span>
        )}
      </div>
    </form>
  )
}

export default Newsletter
