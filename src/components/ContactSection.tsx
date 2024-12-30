import { useInView } from "react-intersection-observer";

const ContactSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 px-6 bg-primary-bg/10" id="contact">
      <div className={`max-w-6xl mx-auto ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-primary-DEFAULT mb-12 text-center">
          İletişim
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">İletişim Bilgileri</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <span className="text-primary-DEFAULT">📍</span>
                  Torbalı, İzmir
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-primary-DEFAULT">📞</span>
                  +90 (XXX) XXX XX XX
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-primary-DEFAULT">✉️</span>
                  info@example.com
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            {/* Replace with actual Google Maps integration */}
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-600">Google Maps will be integrated here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;