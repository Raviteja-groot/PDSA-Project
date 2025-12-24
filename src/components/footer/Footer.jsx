import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import techIllustration from "../../assets/illustrations/tech.svg";

export default function Footer() {
  return (
    <div className="bg-[#eef3fb] py-10">
      {/* Newsletter Banner */}
      <div className="max-w-6xl mx-auto -mb-10 bg-gradient-to-r from-slate-800 to-blue-700 text-white rounded-2xl px-8 py-10 grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Subscribe to our newsletter to get updates to our latest updates
          </h2>
          <p className="text-sm opacity-90 mb-4">
            Get 20% off on this month
          </p>

          <form className="flex gap-3 flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-full outline-none text-white border-2 border-white/30 focus:border-white focus:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 placeholder-white"
            />
            <button className="bg-white text-gray-900 font-semibold px-6 py-2 rounded-full hover:opacity-90 transition">
              Subscribe
            </button>
          </form>

          <p className="text-xs mt-3 opacity-80">
            You will be able to unsubscribe at any time.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={techIllustration}
            alt="Technology Illustration"
            className="w-64"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white max-w-7xl mx-auto mt-10 rounded-2xl shadow-xl px-8 pt-16 pb-6">
        <div className="grid md:grid-cols-5 gap-8">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold">Stay Clean</h3>
            <p className="text-sm text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* ⭐ updated icons */}
            <div className="flex gap-4 mt-4 text-gray-700 text-lg">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaGoogle /></a>
            </div>
          </div>

          {/* rest of footer stays same */}



          {/* Columns */}
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>About Us</li>
              <li>Services</li>
              <li>Community</li>
              <li>Testimonials</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>Help Center</li>
              <li>Tweet @ Us</li>
              <li>Webinars</li>
              <li>Feedback</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Links</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>Courses</li>
              <li>Become Teacher</li>
              <li>Service</li>
              <li>All in One</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Contact Us</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>(91) 98765 4321 54</li>
              <li>support@mail.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t mt-8 pt-4 flex flex-wrap justify-between text-sm text-gray-600">
          <span>© Copyright by CodedUI. All rights reserved.</span>

          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Legal</a>
            <a href="#">Site Map</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
