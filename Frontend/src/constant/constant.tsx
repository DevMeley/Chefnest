import chef1 from "../assets/Chef1.png";
import chef2 from "../assets/Chef2.png";
import chef3 from "../assets/Chef3.png";
// import chef4 from "../assets/Chef4.png"
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
