import React, { Component } from 'react'
import Link from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join("&")
}

class ContactPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-form", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  render() {
    return (
      <section className="section">

          <h1 className="title is-size-1">Contact Me</h1>
          <h3 className="subtitle is-size-3">Have a great project? Wanna work with me? Let's get in touch</h3>

          <div className="columns">
            <div className="column is-half">
              <form
                data-netlify="true"
                method="post"
                name="contact-form"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                <div className="control is-hidden">
                  <label>Don't fill this out: <input name="bot-field"/></label>
                </div>
                <div className="field">
                  <label htmlFor="name" className="label">Name</label>
                  <div className="control">
                    <input type="text" className="input" id="name" placeholder="Kanye West" name="name" onChange={this.handleChange}/>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="email" className="label">Email</label>
                  <div className="control">
                    <input type="email" className="input" id="email" placeholder="ilovekanye@kanyewest.com" name="email" onChange={this.handleChange}/>
                  </div>
                  </div>

                <div className="field">
                  <label htmlFor="message" className="label">Message</label>
                  <div className="control">
                    <textarea name="message" className="textarea" id="message" placeholder="I love you like Kanye loves Kanye" onChange={this.handleChange}></textarea>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input type="submit" value="Send" className="button is-primary"/>
                  </div>
                </div>

              </form>
            </div>
          </div>

          <div className="columns">
            <div className="column">
              <a
                href="mailto:fernandojgruning@gmail.com"
                className="is-block has-text-centered is-size-2 has-text-weight-semibold"
              >
                ✉️ fernandojgruning@gmail.com
              </a>
            </div>
          </div>
      </section>
    )
  }
}

export default ContactPage
