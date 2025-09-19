import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import CookieBanner from "./CookieBanner";

const Footer = () => {
  const [openCookie, setOpenCookie] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);

  // Cookie modal actions: Accept/Decline
  const acceptCookies = () => {
    try { localStorage.setItem("sivvg_cookie_consent", "accepted"); } catch { /* empty */ }
    setOpenCookie(false);
  };
  const declineCookies = () => {
    try { localStorage.setItem("sivvg_cookie_consent", "declined"); } catch { /* empty */ }
    setOpenCookie(false);
  };

  return (
    <>
      <footer className="bg-[#4b4d9c] text-white">
        <div className="bg-[#383a8c] p-6 md:p-12 text-sm">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">

            {/* Column 1 - Company */}
            <div>
              <h3 className="font-semibold mb-4 text-lg md:text-xl">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/home" className="hover:text-purple-300 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-purple-300 transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/ourassistance" className="hover:text-purple-300 transition">
                    Our Assistance
                  </Link>
                </li>
                <li>
                  <Link to="/letstalk" className="hover:text-purple-300 transition">
                    Let’s Talk
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-lg md:text-xl">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setOpenCookie(true)}
                    className="hover:text-purple-300 transition text-left"
                  >
                    Cookie Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setOpenPrivacy(true)}
                    className="hover:text-purple-300 transition text-left"
                  >
                    Privacy Notice
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setOpenTerms(true)}
                    className="hover:text-purple-300 transition text-left"
                  >
                    Terms of Use
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3 - Location & Contact */}
            <div>
              <h3 className="font-semibold mb-4 text-lg md:text-xl">Sivvg Info Tech Pvt. Ltd</h3>
              <ul className="space-y-3 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <FaMapMarkerAlt className="mt-1 shrink-0" />
                  <span>
                    NH-16, Marikavalasa Rd,<br />
                    Visakhapatnam, Andhra Pradesh 530048
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaPhoneAlt className="shrink-0" />
                  <span>+91 9542992314</span>
                </li>
                <li>
                  SEBI Registration Number - INR0017042821
                </li>
              </ul>

              {/* Social Icons */}
              <div className="flex gap-4 mt-4 justify-start text-2xl sm:text-3xl">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="hover:text-blue-300 transition" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="hover:text-pink-300 transition" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className="hover:text-blue-400 transition" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="hover:text-sky-300 transition" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <p className="text-center text-xs mt-6 border-t border-white/30 pt-4">
            © SIVVG, 2025. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Modals */}
      <Modal
        open={openCookie}
        title="Cookie Policy"
        onClose={() => setOpenCookie(false)}
        actions={
          <>
            <button
              onClick={declineCookies}
              className="px-3 py-2 rounded-md bg-transparent border border-gray-300 text-sm hover:bg-gray-100 transition"
            >
              Decline
            </button>
            <button
              onClick={acceptCookies}
              className="px-3 py-2 rounded-md bg-[#4b4d9c] text-white text-sm font-semibold hover:opacity-95 transition"
            >
              Accept
            </button>
          </>
        }
      >
        <h4 className="font-semibold">How we use cookies</h4>
        <p>
          We use cookies to provide site functionality, analyze traffic, and personalise content.
          You can accept or decline cookies. Declining may affect some features.
        </p>

        <h5 className="mt-4 font-semibold">Types of cookies</h5>
        <ul className="list-disc ml-5">
          <li>Essential cookies (required for the site to function)</li>
          <li>Analytics cookies (help us understand usage)</li>
          <li>Marketing cookies (personalize ads and content)</li>
        </ul>

        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          (Replace this with your official cookie policy text.)
        </p>
      </Modal>

      <Modal
        open={openPrivacy}
        title="Privacy Notice"
        onClose={() => setOpenPrivacy(false)}
        actions={
          <button
            onClick={() => setOpenPrivacy(false)}
            className="px-3 py-2 rounded-md bg-[#4b4d9c] text-white text-sm font-semibold hover:opacity-95 transition"
          >
            Close
          </button>
        }
      >
        <h4 className="font-semibold">Privacy Notice</h4>
        <p>
          We respect your privacy. We collect only the information necessary to provide our services,
          and we do not share personal data except as described in this notice. (Add full privacy text.)
        </p>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          (Replace this with your official privacy notice.)
        </p>
      </Modal>

      <Modal
        open={openTerms}
        title="Terms of Use"
        onClose={() => setOpenTerms(false)}
        actions={
          <button
            onClick={() => setOpenTerms(false)}
            className="px-3 py-2 rounded-md bg-[#4b4d9c] text-white text-sm font-semibold hover:opacity-95 transition"
          >
            Close
          </button>
        }
      >
        <h4 className="font-semibold">Terms of Use</h4>
        <p>
          Use of our site is subject to these Terms. Please read them carefully. (Add your full terms.)
        </p>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          (Replace this with your full Terms of Use content.)
        </p>
      </Modal>

      {/* Cookie banner shown site-wide for first-time users */}
      <CookieBanner />
    </>
  );
};

export default Footer;
