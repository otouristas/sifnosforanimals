import { Translations } from '@/types/translations';

const translations: Translations = {
  homepage: {
    hero: {
      title: "Give Them The Love",
      titleBreak: "They Deserve",
      subtitle: "Help us provide care and find loving homes for pets in need",
      cta: "Adopt Now"
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive care and support for pets in need",
      animalRescue: {
        title: "Animal Rescue",
        description: "We rescue animals from dangerous situations and provide them with immediate care"
      },
      medicalCare: {
        title: "Medical Care",
        description: "Full veterinary services including vaccinations, surgery, and regular check-ups"
      },
      petAdoption: {
        title: "Pet Adoption",
        description: "Find your perfect companion through our thorough adoption process"
      },
      petSupport: {
        title: "Pet Support",
        description: "Ongoing support and resources for pet owners in our community"
      }
    },
    featuredPets: {
      title: "Featured Pets",
      subtitle: "Meet some of our adorable pets looking for forever homes",
      viewAll: "View All Pets"
    },
    statistics: {
      petsHelped: "Pets Helped",
      adoptions: "Successful Adoptions",
      volunteers: "Active Volunteers",
      yearsOfService: "Years of Service"
    },
    callToAction: {
      title: "Make a Difference Today",
      subtitle: "Your support helps us continue our mission of caring for and finding homes for animals in need."
    }
  },
  navigation: {
    animals: "Animals",
    about: "About",
    contact: "Contact",
    donate: "Donate",
    languages: {
      en: "EN",
      el: "ΕΛ"
    }
  },
  footer: {
    description: "Helping stray animals find loving homes and providing care for those in need on the beautiful island of Sifnos.",
    quickLinks: "Quick Links",
    supportUs: "Support Us",
    customerCare: "Customer Care",
    bankTransfer: "Bank Transfer",
    location: "Location",
    locationText: "Sifnos, Cyclades, Greece",
    followUs: "Follow Us",
    rights: "All rights reserved.",
    copyright: " ",
    contactUs: "Contact Us"
  },
  common: {
    email: "Email",
    menu: "Menu",
    closeMenu: "Close Menu",
    language: "Language"
  },
  about: {
    title: "About Us",
    subtitle: "Dedicated to protecting and caring for the animals of Sifnos",
    paradise: {
      intro: "Imagine your perfect little island on the Aegean sea. Crystal clear waters, cosy beaches, quaint whitewashed villages, hospitable people and amazing food.",
      reality: [
        "Now imagine stray cats living on the streets giving birth 3-4 times a year, being hit by cars, getting sick, hungry.",
        "Imagine domesticated dogs chained for their whole life, sad, lonely, isolated.",
        "Imagine newborn puppies being thrown in the garbage.",
        "Imagine donkeys, horses and goats with their legs tied up to constrict movement."
      ],
      question: "How could a human's paradise possibly be an animal's hell?",
      conclusion: "We had to change this. So we created Sifnos for Animals, a formal Association for the Care and Protection of all the animals of Sifnos.",
      title: "Paradise Lost",
      subtitle: "The Reality of Animal Life on Sifnos"
    },
    mission: {
      title: "Our Mission",
      subtitle: "What We Do",
      points: [
        "we strive to change the local's old mindsets about animal well-being",
        "we secure fundings to neuter stray cats",
        "we look after abandoned puppies and kittens and promote them for adoption",
        "we save abused farm animals, horses, donkeys",
        "we care for unhealthy or injured animals, all year round"
      ]
    },
    values: {
      title: "Our Values",
      subtitle: "What We Stand For",
      points: [
        "Compassion for all living beings",
        "Dedication to animal welfare",
        "Community engagement and education",
        "Transparency in our operations",
        "Sustainable animal care practices"
      ]
    },
    closing: {
      support: "We need your support to create a better life for all these animals. We will be so happy to create this life with you.",
      greeting: "With our animal friendly greetings!",
      signature: "The volunteers of Sifnos for Animals"
    },
    cta: {
      donate: "Support Our Cause",
      contact: "Get Involved"
    }
  },
  animals: {
    hero: {
      title: "Find Your Perfect",
      titleBreak: "Companion",
      subtitle: "Browse our available pets and give them a loving forever home"
    },
    categories: {
      allPets: "All Pets",
      dogs: "Dogs",
      cats: "Cats",
      smallPets: "Small Pets",
      available: "available"
    },
    title: "Our Animals",
    subtitle: "Find Your Perfect Companion",
    filters: {
      title: "Filters",
      age: {
        label: "Age",
        baby: "Baby",
        young: "Young",
        adult: "Adult",
        senior: "Senior"
      },
      size: {
        label: "Size",
        small: "Small",
        medium: "Medium",
        large: "Large"
      },
      gender: {
        label: "Gender",
        male: "Male",
        female: "Female"
      },
      all: "All",
      dogs: "Dogs",
      cats: "Cats",
      other: "Other"
    },
    status: {
      available: "Available",
      adopted: "Adopted",
      pending: "Pending"
    },
    adoptionProcess: {
      title: "How to Adopt",
      steps: [
        {
          title: "Browse Available Pets",
          description: "Look through our list of available pets and find your perfect match"
        },
        {
          title: "Submit Application",
          description: "Fill out our adoption application form with your information"
        },
        {
          title: "Meet Your Match",
          description: "Schedule a meet and greet with your potential new family member"
        },
        {
          title: "Welcome Home",
          description: "Complete the adoption process and welcome your new pet home"
        }
      ]
    },
    cta: {
      adopt: "Adopt Now",
      donate: "Support Us"
    },
    sortBy: {
      label: "Sort by",
      newest: "Newest First",
      oldest: "Oldest First",
      nameAsc: "Name A-Z",
      nameDesc: "Name Z-A"
    },
    noResults: "No animals found matching your criteria",
    loadMore: "Load More",
    characteristics: {
      age: "Age",
      gender: "Gender",
      size: "Size",
      breed: "Breed"
    }
  },
  animal: {
    about: "About",
    notFound: "Animal not found",
    backToAnimals: "Back to Animals",
    details: {
      activities: "Activities",
      compatibility: "Compatibility",
      health: "Health",
      training: "Training"
    },
    species: {
      dog: "Dog",
      cat: "Cat",
      other: "Other"
    },
    breed: "Breed",
    age: {
      singular: "year",
      plural: "years"
    },
    characteristics: {
      age: "Age",
      gender: "Gender",
      size: "Size"
    },
    description: {
      template: "Meet {name}, a {adjective} {gender} looking for {goal}",
      adjectives: {
        friendly: "friendly",
        energetic: "energetic",
        calm: "calm",
        playful: "playful",
        loving: "loving"
      },
      gender: {
        male: "boy",
        female: "girl"
      },
      goals: {
        activeFamily: "an active family",
        lovingHome: "a loving home",
        quietHome: "a quiet home"
      },
      title: "About Me",
      about: "About"
    }
  },
  animalDetails: {
    backToAnimals: "Back to Animals",
    adoptionStatus: {
      available: "Available for Adoption",
      adopted: "Already Adopted",
      pending: "Adoption Pending"
    },
    adoption: {
      title: "Adoption Process",
      process: [
        "Submit an application",
        "Schedule a meet and greet",
        "Complete home check",
        "Finalize adoption"
      ]
    },
    breed: "Breed",
    age: "Age",
    gender: "Gender",
    size: "Size",
    description: "Description",
    characteristics: "Characteristics",
    about: "About"
  },
  contact: {
    title: "Contact Us",
    subtitle: "We'd love to hear from you",
    getInTouch: "Get in Touch",
    getInTouchText: "Have questions about our animals or adoption process? We're here to help!",
    location: "Location",
    website: "Website",
    followSupport: "Follow & Support",
    social: {
      title: "Follow Us",
      facebook: "Facebook",
      instagram: "Instagram",
      twitter: "Twitter"
    },
    form: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      comments: "Comments",
      placeholders: {
        name: "John Doe",
        email: "john.doe@example.com",
        subject: "Your subject",
        message: "Your message...",
        adoptSubject: "Interested in adopting {name}",
        adoptMessage: "Tell us why you'd like to adopt {name}..."
      },
      submit: {
        default: "Send message",
        sending: "Sending message...",
        adopt: "Send adoption request for {name}",
        adoptSending: "Sending adoption request for {name}..."
      }
    },
    info: {
      title: "Contact Information",
      address: "Apollonia, Sifnos, Greece",
      phone: "+30 123 456 7890",
      email: "info@sifnosforanimals.org"
    },
    address: {
      line1: "Sifnos for Animals",
      line2: "Apollonia, Sifnos",
      line3: "Cyclades, Greece"
    },
    successMessage: "Your message has been sent successfully. We'll get back to you soon!",
    errorMessage: "There was an error sending your message. Please try again."
  },
  donate: {
    hero: {
      title: "Support Our Mission",
      subtitle: "Your donation helps us provide care and shelter for animals in need"
    },
    packages: {
      title: "Support Our Animals",
      subtitle: "Choose how you'd like to help",
      perMonth: "month",
      showMore: "Show More",
      showLess: "Show Less",
      items: {
        catFood: {
          title: "I'd like to feed a hungry stray cat",
          description: "During the summer months, stray cats are barely being fed at the local tavernas and by the island's summer visitors. However, during the winter, when almost everyone is away, they rely on volunteers to provide them with food and save them from starving!",
          impact: "With only 8 euros per month, one cat can eat good quality food for a whole month! Hang on kitty, your food is coming."
        },
        injured: {
          title: "I'd like to help treat an injured animal",
          description: "The stray animals of Sifnos are very often found in the middle of the streets hit by cars and motorbikes, or badly infected, crying for help, until one kindhearted volunteer gets out of his way to collect them and take them to the vet for treatment.",
          impact: "With 15 euros per month you can be a co-angel in the life of an unlucky animal and with your help they may turn out to be the luckiest animal in the world!"
        },
        neuter: {
          title: "I'd like to support spaying/neutering",
          description: "Help us control the stray population humanely through our spaying/neutering program. This prevents unwanted litters and helps keep the stray population manageable.",
          impact: "Your contribution of 20 euros helps fund our spaying/neutering program, preventing future strays and suffering."
        },
        abandoned: {
          title: "I'd like to rescue an abandoned animal",
          description: "Many animals are abandoned on the island, especially after the tourist season. They need immediate rescue, care, and rehabilitation to give them a chance at a better life.",
          impact: "With 30 euros per month, you help us rescue and rehabilitate abandoned animals, giving them a second chance at life."
        },
        abused: {
          title: "I'd like to help an abused animal recover",
          description: "Some animals come to us having suffered abuse and neglect. They need special care, medical attention, and patience to recover both physically and emotionally.",
          impact: "Your monthly contribution of 40 euros helps provide comprehensive rehabilitation care for abused animals."
        },
        all: {
          title: "I'd like to support all programs",
          description: "Support all our initiatives - from feeding and medical care to rescue and rehabilitation. Your generous contribution helps us maintain and expand our vital services.",
          impact: "With 100 euros monthly, you become a guardian angel supporting all our programs and making a lasting impact."
        }
      }
    },
    other: {
      title: "Other Ways to Help",
      subtitle: "Choose your preferred payment method",
      paypal: {
        title: "PayPal",
        description: "Make a secure one-time or recurring donation through PayPal",
        button: "Donate with PayPal"
      },
      patreon: {
        title: "Patreon",
        description: "Become a monthly supporter and receive updates about the animals you're helping",
        button: "Support on Patreon"
      },
      bank: {
        title: "Bank Transfer",
        description: "Support us directly through bank transfer",
        account: "Bank Account Details",
        iban: "GR1234567890123456789012345",
        beneficiary: "Sifnos Animals",
        swift: "ABCDGRAA"
      }
    }
  },
  // ... rest of the code remains the same ...
};

export default translations;
