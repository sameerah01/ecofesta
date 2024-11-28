import React from 'react';
import { Sprout } from 'lucide-react';

export function OurStory() {
  return (
    <section className="py-24 bg-white">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523294587484-bae6cc870010?auto=format&fit=crop&q=80"
                alt="Handcrafted sustainable decorations"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-sage-50 p-6 rounded-lg shadow-xl">
              <Sprout className="w-12 h-12 text-sage-600" />
              <p className="mt-2 font-semibold text-sage-800">Est. 2020</p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-sage-900 font-display mb-6">Our Journey</h2>
            <div className="space-y-4 text-sage-600">
              <p>
                Terra Fête was born from a simple yet powerful idea: celebrations shouldn't come at the 
                Earth's expense. In 2020, amidst global reflection on our environmental impact, we set 
                out to revolutionize how Bangalore celebrates its special moments.
              </p>
              <p>
                What began as a small workshop crafting biodegradable party supplies has blossomed into 
                a movement, inspiring thousands to embrace eco-conscious celebrations. Our commitment to 
                sustainability goes beyond products – it's about nurturing a community that celebrates 
                life while preserving it.
              </p>
              <p>
                Today, we're proud to have helped over 10,000 families and businesses make their 
                celebrations not just memorable, but meaningful for our planet. Every product in our 
                collection tells a story of innovation, craftsmanship, and environmental stewardship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}