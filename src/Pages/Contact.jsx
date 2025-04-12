import React, { useRef, useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const captchaRef = useRef(null);
  const [captchaToken, setCaptchaToken] = useState(null);

  const serviceKey = import.meta.env.VITE_APP_SERVICE_KEY
  const tempelateKey = import.meta.env.VITE_APP_TEMPLATE_KEY
  const publicProductKey = import.meta.env.VITE_APP_PUBLIC_PRODUCT_KEY

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please verify that you're human.");
      return;
    }

    emailjs
      .sendForm(
        serviceKey,
        tempelateKey,
        formRef.current,
        publicProductKey
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
          formRef.current.reset();
          setCaptchaToken(null);
          captchaRef.current.resetCaptcha();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div id='Contact'>
      <section className="py-10 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          Contact <span className="text-orange-500">Me!</span>
        </h2>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              required
              className="input border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="input border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              name="phone"
              placeholder="Mobile Number"
              required
              className="input border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Email Subject"
              required
              className="input border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <textarea
            name="message"
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
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
