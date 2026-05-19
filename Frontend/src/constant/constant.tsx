import chef1 from "../assets/Chef1.png";
import chef2 from "../assets/chef2.png";
import chef3 from "../assets/chef3.png";
import chef4 from "../assets/chef4.png";
import { Calendar, ChefHat, CookingPot, Shield, Star, Utensils } from "lucide-react";

export const featuredChefs = [
  {
    id: "1",
    name: "Isabella Romano",
    specialty: "Fine Dining & Italian Cuisine",
    location: "New York, NY",
    rating: 4.9,
    reviewCount: 127,
    priceRange: "$$$",
    imageUrl: chef1,
    cuisines: ["Italian", "Mediterranean", "French"],
    yearsExperience: 15,
    eventsCompleted: 340,
    happyClients: 127,
    responseTime: "2 hours",
    about:
      "Trained in Rome and refined in New York, I create elegant Italian dining experiences built around seasonal produce, handmade pasta, and generous hospitality.",
    certifications: ["Italian Culinary Institute", "ServSafe Certified", "Wine Pairing Specialist"],
    languages: ["English", "Italian", "Spanish"],
    availability: {
      Monday: "10am - 8pm",
      Tuesday: "10am - 8pm",
      Wednesday: "Unavailable",
      Thursday: "12pm - 9pm",
      Friday: "12pm - 10pm",
      Saturday: "11am - 11pm",
      Sunday: "Unavailable",
    },
  },
  {
    id: "2",
    name: "Marcus Chen",
    specialty: "Asian Fusion & Contemporary",
    location: "San Francisco, CA",
    rating: 4.8,
    reviewCount: 98,
    priceRange: "$$",
    imageUrl: chef3,
    cuisines: ["Japanese", "Chinese", "Thai", "Korean"],
    yearsExperience: 12,
    eventsCompleted: 280,
    happyClients: 98,
    responseTime: "4 hours",
    about:
      "Blending traditional Asian techniques with modern California influences, I create dishes that tell a story. My journey from Hong Kong to San Francisco has shaped my unique culinary perspective, focusing on fresh, local ingredients with bold flavors.",
    certifications: ["Le Cordon Bleu", "Japanese Knife Skills Master", "Food Safety Manager"],
    languages: ["English", "Mandarin", "Cantonese"],
    availability: {
      Monday: "Unavailable",
      Tuesday: "11am - 10pm",
      Wednesday: "11am - 10pm",
      Thursday: "11am - 10pm",
      Friday: "12pm - 11pm",
      Saturday: "10am - 11pm",
      Sunday: "10am - 8pm",
    },
  },
  {
    id: "3",
    name: "Diego Martinez",
    specialty: "Private Events & Catering",
    location: "Los Angeles, CA",
    rating: 5.0,
    reviewCount: 64,
    priceRange: "$$$$",
    imageUrl: chef2,
    cuisines: ["Spanish", "Latin American", "Molecular"],
    yearsExperience: 10,
    eventsCompleted: 210,
    happyClients: 64,
    responseTime: "3 hours",
    about:
      "I build lively event menus around Spanish technique, Latin American flavors, and playful modern plating for celebrations that feel personal and memorable.",
    certifications: ["Basque Culinary Center", "Event Catering Pro", "Food Safety Manager"],
    languages: ["English", "Spanish", "Portuguese"],
    availability: {
      Monday: "Unavailable",
      Tuesday: "12pm - 8pm",
      Wednesday: "12pm - 8pm",
      Thursday: "2pm - 10pm",
      Friday: "12pm - 11pm",
      Saturday: "10am - 11pm",
      Sunday: "10am - 7pm",
    },
  },
  {
    id: "4",
    name: "Sofia Laurent",
    specialty: "French Pastry & Desserts",
    location: "Chicago, IL",
    rating: 4.7,
    reviewCount: 82,
    priceRange: "$$",
    imageUrl: chef4,
    cuisines: ["French", "Pastry", "Desserts"],
    yearsExperience: 9,
    eventsCompleted: 175,
    happyClients: 82,
    responseTime: "5 hours",
    about:
      "My pastry work brings classic French technique to intimate dinners, dessert tables, and milestone celebrations with refined textures and balanced sweetness.",
    certifications: ["Ecole Ducasse", "Chocolate Arts Certificate", "Food Safety Manager"],
    languages: ["English", "French"],
    availability: {
      Monday: "9am - 5pm",
      Tuesday: "9am - 5pm",
      Wednesday: "9am - 5pm",
      Thursday: "Unavailable",
      Friday: "10am - 8pm",
      Saturday: "9am - 9pm",
      Sunday: "Unavailable",
    },
  },
  {
    id: "5",
    name: "James Wilson",
    specialty: "BBQ & Southern Comfort",
    location: "Austin, TX",
    rating: 4.9,
    reviewCount: 156,
    priceRange: "$",
    imageUrl: chef3,
    cuisines: ["American", "BBQ", "Southern"],
    yearsExperience: 14,
    eventsCompleted: 390,
    happyClients: 156,
    responseTime: "2 hours",
    about:
      "I serve slow-smoked barbecue, soulful sides, and relaxed family-style menus for backyard gatherings, weddings, and corporate cookouts.",
    certifications: ["Texas BBQ Pitmaster", "ServSafe Certified", "Live Fire Cooking"],
    languages: ["English"],
    availability: {
      Monday: "Unavailable",
      Tuesday: "10am - 6pm",
      Wednesday: "10am - 6pm",
      Thursday: "10am - 8pm",
      Friday: "10am - 10pm",
      Saturday: "8am - 11pm",
      Sunday: "8am - 6pm",
    },
  },
  {
    id: "6",
    name: "Yuki Tanaka",
    specialty: "Traditional Japanese",
    location: "Seattle, WA",
    rating: 5.0,
    reviewCount: 43,
    priceRange: "$$$$",
    imageUrl: chef2,
    cuisines: ["Japanese", "Sushi", "Omakase"],
    yearsExperience: 16,
    eventsCompleted: 145,
    happyClients: 43,
    responseTime: "6 hours",
    about:
      "I specialize in intimate sushi and omakase experiences with disciplined technique, carefully sourced fish, and calm tableside presentation.",
    certifications: ["Tokyo Sushi Academy", "Seafood HACCP", "Food Safety Manager"],
    languages: ["English", "Japanese"],
    availability: {
      Monday: "Unavailable",
      Tuesday: "Unavailable",
      Wednesday: "3pm - 10pm",
      Thursday: "3pm - 10pm",
      Friday: "3pm - 11pm",
      Saturday: "12pm - 11pm",
      Sunday: "12pm - 8pm",
    },
  },
];

export const services = [
  {
    icon: Utensils,
    title: "Private Dining",
    description:
      "Intimate dining experiences crafted in the comfort of your home by world-class chefs.",
  },
  {
    icon: Calendar,
    title: "Event Catering",
    description:
      "From intimate gatherings to grand celebrations, exceptional cuisine for every occasion.",
  },
  {
    icon: ChefHat,
    title: "Cooking Classes",
    description:
      "Learn culinary techniques from professional chefs in personalized sessions.",
  },
  {
    icon: CookingPot,
    title: "Meal Preparation",
    description:
      "Weekly meal prep services tailored to your dietary preferences and lifestyle.",
  },
];

export const work = [
  {
    step: "01",
    title: "Browse & Discover",
    description:
      "Explore chef profiles, view portfolios, and filter by cuisine, location, or service type.",
  },
  {
    step: "02",
    title: "Request & Connect",
    description:
      "Send a service request with your event details. Chat directly with chefs to discuss your vision.",
  },
  {
    step: "03",
    title: "Book & Enjoy",
    description:
      "Confirm your booking, pay securely, and enjoy an unforgettable culinary experience.",
  },
];

export const trusts = [
  {
    icon: Shield,
    title: "Verified Professionals",
    description:
      "Every chef undergoes background checks and credential verification.",
  },
  {
    icon: Star,
    title: "Authentic Reviews",
    description:
      "Read genuine feedback from verified clients after completed services.",
  },
  {
    icon: Calendar,
    title: "Secure Booking",
    description:
      "Payment protection and cancellation policies that keep you covered.",
  },
];
