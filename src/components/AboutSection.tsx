import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 px-6" id="about">
      <div className={`max-w-6xl mx-auto ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-primary-DEFAULT mb-12 text-center">
          Hikayemiz
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              1982 yılında Torbalı'da kurulan şirketimiz, tarım ve hayvancılık sektöründe öncü bir aile işletmesi olarak hizmet vermektedir.
            </p>
            <p className="text-lg text-gray-700">
              40 yılı aşkın tecrübemizle, modern tarım teknolojilerini geleneksel değerlerle birleştirerek müşterilerimize en kaliteli hizmeti sunmaktayız.
            </p>
          </div>
          <div className="relative h-[450px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('public/assets/building/2.png')",
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                backgroundBlendMode: "multiply",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;