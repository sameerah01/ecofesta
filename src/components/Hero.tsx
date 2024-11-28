import React from 'react';
import { Leaf, Gift, TreePine } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&q=80")',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sage-900/80 to-sage-900/40"></div>
      </div>
      
      <div className="relative z-10 px-4 py-32 mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-6 text-6xl font-bold text-white md:text-8xl font-display">
            EcoFesta
          </h1>
          <p className="max-w-xl mb-8 text-2xl text-white/90 font-display">
            Celebrate Responsibly, Party Sustainably
          </p>
          
          <div className="flex flex-col gap-4 mb-12 sm:flex-row">
            <button className="px-8 py-4 text-lg font-medium text-white transition bg-sage-600 rounded-full hover:bg-sage-500 shadow-lg hover:shadow-xl">
              Explore Collections
            </button>
            <button className="px-8 py-4 text-lg font-medium text-sage-700 transition bg-white rounded-full hover:bg-gray-100 shadow-lg hover:shadow-xl">
              Our Story
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-3">
            {[
              { icon: Leaf, text: "100% Biodegradable Products" },
              { icon: Gift, text: "Plastic-Free Packaging" },
              { icon: TreePine, text: "One Tree Planted Per Order" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center gap-3 text-white bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
                <item.icon className="w-6 h-6" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}