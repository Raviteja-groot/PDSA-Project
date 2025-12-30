import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGoogle, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
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
        <div className="grid md:grid-cols-4 gap-6">

          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-blue-600 mb-3">PDSA Solutions</h3>
            <p className="text-xs text-gray-600 mb-3">
              PDSA is an independent technology company and digital transformation partner.
            </p>
            <div className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold inline-block mb-3">
              ✓ E-Verified Company
            </div>
            <div className="flex gap-3 text-gray-700">
              <a href="#" className="hover:text-blue-600 transition"><FaFacebookF /></a>
              <a href="#" className="hover:text-blue-600 transition"><FaTwitter /></a>
              <a href="#" className="hover:text-blue-600 transition"><FaInstagram /></a>
              <a href="#" className="hover:text-blue-600 transition"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-blue-600 transition"><FaGoogle /></a>
            </div>
          </div>

          {/* Services & Industries */}
          <div className="grid grid-cols-2 gap-6 md:col-span-2">
            {/* Services */}
            <div>
              <h4 className="font-semibold mb-3 text-gray-800">Services</h4>
              <ul className="space-y-1 text-xs text-gray-600">
                <li><a href="/services/healthcare" className="hover:text-blue-600 transition">Healthcare</a></li>
                <li><a href="/services/banking-financial" className="hover:text-blue-600 transition">Banking & Financial</a></li>
                <li><a href="/services/media-entertainment" className="hover:text-blue-600 transition">Media & Entertainment</a></li>
                <li><a href="/services/technology-enablement" className="hover:text-blue-600 transition">Technology Enablement</a></li>
                <li><a href="/services/strategic-staffing" className="hover:text-blue-600 transition">Strategic Staffing</a></li>
                <li><a href="/services/business-process-outsourcing" className="hover:text-blue-600 transition">Business Process Outsourcing</a></li>
                <li><a href="/services/recruitment-process-outsourcing" className="hover:text-blue-600 transition">Recruitment Process Outsourcing</a></li>
                <li><a href="/services/training-hub" className="hover:text-blue-600 transition">Training Hub</a></li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="font-semibold mb-3 text-gray-800">Industries</h4>
              <ul className="space-y-1 text-xs text-gray-600">
                <li><a href="/industries/financial-services" className="hover:text-blue-600 transition">Financial Services</a></li>
                <li><a href="/industries/healthcare" className="hover:text-blue-600 transition">Healthcare</a></li>
                <li><a href="/industries/media-entertainment-gaming" className="hover:text-blue-600 transition">Media, Entertainment & Gaming</a></li>
                <li><a href="/industries/energy" className="hover:text-blue-600 transition">Energy</a></li>
                <li><a href="/industries/telecommunication" className="hover:text-blue-600 transition">Telecommunication</a></li>
                <li><a href="/industries/consumer-industrial-products" className="hover:text-blue-600 transition">Consumer & Industrial Products</a></li>
                <li><a href="/industries/technology-enablement" className="hover:text-blue-600 transition">Technology Enablement</a></li>
                <li><a href="/industries/transportation-travel" className="hover:text-blue-600 transition">Transportation & Travel</a></li>
              </ul>
            </div>
          </div>

          {/* Technologies & Contact */}
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-3 text-gray-800">Technologies</h4>
            <ul className="space-y-1 text-xs text-gray-600 mb-4">
              <li><a href="/technologies/ai-machine-learning" className="hover:text-blue-600 transition">AI & Machine Learning</a></li>
              <li><a href="/technologies/cloud-computing" className="hover:text-blue-600 transition">Cloud Computing</a></li>
              <li><a href="/technologies/devops" className="hover:text-blue-600 transition">DevOps</a></li>
              <li><a href="/technologies/big-data" className="hover:text-blue-600 transition">Big Data Technology</a></li>
              <li><a href="/technologies/web-development" className="hover:text-blue-600 transition">Web Development</a></li>
              <li><a href="/technologies/iot" className="hover:text-blue-600 transition">IoT</a></li>
              <li><a href="/technologies/android-development" className="hover:text-blue-600 transition">Android Development</a></li>
            </ul>
            <h4 className="font-semibold mb-2 text-gray-800">Contact</h4>
            <div className="text-xs text-gray-600 space-y-1">
              <div className="flex items-center">
                <FaPhone className="mr-2 text-blue-600" /> +1 980 781 9639
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-blue-600" /> contact@pdsatech.com
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Maps Section */}
        <div className="mt-8 border-t pt-6">
          <h3 className="text-xl font-bold text-center mb-6 text-gray-800">Our Locations</h3>
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* US Headquarters Map */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <FaMapMarkerAlt className="text-orange-500 mr-2" />
                <h4 className="font-bold text-gray-800">PDSA Headquarters</h4>
              </div>
              <p className="text-xs text-gray-600 mb-3">
                11020 David Taylor Dr #100 Charlotte, NC 28262, USA
              </p>
              <div 
                className="relative h-32 rounded-lg cursor-pointer overflow-hidden group"
                onClick={() => window.open('https://maps.google.com/?q=11020+David+Taylor+Dr+100+Charlotte+NC+28262+USA', '_blank')}
              >
                <img 
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=200&fit=crop" 
                  alt="Charlotte NC Location" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="text-center text-white">
                    <FaMapMarkerAlt className="text-2xl mx-auto mb-1 group-hover:scale-110 transition-transform" />
                    <p className="font-semibold text-sm">View on Maps</p>
                  </div>
                </div>
              </div>
            </div>

            {/* India Development Center Map */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <FaMapMarkerAlt className="text-orange-500 mr-2" />
                <h4 className="font-bold text-gray-800">PDSA Development Center</h4>
              </div>
              <p className="text-xs text-gray-600 mb-3">
                Unit no. 1020, 9th floor, Vasavi MPM Grand, Ameerpet, Hyderabad, India
              </p>
              <div 
                className="relative h-32 rounded-lg cursor-pointer overflow-hidden group"
                onClick={() => window.open('https://maps.google.com/?q=Vasavi+MPM+Grand+Ameerpet+Hyderabad+Telangana+India', '_blank')}
              >
                <img 
                  src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=200&fit=crop" 
                  alt="Hyderabad India Location" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="text-center text-white">
                    <FaMapMarkerAlt className="text-2xl mx-auto mb-1 group-hover:scale-110 transition-transform" />
                    <p className="font-semibold text-sm">View on Maps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t mt-8 pt-4 text-center">
          <span className="text-sm text-gray-600">© 2020 PDSA AI. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
