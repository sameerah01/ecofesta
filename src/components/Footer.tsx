import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-sage-900 text-white">
      <div className="px-4 py-16 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold font-display mb-4">Terra Fête</h3>
            <p className="text-sage-200 mb-6">
              Crafting sustainable celebrations that honor both special moments and our planet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-sage-200 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-sage-200 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-sage-200 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Shop', 'Our Story', 'Sustainability', 'Business Solutions', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sage-200 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-sage-200" />
                <a href="mailto:hello@terrafete.com" className="text-sage-200 hover:text-white">
                  hello@terrafete.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-sage-200" />
                <a href="tel:+919876543210" className="text-sage-200 hover:text-white">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-sage-200" />
                <span className="text-sage-200">
                  Indiranagar, Bangalore 560038
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-sage-200 mb-4">
              Subscribe to our newsletter for eco-friendly celebration ideas and updates.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-sage-800 border border-sage-700 rounded-lg focus:outline-none focus:border-sage-500 text-white"
              />
              <button className="w-full px-4 py-2 bg-sage-600 hover:bg-sage-500 rounded-lg transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-sage-800">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sage-200">
              © 2024 Terra Fête. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sage-200 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-sage-200 hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}