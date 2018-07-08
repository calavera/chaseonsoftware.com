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
      errors: {},
      touched: {
        email: false,
        name: false,
        message: false
      }
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

  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };

  validate(name, email, message) {
    const errors = {
      name: !name,
      email: !email,
      message: !message
    };

    return errors;
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
    const { input } = this.state;
    const errors = this.validate(input.name, input.email, input.message);
    const isEnabled = !Object.keys(errors).some(x => errors[x]);
    const shouldMarkError = field => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];
      return hasError ? shouldShow : false;
    };

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
                  <div
                    className={
                      shouldMarkError("name") ? "error input" : "input"
                    }
                  >
                    <label htmlFor="name">name</label>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      placeholder="Chase Adams"
                      value={input.name}
                      onBlur={this.handleBlur("name")}
                      onChange={this.handleChange}
                    />
                    {shouldMarkError("name") && (
                      <span className="error">Name is required</span>
                    )}
                  </div>

                  <div
                    className={
                      shouldMarkError("email") ? "error input" : "input"
                    }
                  >
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      autoComplete="email"
                      placeholder="hey@chaseadams.io"
                      value={input.email}
                      onBlur={this.handleBlur("email")}
                      onChange={this.handleChange}
                    />
                    {shouldMarkError("email") && (
                      <span className="error">Email is required</span>
                    )}
                  </div>
                </div>

                <div
                  className={
                    shouldMarkError("message") ? "error input" : "input"
                  }
                >
                  <label>message</label>
                  <textarea
                    name="message"
                    placeholder="Hey, I've got something to say!"
                    value={input.message}
                    onBlur={this.handleBlur("message")}
                    onChange={this.handleChange}
                  />
                  {shouldMarkError("message") && (
                    <span className="error">Message is required</span>
                  )}
                </div>
                <div>
                  <button
                    className={!isEnabled && "error"}
                    disabled={!isEnabled}
                    type="submit"
                  >
                    {!isEnabled ? "Can't Send Yet..." : "Send"}
                  </button>
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
