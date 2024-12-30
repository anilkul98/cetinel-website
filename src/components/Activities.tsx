import { useInView } from "react-intersection-observer";

const activities = [
  {
    title: "Pamuk Çırçır",
    description: "Modern teknoloji ile pamuk işleme",
    image: "/src/assets/activities/pamuk.jpg",
    link: "/activities/cotton"
  },
  {
    title: "Zeytinyağı Üretimi",
    description: "Geleneksel lezzet, modern üretim",
    image: "/src/assets/activities/zeytin.png",
    link: "/src/assets/activities/zeytin.png"
  },
  {
    title: "Tohum ve Gübre",
    description: "Çiftçilerimize tam destek",
    image: "/src/assets/activities/tohum.png",
    link: "/activities/seeds"
  },
  {
    title: "Büyükbaş Hayvancılık",
    description: "Modern tesislerde kaliteli üretim",
    image: "/src/assets/activities/hayvancilik.jpg",
    link: "/activities/cattle"
  },
  {
    title: "Mısır Ticareti",
    description: "Kaliteli ürün, güvenilir ticaret",
    image: "/src/assets/activities/misir.png",
    link: "/activities/corn"
  },
  {
    title: "Akaryakıt İstasyonu",
    description: "Total ile güvenilir hizmet",
    image: "/src/assets/activities/benzin.jpeg",
    link: "/activities/fuel"
  }
];

const Activities = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-primary-bg/20 to-white" id="activities">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-DEFAULT mb-12 text-center">
          Faaliyet Alanlarımız
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className={`group relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 ${
                inView ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${activity.image})`,
                    backgroundColor: "rgba(0, 36, 0, 0.1)",
                    backgroundBlendMode: "multiply",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                  <p className="text-sm opacity-90">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;