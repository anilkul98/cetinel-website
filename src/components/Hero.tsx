import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-primary-DEFAULT text-white min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('src/assets/building/1.jpeg')",
          backgroundColor: "rgba(17, 26, 3, 0.7)",
          backgroundBlendMode: "overlay",
        }}
      />
      <div className="relative container mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            1982'den Beri..
          </h1>
          <p className="text-xl md:text-2xl font-inter mb-8">
            Torbalı'dan tüm Türkiye'ye uzanan tarım ve hayvancılık serüvenimizde,
            kalite ve güven bizim önceliğimizdir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;