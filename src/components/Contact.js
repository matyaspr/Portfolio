import React from "react";

export default function Contact() {
  return (
    <section className="section section--dark" id="contact">
      <div className="container">
        <h2 className="section__title">Let's Work Together</h2>
        <p className="section__subtitle">
          I'm currently available for full-time positions and freelance projects.
        </p>
        <div className="contact__content">
          <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" className="input" required />
            <input type="email" placeholder="Your Email" className="input" required />
            <textarea placeholder="Tell me about your project..." className="input input--textarea" rows="5" required />
            <button type="submit" className="btn btn--primary btn--full">Send Message</button>
          </form>
          <div className="contact__info">
            <h3>Find me on</h3>
            <div className="contact__links">
              {[
                { name: "GitHub", url: "https://github.com" },
                { name: "LinkedIn", url: "https://linkedin.com" },
                { name: "Email", url: "mailto:hello@example.com" }
              ].map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="contact__link">
                  {link.name} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
