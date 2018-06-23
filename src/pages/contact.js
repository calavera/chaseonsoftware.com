import React from "react";

class ContactPage extends React.Component {
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <article>
        <header className="page-title">
          <h1 className="container">Say Hi!</h1>
        </header>
        <div className="group container pad-h-container">
          <div className="c-1-2">
            <form
              name="contact"
              method="post"
              action="/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </p>

              <div className="group pad-bottom-container">
                <div className="input c-1-2">
                  <label>name</label>
                  <input
                    type="text"
                    name="name"
                    autoComplete="off"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="input c-1-2">
                  <label>email</label>
                  <input type="text" name="name" onChange={this.handleChange} />
                </div>
              </div>

              <div>
                <div className="input">
                  <label>message</label>
                  <textarea name="message" onChange={this.handleChange} />
                </div>
              </div>
              <div>
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </article>
    );
  }
}

export default ContactPage;
