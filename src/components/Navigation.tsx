import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const navItems = [
  { name: 'Shop', href: '#shop' },
  { name: 'Our Story', href: '#story' },
  { name: 'Sustainability', href: '#sustainability' },
  { name: 'Business Solutions', href: '#business' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-sage-800 font-display">
              EcoFesta
            </a>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sage-600 hover:text-sage-900"
                >
                  {item.name}
                </a>
              ))}
              <button className="p-2 text-sage-600 hover:text-sage-900">
                <ShoppingBag className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-sage-600 hover:text-sage-900"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-sage-600 hover:text-sage-900"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}