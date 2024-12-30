const Hero = () => {
  return (
    <div className="relative bg-primary-DEFAULT text-white min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg')",
          backgroundColor: "rgba(0, 36, 0, 0.7)",
          backgroundBlend: "overlay",
        }}
      />
      <div className="relative container mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            1982'den Beri Tarımın Hizmetinde
          </h1>
          <p className="text-xl md:text-2xl font-inter mb-8">
            Torbalı'dan tüm Türkiye'ye uzanan tarım ve hayvancılık serüvenimizde,
            kalite ve güven bizim önceliğimizdir.
          </p>
          <a
            href="/about"
            className="inline-block bg-primary-light hover:bg-primary-medium text-white font-inter font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
          >
            Hikayemizi Keşfedin
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;