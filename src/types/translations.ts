import { ReactNode } from "react";

export interface Translations {
  homepage: {
    hero: {
      title: string;
      titleBreak: string;
      subtitle: string;
      cta: string;
    };
    services: {
      title: string;
      subtitle: string;
      animalRescue: {
        title: string;
        description: string;
      };
      medicalCare: {
        title: string;
        description: string;
      };
      petAdoption: {
        title: string;
        description: string;
      };
      petSupport: {
        title: string;
        description: string;
      };
    };
    featuredPets: {
      title: string;
      subtitle: string;
      viewAll: string;
    };
    statistics: {
      petsHelped: string;
      adoptions: string;
      volunteers: string;
      yearsOfService: string;
    };
    callToAction: {
      title: string;
      subtitle: string;
    };
  };
  navigation: {
    animals: string;
    about: string;
    contact: string;
    donate: string;
    languages?: {
      en: string;
      el: string;
    };
  };
  footer: {
    description: string;
    quickLinks: string;
    supportUs: string;
    customerCare: string;
    bankTransfer: string;
    contactUs: string;
    copyright: string;
    location: string;
    locationText?: string;
    followUs?: string;
    rights?: string;
  };
  common?: {
    email: string;
    menu: string;
    closeMenu: string;
    language: string;
  };
  about: {
    title: string;
    subtitle: ReactNode;
    closing: {
      support: string;
      greeting: string;
      signature: string;
    };
    cta: {
      donate: string;
      contact: string;
    };
    paradise: {
      intro: ReactNode;
      question: ReactNode;
      conclusion: ReactNode;
      title: string;
      subtitle: string;
      reality: string[];
    };
    mission: {
      title: string;
      subtitle: string;
      points: string[];
    };
    values: {
      title: string;
      subtitle: string;
      points: string[];
    };
  };
  animals: {
    hero: {
      title: string;
      titleBreak: string;
      subtitle: string;
    };
    categories: {
      allPets: string;
      dogs: string;
      cats: string;
      smallPets: string;
      available: string;
    };
    adoptionProcess: {
      title: string;
      steps: Array<{
        title: string;
        description: string;
      }>;
    };
    status: {
      available: string;
      adopted: string;
      pending: string;
    };
    cta: {
      adopt: string;
      donate: string;
    };
    title: string;
    subtitle: string;
    filters: {
      age: {
        label: string;
        baby: string;
        young: string;
        adult: string;
        senior: string;
      };
      size: {
        label: string;
        small: string;
        medium: string;
        large: string;
      };
      gender: {
        label: string;
        male: string;
        female: string;
      };
      title: ReactNode;
      all: string;
      dogs: string;
      cats: string;
      other: string;
    };
    sortBy: {
      label: string;
      newest: string;
      oldest: string;
      nameAsc: string;
      nameDesc: string;
    };
    noResults: string;
    loadMore: string;
    characteristics: {
      age: string;
      gender: string;
      size: string;
      breed: string;
    };
  };
  animal: {
    about: string;
    notFound: string;
    backToAnimals: string;
    details: {
      activities: string;
      compatibility: string;
      health: string;
      training: string;
    };
    species: {
      dog: string;
      cat: string;
      other: string;
    };
    breed: string;
    age: {
      singular: string;
      plural: string;
    };
    characteristics: {
      age: string;
      gender: string;
      size: string;
    };
    description: {
      template: string;
      adjectives: {
        friendly: string;
        energetic: string;
        calm: string;
        playful: string;
        loving: string;
      };
      gender: {
        male: string;
        female: string;
      };
      goals: {
        activeFamily: string;
        lovingHome: string;
        quietHome: string;
      };
      title: string;
      about: string;
    };
  };
  animalDetails: {
    backToAnimals: ReactNode;
    adoptionStatus: {
      available: string;
      adopted: string;
      pending: string;
    };
    adoption: {
      title: string;
      process: string[];
    };
    breed: string;
    age: string;
    gender: string;
    size: string;
    description: string;
    characteristics: string;
    about: string;
  };
  contact: {
    getInTouch: ReactNode;
    getInTouchText: ReactNode;
    location: ReactNode;
    address: {
      line1: string;
      line2: string;
      line3: string;
    };
    website: ReactNode;
    followSupport: ReactNode;
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      subject?: string;
      comments?: string;
      placeholders?: {
        name: string;
        email: string;
        subject: string;
        message: string;
        adoptSubject: string;
        adoptMessage: string;
      };
      submit: {
        default: string;
        sending: string;
        adopt: string;
        adoptSending: string;
      };
    };
    info: {
      title: string;
      address: string;
      phone: string;
      email: string;
    };
    social: {
      title: string;
      facebook: string;
      instagram: string;
      twitter: string;
    };
    successMessage?: string;
    errorMessage?: string;
  };
  donate: {
    hero: {
      title: string;
      subtitle: string;
    };
    packages: {
      title: string;
      subtitle: string;
      perMonth: string;
      showMore: string;
      showLess: string;
      items: {
        catFood: {
          title: string;
          description: string;
          impact: string;
        };
        injured: {
          title: string;
          description: string;
          impact: string;
        };
        neuter: {
          title: string;
          description: string;
          impact: string;
        };
        abandoned: {
          title: string;
          description: string;
          impact: string;
        };
        abused: {
          title: string;
          description: string;
          impact: string;
        };
        all: {
          title: string;
          description: string;
          impact: string;
        };
      };
    };
    other: {
      title: string;
      subtitle: string;
      paypal: {
        title: string;
        description: string;
        button: string;
      };
      patreon: {
        title: string;
        description: string;
        button: string;
      };
      bank: {
        title: string;
        description: string;
        account: string;
        iban: string;
        beneficiary: string;
        swift: string;
      };
    };
  };
};
