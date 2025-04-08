// Contact.jsx or wherever your form lives
import React, { useRef, useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const Contact = () => {
  const captchaRef = useRef(null);
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please verify that you're human.");
      return;
    }

    // Here you can submit form data along with captchaToken
    console.log("Form Submitted with token:", captchaToken);
  };

  return (
    <section className="py-10 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">
        Contact <span className="text-orange-500">Me!</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
  <input
    type="text"
    placeholder="Full Name"
    required
    className="input border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
  />
  <input
    type="email"
    placeholder="Email Address"
    required
    className="input border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
  />
  <input
    type="text"
    placeholder="Mobile Number"
    required
    className="input border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
  />
  <input
    type="text"
    placeholder="Email Subject"
    required
    className="input border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
  />
</div>

<textarea
  placeholder="Your Message"
  rows="5"
  required
  className="input w-full border border-gray-300 rounded-md p-3 mt-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
/>

        <div className="flex justify-center">
          <HCaptcha
            sitekey="10000000-ffff-ffff-ffff-000000000001"
            onVerify={(token) => setCaptchaToken(token)}
            ref={captchaRef}
          />
        </div>

        <div className="text-center">
          <button type="submit" className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
