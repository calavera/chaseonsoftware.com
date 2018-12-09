// @flow
import React from "react";
import Layout from "../components/layout";
import Helmet from "react-helmet";

function encode(data: Object) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ContactInfo = () => (
  <div className="c-2-3">
    <h2>You can find me...</h2>{" "}
    <ul>
      <li>
        talking about software, distributed teams & work on{" "}
        <a href="https://twitter.com/chaseadamsio">Twitter</a>.
      </li>{" "}
      <li>
        building software on{" "}
        <a href="https://gitlab.com/chaseadamsio">GitLab</a> and{" "}
        <a href="https://github.com/chaseadamsio">GitHub</a>.
      </li>
      <li>
        also writing on <a href="https://medium.com/chaseadamsio">Medium</a>.
      </li>
      <li>
        professionally on{" "}
        <a href="https://www.linkedin.com/in/chaseadams/">LinkedIn</a>.
      </li>
    </ul>
    <p style={{ fontStyle: "italic" }}>
      Can&apos;t find a place that makes sense? Reach out through the form!
    </p>
  </div>
);

type ContactFormProps = {};
type ContactFormState = {
  input: {
    name: string,
    email: string,
    message: string,
    reason: string,
    botfield: string
  },
  status: string,
  errors: { server?: Error },
  touched: {
    email: boolean,
    name: boolean,
    message: boolean,
    reason: boolean
  }
};

class ContactForm extends React.Component<ContactFormProps, ContactFormState> {
  constructor(props: ContactFormProps) {
    super(props);
    this.state = {
      input: {
        name: "",
        email: "",
        message: "",
        reason: "",
        botfield: ""
      },
      status: "",
      errors: {},
      touched: {
        email: false,
        name: false,
        message: false,
        reason: false
      }
    };
  }
  handleChange = (e: { target: { name: string, value: string } }) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      input: {
        ...prevState.input,
        [name]: value
      }
    }));
  };

  handleBlur = field => (evt: {}) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };

  validate(name, email, message, reason) {
    const errors = {
      name: !name,
      email: !email,
      message: !message,
      reason: !reason
    };

    return errors;
  }

  handleSubmit = (e: {
    target: { getAttribute: Function },
    preventDefault: Function
  }) => {
    e.preventDefault();

    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state.input
      })
    })
      .then(() =>
        this.setState({
          status: "success"
        })
      )
      .catch((error: Error) =>
        this.setState({
          status: "failure",
          errors: {
            server: error
          }
        })
      );
  };

  render() {
    const { input } = this.state;
    const errors = this.validate(
      input.name,
      input.email,
      input.message,
      input.reason
    );
    const isEnabled = !Object.keys(errors).some(x => errors[x]);
    const shouldMarkError = field => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];
      return hasError ? shouldShow : false;
    };

    return (
      <div className="c-1-3">
        {this.state.errors.server && (
          <p>{this.state.errors.server.toString()}</p>
        )}
        {this.state.status === "success" ? (
          <p>Thanks for reaching out!</p>
        ) : (
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="botfield"
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input
                  value={input.botfield}
                  onChange={this.handleChange}
                  name="botfield"
                />
              </label>
            </p>

            <div
              className={shouldMarkError("reason") ? "error input" : "input"}
            >
              <select
                value={input.reason}
                onBlur={this.handleBlur("reason")}
                onChange={this.handleChange}
                name="reason"
              >
                <option value="" disabled="" defaultValue="">
                  What&apos;s up?
                </option>
                {[
                  "I want to learn something.",
                  "I want to recruit you.",
                  "Just saying hi."
                ].map((option, idx) => {
                  return (
                    <option key={idx} name="reason" value={option}>
                      {option}
                    </option>
                  );
                })}
              </select>
              {shouldMarkError("reason") && (
                <span className="error">
                  Choosing a reason helps me respond better!
                </span>
              )}
            </div>

            <div className="group pad-bottom-container">
              <TextInput
                shouldMarkError={shouldMarkError("name")}
                for="name"
                value={input.name}
                placeholder="Chase Adams"
                onBlur={this.handleBlur("name")}
                onChange={this.handleChange}
                errorMsg="Your name helps me know who you are!"
              />

              <TextInput
                shouldMarkError={shouldMarkError("email")}
                for="email"
                value={input.email}
                placeholder="hey@chaseadams.io"
                onBlur={this.handleBlur("email")}
                onChange={this.handleChange}
                errorMsg="Knowing your email enables me to respond!"
              />
            </div>

            <TextArea
              shouldMarkError={shouldMarkError("message")}
              for="message"
              value={input.message}
              placeholder="Hey, I've got something to say!"
              onBlur={this.handleBlur("message")}
              onChange={this.handleChange}
              errorMsg="A message gives me context!"
            />

            <SubmitButton isEnabled={isEnabled} />
          </form>
        )}
      </div>
    );
  }
}

type InputProps = {
  shouldMarkError: boolean,
  for: string,
  placeholder: string,
  value: string,
  onBlur: Function,
  onChange: Function,
  errorMsg: string
};

const TextInput = (props: InputProps) => (
  <div className={props.shouldMarkError ? "error input" : "input"}>
    <label htmlFor="{props.for}">{props.for}</label>
    <input
      type="text"
      name={props.for}
      autoComplete={props.for}
      placeholder={props.placeholder}
      value={props.value}
      onBlur={props.onBlur}
      onChange={props.onChange}
    />
    {props.shouldMarkError && <span>{props.errorMsg}</span>}
  </div>
);

const TextArea = (props: InputProps) => (
  <div className={props.shouldMarkError ? "error input" : "input"}>
    <label htmlFor="{props.for}">{props.for}</label>
    <textarea
      type="text"
      name={props.for}
      autoComplete={props.for}
      placeholder={props.placeholder}
      value={props.value}
      onBlur={props.onBlur}
      onChange={props.onChange}
    />
    {props.shouldMarkError && <span>{props.errorMsg}</span>}
  </div>
);

type SubmitProps = {
  isEnabled: boolean
};

const SubmitButton = (props: SubmitProps) => (
  <div>
    <button
      className={!props.isEnabled ? "error" : ""}
      disabled={!props.isEnabled}
      type="submit"
    >
      {!props.isEnabled ? "The form is incomplete..." : "Send"}
    </button>
  </div>
);

class ContactPage extends React.Component<{}, {}> {
  render() {
    return (
      <Layout>
        <Helmet title="Say Hi | Chase Adams" />
        <article style={{ minHeight: "100vh" }}>
          <header className="container-m">
            <h1 className="container">Say Hi!</h1>
          </header>
          <div className="group container-l pad-h-container">
            <ContactInfo />
            <ContactForm />
          </div>
        </article>
      </Layout>
    );
  }
}

export default ContactPage;
