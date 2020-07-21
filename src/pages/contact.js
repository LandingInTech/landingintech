import React, { useState} from "react"
import { useForm } from "react-hook-form"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"

const Contact = () => {
    const [sent, setSent] = useState(false)
    const [copied, setCopied] = useState(false)
    const {register, handleSubmit, errors} = useForm()

    const onSubmit = data => {
        fetch('/.netlify/functions/contact', {
            method: "POST",
            body: JSON.stringify({data})
        })
        .then(() => setSent(true))
    }

    const copyToClipboard = () => {
        setCopied(true)
        navigator.clipboard.writeText("hello@landingintech.com")

        setTimeout(() => setCopied(false), 1500)

    }

    return (
        <Layout>
            <SEO title="Contact" />
            <section className="py-12 flex flex-col md:flex-row">
                <div className="md:w-1/2 mr-12">
                    <h1 className="mb-5 mt-12 plane">Contact us</h1>
                    <p>You can contact us by getting in touch through social media, filling out the form or by sending us an email at <span role="button"  tabIndex={0} className="email" onClick={() => copyToClipboard()} onKeyDown={() => copyToClipboard()}>hello@landingintech.com {copied ? <span className="copied-tooltip">Copied to the clipboard!</span> : ''} </span></p>

                    <Social />
                
                </div>
                <div className="flex-grow">
                    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="name">Name</label>
                        <input name="name" placeholder="John Doe" ref={register({ required: true})} autoComplete="name" />
                        
                        <label htmlFor="email">Email</label>
                        <input name="email" placeholder="john.doe@example.com" ref={register({ required: true, pattern: /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/})} autoComplete="email" />
                        
                        <label htmlFor="subject">Subject</label>
                        <input name="subject" placeholder="Hello!" ref={register({ required: true})} />

                        <label htmlFor="message">Message</label>
                        <textarea name="message" ref={register({ required: true})} placeholder="Your message..." />
                        <button className="green-button my-5 md:mx-24 p-2 flex justify-center items-center" type="submit">{sent ? <><i className="gg-check mr-2" /> Sent Successfully</> : <><i className="gg-mail mr-2" /> Send Message</>}  </button>
                        <div className="flex flex-col justify-center">
                            {errors.name && <span className="error">Name field is required.</span>}
                            {errors.email &&   <span className="error">Please enter a valid email.</span>} 
                            {errors.subject && <span className="error">Subject field is required.</span>}
                            {errors.message && <span className="error">Message field is required.</span>}
                        </div>

                    </form>
                </div>
            </section>
        </Layout>
    )

}

export default Contact