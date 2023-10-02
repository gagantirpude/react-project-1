import React from "react";

const ContactUs = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        {/* Form */}
        <form action="">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter Your Name" required />
          </div>
          <div>
            <label htmlFor="name">Email</label>
            <input type="email" placeholder="Enter Your Email" required />
          </div>
          <div>
            <label htmlFor="name">Message</label>
            <input
              type="text"
              placeholder="Tell us about Your Query..."
              required
            />
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ContactUs;
