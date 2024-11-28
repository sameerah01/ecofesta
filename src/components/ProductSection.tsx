import React from 'react';
import { ArrowRight, Star, Package, Users } from 'lucide-react';

const collections = [
  {
    title: 'Birthday Essentials',
    description: 'Complete eco-friendly party kits for your special day',
    image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&q=80',
    price: 'Starting at ₹1,499',
    rating: 4.9,
    reviews: 128,
    tag: 'Best Seller'
  },
  {
    title: 'Wedding Collection',
    description: 'Sustainable decorations for your perfect day',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80',
    price: 'Starting at ₹4,999',
    rating: 4.8,
    reviews: 89,
    tag: 'New'
  },
  {
    title: 'Corporate Events',
    description: 'Eco-conscious solutions for business gatherings',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80',
    price: 'Custom Quotes',
    rating: 4.9,
    reviews: 156,
    tag: 'Popular'
  }
];

export function ProductSection() {
  return (
    <section className="py-24 bg-white">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-sage-900 font-display mb-4">
              Our Collections
            </h2>
            <p className="text-lg text-sage-600">
              Discover our range of sustainable celebration essentials
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sage-600 hover:text-sage-800 transition-colors">
            View All Collections
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 text-sm font-medium text-white bg-sage-600 rounded-full">
                    {collection.tag}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-sage-900 mb-2">
                  {collection.title}
                </h3>
                <p className="text-sage-600 mb-4">
                  {collection.description}
                </p>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-medium text-sage-900">{collection.rating}</span>
                    <span className="text-sage-600">({collection.reviews})</span>
                  </div>
                  <span className="font-medium text-sage-900">{collection.price}</span>
                </div>

                <button className="w-full px-6 py-3 text-center text-white bg-sage-600 rounded-full hover:bg-sage-500 transition-colors">
                  Explore Collection
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <button className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-800 transition-colors">
            View All Collections
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}