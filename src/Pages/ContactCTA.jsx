import React from "react";

const ContactCTA = () => {
  return (
    <section className="py-20 px-6 md:px-20 text-center bg-white">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-black mb-4">
        Lets Design Together
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-8">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </p>

      {/* Email Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto"
      >
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full sm:w-[400px] px-4 py-3 rounded-md border border-gray-300 bg-gray-100 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-semibold transition"
        >
          Contact Me
        </button>
      </form>
    </section>
  );
};

export default ContactCTA;
