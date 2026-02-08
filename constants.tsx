
import { Service, Review, Translation, Language } from './types';

export const CLINIC_NAME = "Cabinet Dentaire Dr Chtouki Sabrine";
export const DOCTOR_NAME = "Dr. Chtouki Sabrine";
export const PHONE = "0666427742";
export const WHATSAPP_NUMBER = "212666427742"; // For direct links
export const INSTAGRAM = "https://www.instagram.com/dr.sabrinechtouki/";
export const MAPS_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.856860341757!2d-7.618645!3d33.5855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2966952737f%3A0xc666427742!2zQmQuIFplcmt0b3VuaSwgQ2FzYWJsYW5jYSAyMDI1MCwgTW9yb2Njbw!5e0!3m2!1sen!2sma!4v1634567890123!5m2!1sen!2sma";

export const SERVICES: Service[] = [
  {
    id: "blanchiment",
    icon: "✨",
    image: "https://images.pexels.com/photos/6529110/pexels-photo-6529110.jpeg?auto=compress&cs=tinysrgb&w=800",
    translations: {
      FR: { title: "Blanchiment Dentaire", description: "Un blanchiment professionnel pour obtenir un sourire éclatant et naturel avec les dernières technologies." },
      AR: { title: "تبييض الأسنان", description: "تبييض احترافي للحصول على ابتسامة مشرقة وطبيعية بأحدث التقنيات." },
      EN: { title: "Teeth Whitening", description: "Professional whitening to achieve a bright and natural smile with the latest technology." },
      ES: { title: "Blanqueamiento Dental", description: "Blanqueamiento profesional para lograr una sonrisa brillante y natural con la última tecnología." }
    }
  },
  {
    id: "implants",
    icon: "🦷",
    image: "https://i.postimg.cc/BvSgPvTW/Implants-dentaires-pas-cher-a-letranger-1536x864.webp",
    translations: {
      FR: { title: "Implants Dentaires", description: "Restaurer les dents manquantes de manière permanente et esthétique garantissant confort et confiance." },
      AR: { title: "زراعة الأسنان", description: "استعادة الأسنان المفقودة بشكل دائم وجمالي يضمن لك الراحة والثقة." },
      EN: { title: "Dental Implants", description: "Restore missing teeth permanently and aesthetically, ensuring comfort and confidence." },
      ES: { title: "Implantes Dentales", description: "Restaure los dientes perdidos de forma permanente y estética, garantizando comodidad y confianza." }
    }
  },
  {
    id: "orthodontie",
    icon: "📏",
    image: "https://images.pexels.com/photos/6528909/pexels-photo-6528909.jpeg?auto=compress&cs=tinysrgb&w=800",
    translations: {
      FR: { title: "Orthodontie", description: "Correction de l'alignement des dents pour enfants et adultes pour un aspect harmonieux et sain." },
      AR: { title: "تقويم الأسنان", description: "تصحيح اصطفاف الأسنان للأطفال والكبار للحصول على مظهر متناسق وصحي." },
      EN: { title: "Orthodontics", description: "Correcting teeth alignment for children and adults for a harmonious and healthy look." },
      ES: { title: "Ortodoncia", description: "Corrección de la alineación de los dientes para niños y adultos para un aspecto armonioso y saludable." }
    }
  },
  {
    id: "soins",
    icon: "🛡️",
    image: "https://i.postimg.cc/T3SsxfVR/imgi-24-Dental-Caries-Cavity-2.jpg",
    translations: {
      FR: { title: "Caries & Soins", description: "Traitement rapide et sans douleur des caries tout en préservant la structure de la dent." },
      AR: { title: "علاج التسوس", description: "علاج سريع وبدون ألم لحساسية وتسوس الأسنان مع الحفاظ على بنية السن." },
      EN: { title: "Cavity Treatment", description: "Fast and painless treatment for cavities while preserving the tooth structure." },
      ES: { title: "Tratamiento de Caries", description: "Tratamiento rápido y sin dolor para las caries preservando la estructura dental." }
    }
  },
  {
    id: "detartrage",
    icon: "🧼",
    image: "https://i.postimg.cc/MHVYxqgY/Detartrage-polissage.webp",
    translations: {
      FR: { title: "Détartrage & Plaque", description: "Élimination du tartre et de la plaque pour maintenir la santé des gencives et la fraîcheur buccale." },
      AR: { title: "تنظيف الأسنان وإزالة الجير", description: "إزالة الجير والبلاك للحفاظ على صحة اللثة وانتعاش الفم." },
      EN: { title: "Scaling & Cleaning", description: "Removal of tartar and plaque to maintain gum health and oral freshness." },
      ES: { title: "Limpieza y Sarro", description: "Eliminación de sarro y placa para mantener la salud de las encías y la frescura bucal." }
    }
  },
  {
    id: "extraction",
    icon: "🗜️",
    image: "https://i.postimg.cc/kgBBtfgm/Extraction-dentaire.jpg",
    translations: {
      FR: { title: "Extraction Dentaire", description: "Extraction sécurisée des dents endommagées avec un soin particulier pour réduire la douleur." },
      AR: { title: "خلع الأسنان", description: "خلع آمن للأسنان المتضررة مع عناية خاصة لتخفيف الألم وتسريع الشفاء." },
      EN: { title: "Tooth Extraction", description: "Safe extraction of damaged teeth with special care to reduce pain." },
      ES: { title: "Extracción Dental", description: "Extracción segura de dientes dañados con especial cuidado para reducir el dolor." }
    }
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Amine K.",
    rating: 5,
    comment: "Service impeccable ! Dr Chtouki est très professionnelle et douce. Le cabinet est super propre.",
    date: "Il y a 2 semaines",
    avatar: "https://i.pravatar.cc/150?u=amine"
  },
  {
    id: 2,
    author: "Sara B.",
    rating: 5,
    comment: "J'ai fait mon blanchiment ici, le résultat est incroyable. Je recommande vivement !",
    date: "Il y a 1 mois",
    avatar: "https://i.pravatar.cc/150?u=sara"
  },
  {
    id: 3,
    author: "Omar R.",
    rating: 5,
    comment: "Excellent accueil et soins de qualité. Très peu d'attente.",
    date: "Il y a 3 jours",
    avatar: "https://i.pravatar.cc/150?u=omar"
  },
  {
    id: 4,
    author: "Layla M.",
    rating: 5,
    comment: "La meilleure dentiste à Casablanca. Très à l'écoute et rassurante.",
    date: "Il y a 10 jours",
    avatar: "https://i.pravatar.cc/150?u=layla"
  }
];

export const TRANSLATIONS: Record<Language, Translation> = {
  FR: {
    home: "Accueil",
    about: "À propos",
    contact: "Contact",
    appointment: "Prendre RDV",
    welcome: "L'excellence pour votre sourire",
    tagline: "Des soins dentaires professionnels avec les dernières technologies pour toute la famille.",
    statusOpen: "Ouvert",
    statusClosed: "Fermé",
    servicesTitle: "Nos Services",
    reviewsTitle: "Avis Clients",
    location: "Notre Emplacement",
    footerRights: "Tous droits réservés.",
    doctorName: "Dr. Chtouki Sabrine",
    aboutContent: "Des soins dentaires professionnels avec les technologies les plus avancées. Nous nous engageons à vous offrir un sourire sain et éclatant dans un environnement chaleureux.",
    formName: "Nom Complet",
    formPhone: "Téléphone",
    formEmail: "E-mail",
    formService: "Service Souhaité",
    formMessage: "Votre Message",
    formSubmit: "Envoyer ma demande",
    workingHours: "Horaires de travail",
    mapsCTA: "Y aller avec Maps",
    experienceYear: "Ans d'expérience",
    specialties: "Spécialités",
    diplomas: "Diplômes",
    successMsg: "Votre demande a été reçue ! Nous vous rappellerons bientôt.",
    backToForm: "Retour au formulaire"
  },
  AR: {
    home: "الرئيسية",
    about: "من نحن",
    contact: "اتصل بنا",
    appointment: "موعد",
    welcome: "التميز في ابتسامتك",
    tagline: "عناية مهنية بالأسنان بأحدث التقنيات لجميع أفراد الأسرة.",
    statusOpen: "مفتوح",
    statusClosed: "مغلق",
    servicesTitle: "خدماتنا",
    reviewsTitle: "آراء الزبناء",
    location: "موقعنا",
    footerRights: "جميع الحقوق محفوظة.",
    doctorName: "د. شتوكي صابرين",
    aboutContent: "رعاية أسنان مهنية بأحدث التقنيات. نلتزم بمنحكم ابتسامة صحية ومشرقة في بيئة دافئة.",
    formName: "الاسم الكامل",
    formPhone: "رقم الهاتف",
    formEmail: "البريد الإلكتروني",
    formService: "الخدمة المطلوبة",
    formMessage: "رسالتك",
    formSubmit: "إرسال الطلب",
    workingHours: "ساعات العمل",
    mapsCTA: "فتح الموقع",
    experienceYear: "سنوات الخبرة",
    specialties: "التخصصات",
    diplomas: "الشهادات",
    successMsg: "تم إرسال طلبكم بنجاح! سنتصل بكم قريباً.",
    backToForm: "العودة للنموذج"
  },
  EN: {
    home: "Home",
    about: "About Me",
    contact: "Contact",
    appointment: "Book Now",
    welcome: "Excellence for your smile",
    tagline: "Professional dental care with the latest technology for the whole family.",
    statusOpen: "Open",
    statusClosed: "Closed",
    servicesTitle: "Our Services",
    reviewsTitle: "Customer Reviews",
    location: "Our Location",
    footerRights: "All rights reserved.",
    doctorName: "Dr. Chtouki Sabrine",
    aboutContent: "Professional dental care with the most advanced technologies. We are committed to giving you a healthy and bright smile in a warm environment.",
    formName: "Full Name",
    formPhone: "Phone Number",
    formEmail: "Email Address",
    formService: "Service Requested",
    formMessage: "Your Message",
    formSubmit: "Send Request",
    workingHours: "Working Hours",
    mapsCTA: "Open in Maps",
    experienceYear: "Years Experience",
    specialties: "Specialties",
    diplomas: "Diplomas",
    successMsg: "Request sent successfully! We will call you soon.",
    backToForm: "Back to form"
  },
  ES: {
    home: "Inicio",
    about: "Sobre mí",
    contact: "Contacto",
    appointment: "Cita",
    welcome: "Excelencia para tu sonrisa",
    tagline: "Cuidado dental profesional con la última tecnología para toda la familia.",
    statusOpen: "Abierto",
    statusClosed: "Cerrado",
    servicesTitle: "Nuestros Servicios",
    reviewsTitle: "Opiniones Google",
    location: "Ubicación",
    footerRights: "Todos los derechos reservados.",
    doctorName: "Dra. Chtouki Sabrine",
    aboutContent: "Cuidado dental profesional con las tecnologías más avanzadas. Nos comprometemos a brindarle una sonrisa saludable y brillante en un ambiente cálido.",
    formName: "Nombre Completo",
    formPhone: "Teléfono",
    formEmail: "Correo Electrónico",
    formService: "Servicio Solicitado",
    formMessage: "Tu Mensaje",
    formSubmit: "Enviar Solicitud",
    workingHours: "Horario de trabajo",
    mapsCTA: "Abrir en Maps",
    experienceYear: "Años de Exp.",
    specialties: "Especialidades",
    diplomas: "Diplomas",
    successMsg: "¡Solicitud enviada! Te llamaremos pronto.",
    backToForm: "Volver al formulario"
  }
};
