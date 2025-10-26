import React, { useState } from "react";
import "@fontsource/roboto-condensed"; // install: npm i @fontsource/roboto-condensed

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message, ${formData.name}!`);
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 py-10 font-['Roboto_Condensed']">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg sm:max-w-xl flex flex-col gap-6 text-gray-200"
      >
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
            Let's Get In Touch
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            We'd love to hear from you – let's turn your vision into reality.
          </p>
        </div>

        {/* Name */}
        <div>
          <label htmlFor="name" className="block mb-2 text-sm sm:text-base">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full px-4 py-3 rounded-md bg-[#1a1a1a] text-gray-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block mb-2 text-sm sm:text-base">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
            className="w-full px-4 py-3 rounded-md bg-[#1a1a1a] text-gray-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-2 text-sm sm:text-base">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            required
            className="w-full px-4 py-3 rounded-md bg-[#1a1a1a] text-gray-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Note */}
        <div>
          <label htmlFor="note" className="block mb-2 text-sm sm:text-base">
            Note
          </label>
          <textarea
            id="note"
            name="note"
            value={formData.note}
            onChange={handleChange}
            placeholder="Leave us a message (optional)"
            className="w-full px-4 py-3 rounded-md bg-[#1a1a1a] text-gray-200 text-sm sm:text-base min-h-[100px] resize-y focus:outline-none focus:ring-2 focus:ring-gray-500"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-md bg-white text-black font-semibold text-base sm:text-lg mt-4 transition-all duration-300 hover:bg-gray-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
