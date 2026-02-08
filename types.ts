
export type Language = 'FR' | 'AR' | 'EN' | 'ES';

export interface ServiceContent {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  icon: string;
  image: string;
  translations: Record<Language, ServiceContent>;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface Translation {
  home: string;
  about: string;
  contact: string;
  appointment: string;
  welcome: string;
  tagline: string;
  statusOpen: string;
  statusClosed: string;
  servicesTitle: string;
  reviewsTitle: string;
  location: string;
  footerRights: string;
  doctorName: string;
  aboutContent: string;
  formName: string;
  formPhone: string;
  formEmail: string;
  formService: string;
  formMessage: string;
  formSubmit: string;
  workingHours: string;
  mapsCTA: string;
  experienceYear: string;
  specialties: string;
  diplomas: string;
  successMsg: string;
  backToForm: string;
}
