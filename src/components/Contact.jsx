import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook this up to an API route, email service (e.g. EmailJS, Formspree),
    // or your own backend endpoint.
    console.log("Contact form submitted:", form);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-text">
        <h2>
          Contact<span> Me</span>
        </h2>
        <h4>Let's work together</h4>
        <p>
          Have a project in mind or a role you think I'd be a fit for? Send a
          message and I'll get back to you soon.
        </p>
        <ul className="contact-list">
          <li>
            <i className="bx bxs-send"></i> contact@rahulprakash7086@gmail.com
          </li>
          <li>
            <i className="bx bxs-phone"></i> +91 9258866171
          </li>
        </ul>
        <div className="contact-icons">
          <a href="#" aria-label="Facebook">
            <i className="bx bxl-facebook-circle"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="bx bxl-instagram"></i>
          </a>
          <a
    href="https://www.linkedin.com/in/rahul-prakash-621627215"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <i className="bx bxl-linkedin"></i>
  </a>
        </div>
      </div>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Enter Your Subject"
            value={form.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            cols="40"
            rows="10"
            placeholder="Enter your message"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="send">
            Submit
          </button>
          {sent && <p className="form-success">Message sent — thank you!</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
