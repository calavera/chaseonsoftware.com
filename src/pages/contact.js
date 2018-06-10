import React from "react";

export default () => (
  <div className="small-container pad-container">
    <h1>I'd love to talk! Email me at the address below</h1>
    <form name="contact" method="POST" netlify>
      <p>
        <label>Your Name: <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
);
