import React from 'react';
import image from '../assets/contact.png';
import { useForm } from 'react-hook-form';
import SendButton from './SendButton';
import axios from "axios";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:8080/api/us/submit", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert("Message sent successfully!");
      console.log("Response:", res.data);
      reset();
    } catch (err) {
      console.error("Error:", err.response ? err.response.data : err.message);
      alert("Failed to send message. Try again.");
    }
  };
  return (
    <section className="px-4 py-12 md:px-10">
  {/* Top Grid: Heading and Image */}
{/* Top Grid: Heading and Image */}
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
  {/* Left Text Block */}
  <div className="flex flex-col justify-center text-center md:text-left order-1 md:order-2 mt-14 md:mt-0">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="bg-[#4b4d9c] bg-clip-text text-transparent">Get In Touch</span>
      </h1>
    <p className="text-gray-700 text-lg">
      Want to get in touch? We’d love to hear from you. Here's how you can reach us.
    </p>
  </div>

  {/* Right Image Block */}
  <div className="flex justify-center md:justify-end order-1 md:order-2">
    <img
      src={image}
      alt="Support agent"
      className="w-[280px] sm:w-[320px] md:w-[400px] h-[280px] sm:h-[320px] md:h-[400px] object-cover"
    />
  </div>
</div>


  {/* Bottom Card and Contact Form side by side */}
  <div className="max-w-8xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
    {/* Contact Info Card */}
    <div className="bg-[#4B50A5] text-white px-8 py-12 md:px-12 rounded-xl w-full">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">How to Find Us</h2>
      <p className="mb-6 text-md">
        Discover more about SIVVG. If you have any questions, just fill the contact form and we will answer you shortly.
      </p>
      <p className="mb-6 text-md">Ready to take the next step? Let’s connect.</p>

      <div className="space-y-4 mb-6">
        <div className="flex items-start gap-2">
          <span className="text-md mt-1">●</span>
          <p className="text-md">
            <strong>Phone no :</strong> +91 9542992314
          </p>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-md mt-1">●</span>
          <p className="text-md">
            <strong>Email :</strong> vvsoftwaresolutions@gmail.com
          </p>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-md mt-1">●</span>
          <p className="text-md">
            <strong>Live Chat :</strong> Available during trading hours
          </p>
        </div>
      </div>

      <div className="flex items-start gap-2">
        <p className="text-md leading-relaxed w-full">
          <strong>Location :</strong>  
          <br />
          NH-16, Marikavalasa Rd, beside PMR Function Hall Junction
          <br />
          Visakhapatnam, Andhra Pradesh 530048
        </p>
      </div>
    </div>

    {/* Contact Form */}
    <div className="bg-white shadow-lg rounded-lg p-8 w-full">
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-8 text-[#4B50A5]">
        Contact Form
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block font-medium mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            placeholder="Enter your name"
            className="w-full border border-[#4B50A5] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4B50A5] placeholder-transparent hover:placeholder-gray-400 transition-all"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Enter a valid email'
              }
            })}
            placeholder="Enter your email"
            className="w-full border border-[#4B50A5] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4B50A5] placeholder-transparent hover:placeholder-gray-400 transition-all"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Enter a valid 10-digit phone number'
              }
            })}
            placeholder="Enter your phone number"
            className="w-full border border-[#4B50A5] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4B50A5] placeholder-transparent hover:placeholder-gray-400 transition-all"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block font-medium mb-1">
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            rows="4"
            {...register('message', { required: 'Message is required' })}
            placeholder="Enter your message"
            className="w-full border border-[#4B50A5] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4B50A5] placeholder-transparent hover:placeholder-gray-400 transition-all"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <SendButton />
      </form>
    </div>
  </div>
</section>

  );
};

export default Contact;






























