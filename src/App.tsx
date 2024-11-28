import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { ProductSection } from './components/ProductSection';
import { ImpactMetrics } from './components/ImpactMetrics';
import { SustainabilitySection } from './components/SustainabilitySection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <OurStory />
      <ProductSection />
      <ImpactMetrics />
      <SustainabilitySection />
      <Footer />
    </div>
  );
}

export default App;