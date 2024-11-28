import React from 'react';
import { TreePine, Droplets, Factory, Leaf } from 'lucide-react';

const metrics = [
  {
    icon: TreePine,
    number: "25,000+",
    label: "Trees Planted",
    description: "Through our one order, one tree initiative"
  },
  {
    icon: Droplets,
    number: "150,000L",
    label: "Water Saved",
    description: "By using eco-friendly production processes"
  },
  {
    icon: Factory,
    number: "45,000kg",
    label: "Plastic Prevented",
    description: "From entering our ecosystems"
  },
  {
    icon: Leaf,
    number: "10,000+",
    label: "Eco Events",
    description: "Sustainable celebrations powered"
  }
];

export function ImpactMetrics() {
  return (
    <section className="py-24 bg-sage-50">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sage-900 font-display">Our Impact</h2>
          <p className="mt-4 text-lg text-sage-600">
            Every celebration contributes to a healthier planet
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <metric.icon className="w-12 h-12 text-sage-600 mb-4" />
              <div className="text-4xl font-bold text-sage-800 mb-2">
                {metric.number}
              </div>
              <div className="text-lg font-semibold text-sage-700 mb-2">
                {metric.label}
              </div>
              <p className="text-sage-600">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}