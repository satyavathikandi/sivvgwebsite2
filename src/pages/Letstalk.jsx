import React from "react";
import { useForm } from "react-hook-form";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Message sent successfully!");
    reset();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-24">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 text-[#4B50A5]">
        Get In Touch
      </h1>
      <p className="text-gray-700 text-base md:text-lg text-center max-w-2xl mb-12">
        Ready to take your trading to the next level? Get in touch with our
        experts for personalized guidance and support.
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-7xl">
        {/* ✅ Contact Form */}
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-xl w-full border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#4B50A5]">
            Send Us a Message
          </h2>
          <p className="text-[#FF3D6E] text-base mb-6">
            Fill out the form below and we'll get back to you soon.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block font-medium mb-1 text-gray-700">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full border border-[#4B50A5] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-1 text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter a valid email",
                  },
                })}
                className="w-full border border-[#4B50A5] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block font-medium mb-1 text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit phone number",
                  },
                })}
                className="w-full border border-[#4B50A5] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block font-medium mb-1 text-gray-700">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="4"
                {...register("message", { required: "Message is required" })}
                className="w-full border border-[#4B50A5] rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
                placeholder="Enter your message"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#6C63FF] to-[#A47CF3] text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>

            <p className="text-sm text-gray-500">
              * Required fields. We respect your privacy.
            </p>
          </form>
        </div>

        {/* ✅ Info Cards */}
        <div className="flex flex-col gap-6 w-full">
          {/* Contact Info Card */}
          <div className="bg-[#4B50A5] rounded-xl p-6 shadow-md w-full text-white">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="flex items-center gap-2 text-lg mb-2">
              <Mail size={22} /> sivvginfotechpvtltd@gmail.com
            </p>
            <p className="flex items-center gap-2 text-lg mb-2">
              <Clock size={22} /> Monday – Friday: Trading Hours
            </p>
            <p className="flex items-center gap-2 text-lg mb-2">
              <MapPin size={22} /> Marikavalasa – Visakhapatnam
            </p>
            <p className="flex items-center gap-2 text-lg">
              <Phone size={22} /> +91 9988776655
            </p>
          </div>

          {/* Quick Response Card */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-4 text-[#FF3D6E]">
              Quick Response
            </h3>
            <p className="text-lg mb-2 text-gray-800">
              Average response time: <span className="font-semibold text-[#4B50A5]">Market hours</span>
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Our support team provides prompt, professional assistance for all
              your trading queries and concerns.
            </p>
          </div>

          {/* Interactive Map Card */}
          <div className="bg-[#4B50A5] rounded-xl p-8 shadow-md w-full text-center text-white hover:shadow-2xl transition-all duration-300">
            <a
              href="https://www.google.com/maps/place/V%26V+Software+Solutions/@17.8410354,83.3564147,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <MapPin className="w-14 h-14 mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
            </a>
            <p className="text-2xl font-bold mb-1">Interactive Map</p>
            <p className="text-lg">Visakhapatnam, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
