import React, { useState } from "react";

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
    <div className="min-h-screen flex items-center justify-center bg-black px-4 py-10">
      <div className="w-full max-w-lg md:max-w-xl lg:max-w-2xl p-8 sm:p-10 rounded-2xl bg-[#1a1a1a] text-gray-200 font-sans shadow-2xl bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%232f2f2f\\' fill-opacity=\\'0.4\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zm0-30V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-fixed bg-[length:15px_15px]">
        
        {/* Heading */}
        <h1 className="text-center text-3xl sm:text-4xl font-semibold mb-3">Let's Get In Touch</h1>
        <p className="text-center text-gray-400 text-sm sm:text-base mb-8 leading-relaxed">
          We'd love to hear from you – let's turn your vision into reality.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-gray-200 text-sm sm:text-base">
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
              className="w-full px-4 py-3 rounded-md bg-[#333] text-gray-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          {/* Phone */}
          <div className="mb-5">
            <label htmlFor="phone" className="block mb-2 text-gray-200 text-sm sm:text-base">
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
              className="w-full px-4 py-3 rounded-md bg-[#333] text-gray-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-gray-200 text-sm sm:text-base">
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
              className="w-full px-4 py-3 rounded-md bg-[#333] text-gray-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          {/* Note */}
          <div className="mb-5">
            <label htmlFor="note" className="block mb-2 text-gray-200 text-sm sm:text-base">
              Note
            </label>
            <textarea
              id="note"
              name="note"
              value={formData.note}
              onChange={handleChange}
              placeholder="Leave us a message (optional)"
              className="w-full px-4 py-3 rounded-md bg-[#333] text-gray-200 text-sm sm:text-base min-h-[100px] resize-y focus:outline-none focus:ring-2 focus:ring-gray-500"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-md bg-white text-[#1a1a1a] font-semibold text-base sm:text-lg mt-6 transition-all duration-300 hover:bg-gray-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
