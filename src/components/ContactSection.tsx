import { useInView } from "react-intersection-observer";
import CustomMap from "./CustomMap";
import { APIProvider } from "@vis.gl/react-google-maps";

const ContactSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  const apiKey = import.meta.env.VITE_GMAP_API_KEY;
  
  const placeName = "Çetineller Zirai Ürünler A.Ş";
  const lat = 38.186755;
  const lng = 27.3526956;
  const placeId = "ChIJPbHAmWdduRQRgQTgxCFcHVw"; // Replace with the actual Place ID

  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=place_id:${placeId}&center=${lat},${lng}&zoom=15`;

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
                  Çetineller Zeytinyağı Fabrikası, Çapak Mah. Philsa Cad. No7/3
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-primary-DEFAULT">📞</span>
                  <a href="tel:+902328531550" className="text-primary-DEFAULT">+90 (232) 853 15 50</a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-primary-DEFAULT">✉️</span>
                  cetineller@hotmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            {/* <APIProvider apiKey={apiKey}>
              <CustomMap />
            </APIProvider> */}
            <iframe
              width="600"
              height="400"
              loading="lazy"
              src={embedUrl}
              >
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
