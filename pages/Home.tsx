
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TRANSLATIONS, SERVICES, REVIEWS, MAPS_URL, INSTAGRAM, PHONE, WHATSAPP_NUMBER } from '../constants';
import { Language } from '../types';
import ClinicStatus from '../components/ClinicStatus';

interface HomeProps {
  currentLang: Language;
}

const Home: React.FC<HomeProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const isRtl = currentLang === 'AR';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const getWhatsAppLink = (serviceTitle: string) => {
    let message = "";
    switch (currentLang) {
      case 'AR': message = `السلام عليكم دكتورة صابرين، أود الاستفسار عن خدمة: ${serviceTitle}`; break;
      case 'EN': message = `Hello Dr. Sabrine, I am interested in the service: ${serviceTitle}`; break;
      case 'ES': message = `Hola Dra. Sabrine, estoy interesado/a en el servicio: ${serviceTitle}`; break;
      default: message = `Bonjour Dr. Sabrine, je suis intéressé(e) par le service : ${serviceTitle}`;
    }
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className={`pt-20 ${isRtl ? 'text-right' : 'text-left'}`}>
      <section className="relative min-h-[75vh] flex items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8">
        <div className={`grid lg:grid-cols-2 gap-10 items-center w-full ${isRtl ? 'direction-rtl' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={`order-2 lg:order-1 ${isRtl ? 'lg:pl-8' : 'lg:pr-8'} relative overflow-visible`}
          >
            <div className={`mb-8 ${isRtl ? 'flex justify-end' : ''}`}>
              <ClinicStatus currentLang={currentLang} />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
              {t.welcome} <br />
              <span className="gradient-text italic font-bold">{t.doctorName}</span>
            </h1>
            
            <p className="mt-6 text-base sm:text-lg text-slate-500 max-w-lg leading-relaxed font-bold">
              {t.tagline}
            </p>
            
            <div className={`mt-10 flex flex-wrap gap-4 ${isRtl ? 'justify-end' : ''}`}>
              <Link
                to="/contact"
                className="px-8 py-4 bg-teal-600 text-white font-black rounded-2xl hover:bg-teal-700 transition-all shadow-xl shadow-teal-100 active:scale-95 text-sm sm:text-base tracking-tight"
              >
                {t.appointment}
              </Link>
              <a
                href={`tel:${PHONE}`}
                className="px-8 py-4 glass text-teal-900 font-black rounded-2xl border-teal-100 hover:bg-white transition-all transform active:scale-95 text-sm sm:text-base inline-flex items-center"
              >
                <i className={`fa-solid fa-phone ${isRtl ? 'ml-3' : 'mr-3'} text-teal-600`}></i> {PHONE}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 sm:border-[10px] border-white max-w-md w-full">
              <img 
                src="https://i.postimg.cc/0yYWFHDN/Gemini-Generated-Image-4x7sta4x7sta4x7s.png" 
                alt="Dr. Sabrine Chtouki - Cabinet Dentaire" 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute bottom-6 ${isRtl ? '-right-6 sm:-right-10' : '-left-6 sm:-left-10'} z-20 glass p-5 rounded-3xl shadow-xl max-w-[180px] border-teal-50`}
            >
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Instagram</p>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="flex items-center text-slate-800 font-black hover:text-teal-600">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center text-white mr-2">
                   <i className="fa-brands fa-instagram text-base"></i>
                </div>
                <span className="text-[11px]">@dr.sabrinechtouki</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">{t.servicesTitle}</h2>
          <div className="w-14 h-1 bg-teal-500 mx-auto mt-6 rounded-full" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => (
            <motion.a
              key={service.id}
              href={getWhatsAppLink(service.translations[currentLang].title)}
              target="_blank"
              rel="noreferrer"
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className="bg-white p-2.5 rounded-[2.2rem] shadow-lg hover:shadow-2xl transition-all border border-slate-50 overflow-hidden group block"
            >
              <div className="relative h-56 sm:h-64 w-full rounded-[2rem] overflow-hidden mb-6">
                <img src={service.image} alt={service.translations[currentLang].title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/20 transition-colors" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/95 p-3 rounded-2xl shadow-md">
                     <span className="text-2xl">{service.icon}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="bg-green-500 text-white p-2.5 rounded-full shadow-lg">
                      <i className="fa-brands fa-whatsapp text-xl"></i>
                   </div>
                </div>
              </div>
              <div className="px-6 pb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 tracking-tight transition-colors">
                  {service.translations[currentLang].title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm font-bold mb-4">
                  {service.translations[currentLang].description}
                </p>
                <div className="text-xs font-black text-teal-600 flex items-center">
                   {t.appointment} <i className={`fa-solid ${isRtl ? 'fa-arrow-left mr-2' : 'fa-arrow-right ml-2'}`}></i>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>

      <section className="py-24 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
            <div className={isRtl ? 'text-right' : 'text-left'}>
              <div className={`flex items-center ${isRtl ? 'justify-end' : ''} space-x-2 text-teal-400 mb-4`}>
                {[1, 2, 3, 4, 5].map(i => <i key={i} className="fa-solid fa-star text-[11px]"></i>)}
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">{t.reviewsTitle}</h2>
            </div>
            <a 
              href="https://maps.app.goo.gl/yB5N1VQivcoRRVXh8" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all font-black border border-white/10 text-sm tracking-tight"
            >
              <i className="fa-brands fa-google mr-3 text-teal-400"></i> {t.mapsCTA}
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/[0.03] backdrop-blur-xl p-7 rounded-3xl border border-white/5"
              >
                <div className={`flex items-center mb-5 ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <img src={review.avatar} alt={review.author} className={`w-10 h-10 rounded-full ${isRtl ? 'ml-3' : 'mr-3'}`} />
                  <div className={isRtl ? 'text-right' : 'text-left'}>
                    <h4 className="font-black text-sm text-white">{review.author}</h4>
                    <p className="text-[9px] text-teal-400 font-black uppercase tracking-widest">{review.date}</p>
                  </div>
                </div>
                <p className={`text-slate-400 text-sm leading-relaxed italic font-bold ${isRtl ? 'text-right' : 'text-left'}`}>
                  "{review.comment}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[450px] w-full">
        <iframe 
          src={MAPS_URL}
          className="w-full h-full border-none grayscale opacity-80"
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </section>
    </div>
  );
};

export default Home;
