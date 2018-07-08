import React from "react";
import Layout from "../components/Layout";
import Helmet from "react-helmet";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        name: "",
        email: "",
        message: ""
      },
      status: "",
      errors: {}
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      input: {
        ...prevState.input,
        [name]: value
      }
    }));
  };

  validate() {
    const errors = {};
    const { input } = this.state;

    if (!input.name) {
      errors.name = `Name is required`;
    }

    if (!input.email) {
      errors.email = `Email is required`;
    }

    if (!input.message) {
      errors.message = `A message is required`;
    }

    this.setState({
      errors: errors
    });

    const isValid = Object.keys(errors).length === 0;
    return isValid;
  }

  handleSubmit = e => {
    e.preventDefault();

    const isValid = this.validate();
    if (!isValid) {
      return;
    }
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() =>
        this.setState({
          status: "success"
        })
      )
      .catch(error =>
        this.setState({
          status: "failure",
          errors: {
            server: error
          }
        })
      );
  };

  render(location) {
    const { input, errors } = this.state;

    return (
      <Layout location={location}>
        <Helmet title="Say Hi | Chase Adams" />
        <article style={{ minHeight: "100vh" }}>
          <header className="page-title">
            <h1 className="container">Say Hi!</h1>
          </header>
          <div
            style={{ padding: "5rem 0" }}
            className="group container larger pad-h-container"
          >
            <div className="c-1-2">
              <h2>You can find me...</h2>{" "}
              <ul>
                <li>
                  talking on{" "}
                  <a href="https://twitter.com/chaseadamsio">Twitter</a>
                </li>{" "}
                <li>
                  building on{" "}
                  <a href="https://gitlab.com/chaseadamsio">GitLab</a> and{" "}
                  <a href="https://github.com/chaseadamsio">GitHub</a>
                </li>
                <li> or reach out through the form!</li>
              </ul>
            </div>

            <div className="c-1-2">
              {this.state.errors.server && <p>{this.state.errors.server}</p>}
              {this.state.status === "success" && (
                <p>Thanks for reaching out!</p>
              )}
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div className="input">
                  <select>
                    <option value="" disabled="" defaultValue="">
                      What's up?
                    </option>
                    {[
                      "I want to learn something.",
                      "I want to recruit you.",
                      "Just saying hi."
                    ].map((option, idx) => {
                      return (
                        <option key={idx} name="reasonOption" value="{option}">
                          {option}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="group pad-bottom-container">
                  <div className="input">
                    <label htmlFor="name">name</label>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      value={input.name}
                      onChange={this.handleChange}
                    />
                    {!!errors.name && (
                      <span className="error">{errors.name}</span>
                    )}
                  </div>

                  <div className="input">
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      autoComplete="email"
                      value={input.email}
                      onChange={this.handleChange}
                    />
                    {!!errors.email && (
                      <span className="error">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className="input">
                  <label>message</label>
                  <textarea
                    name="message"
                    value={input.message}
                    onChange={this.handleChange}
                  />
                  {!!errors.message && (
                    <span className="error">{errors.message}</span>
                  )}
                </div>
                <div>
                  <button type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>
        </article>
      </Layout>
    );
  }
}

export default ContactPage;
