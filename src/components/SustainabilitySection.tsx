import React from 'react';
import { Leaf, Recycle, TreePine } from 'lucide-react';

export function SustainabilitySection() {
  return (
    <section className="py-24 bg-white">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-sage-900 sm:text-4xl">
            Our Commitment to Sustainability
          </h2>
          <p className="mt-4 text-lg text-sage-600">
            Making every celebration eco-conscious, one party at a time
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-16 lg:grid-cols-3">
          <div className="p-8 text-center bg-sage-50 rounded-xl">
            <Leaf className="w-12 h-12 mx-auto text-sage-600" />
            <h3 className="mt-4 text-xl font-semibold text-sage-900">
              Biodegradable Materials
            </h3>
            <p className="mt-2 text-sage-600">
              All our products are made from natural, compostable materials that return to the earth
            </p>
          </div>

          <div className="p-8 text-center bg-sage-50 rounded-xl">
            <Recycle className="w-12 h-12 mx-auto text-sage-600" />
            <h3 className="mt-4 text-xl font-semibold text-sage-900">
              Zero Waste Packaging
            </h3>
            <p className="mt-2 text-sage-600">
              Plastic-free packaging using recycled and recyclable materials
            </p>
          </div>

          <div className="p-8 text-center bg-sage-50 rounded-xl">
            <TreePine className="w-12 h-12 mx-auto text-sage-600" />
            <h3 className="mt-4 text-xl font-semibold text-sage-900">
              Tree Planting Initiative
            </h3>
            <p className="mt-2 text-sage-600">
              We plant a tree for every order to offset our carbon footprint
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 text-lg font-medium text-white transition bg-sage-600 rounded-full hover:bg-sage-700">
            Learn More About Our Impact
          </button>
        </div>
      </div>
    </section>
  );
}