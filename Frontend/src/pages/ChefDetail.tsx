import { useState, type ElementType, type ReactNode } from "react";
import { Link, useParams } from "react-router";
import {
  Award,
  Calendar,
  CheckCircle2,
  ChefHat,
  Clock,
  Heart,
  MapPin,
  MessageSquare,
  Share2,
  Star,
  Users,
  Utensils,
} from "lucide-react";
import Footer from "@/components/LandingPge/Footer";
import Header from "@/components/LandingPge/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { featuredChefs } from "@/constant/constant";
import { cn } from "@/lib/utils";

const tabs = ["About", "Services", "Portfolio", "Reviews"] as const;
type ChefTab = (typeof tabs)[number];

export default function ChefDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<ChefTab>("About");
  const chef = featuredChefs.find((item) => item.id === id);

  if (!chef) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <ChefHat className="mb-4 size-12 text-primary" />
          <h1 className="text-4xl font-bold">Chef not found</h1>
          <p className="mt-3 max-w-md text-muted-foreground">
            This chef profile is not available. Browse the full chef list to
            find the right culinary match.
          </p>
          <Button asChild className="mt-6">
            <Link to="/chefs">View Chefs</Link>
          </Button>
        </main>
      </div>
    );
  }

  const availability = Object.entries(chef.availability);
  const firstName = chef.name.split(" ")[0];
  const chefServices = getChefServices(chef);
  const portfolioImages = getPortfolioImages(chef.id);
  const reviews = getChefReviews(chef);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <section className="relative border-b border-border">
          <div className="absolute inset-0">
            <img
              src={chef.imageUrl}
              alt={chef.name}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-primary/70" />
            <div className="absolute inset-0 bg-linear-to-b from-background/5 via-background/10 to-background" />
          </div>

          <div className="relative mx-auto flex min-h-105 max-w-7xl flex-col justify-end gap-8 px-6 pb-8 pt-28 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[190px_1fr_290px] lg:items-end">
              <div className="relative h-44 w-44 overflow-visible rounded-xl border-4 border-background bg-card shadow-elevated lg:h-48 lg:w-48">
                <img
                  src={chef.imageUrl}
                  alt={chef.name}
                  className="h-full w-full rounded-lg object-cover"
                />
                <span className="absolute -bottom-3 -right-3 flex size-9 items-center justify-center rounded-full border-4 border-background bg-green-500">
                  <span className="size-2.5 rounded-full bg-white" />
                </span>
              </div>

              <div className="max-w-3xl text-background">
                <h1 className="text-5xl font-bold leading-none text-foreground lg:text-6xl">
                  {chef.name}
                </h1>
                <p className="mt-3 text-xl text-primary">{chef.specialty}</p>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-foreground/80">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="size-4 text-primary" />
                    {chef.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Star className="size-4 fill-secondary text-secondary" />
                    <strong className="text-foreground">{chef.rating}</strong>
                    ({chef.reviewCount} reviews)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-4 text-primary" />
                    Responds within {chef.responseTime}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {chef.cuisines.map((cuisine) => (
                    <Badge
                      key={cuisine}
                      variant="secondary"
                      className="px-3 py-1"
                    >
                      {cuisine}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:items-stretch">
                <Button size="lg" className="h-14 text-base shadow-wine">
                  <Calendar className="size-5" />
                  Request Booking
                </Button>
                <div className="grid grid-cols-[1fr_auto_auto] gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-14 border-2 border-primary text-primary"
                  >
                    <MessageSquare className="size-5" />
                    Message
                  </Button>
                  <Button
                    variant="outline"
                    size="icon-lg"
                    className="h-14 w-14 border-2 border-primary text-primary"
                    aria-label="Save chef"
                  >
                    <Heart className="size-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon-lg"
                    className="h-14 w-14 border-2 border-primary text-primary"
                    aria-label="Share chef"
                  >
                    <Share2 className="size-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-6 py-7 text-center md:grid-cols-4 lg:px-8">
            <Stat
              icon={Award}
              value={`${chef.yearsExperience}+`}
              label="Years Experience"
            />
            <Stat
              icon={Utensils}
              value={chef.eventsCompleted}
              label="Events Completed"
            />
            <Stat
              icon={Star}
              value={chef.rating}
              label="Average Rating"
              iconClassName="fill-secondary text-secondary"
            />
            <Stat
              icon={Users}
              value={chef.happyClients}
              label="Happy Clients"
            />
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1fr_408px] lg:px-8">
          <div className="min-w-0">
            <div className="mb-6 flex rounded-lg bg-muted p-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors",
                    activeTab === tab && "bg-card text-foreground shadow-sm",
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === "About" && (
              <AboutPanel
                about={chef.about}
                certifications={chef.certifications}
                languages={chef.languages}
              />
            )}

            {activeTab === "Services" && (
              <ServicesPanel services={chefServices} />
            )}

            {activeTab === "Portfolio" && (
              <PortfolioPanel chefName={chef.name} images={portfolioImages} />
            )}

            {activeTab === "Reviews" && (
              <ReviewsPanel
                chefName={chef.name}
                rating={chef.rating}
                reviewCount={chef.reviewCount}
                reviews={reviews}
              />
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <Card className="rounded-xl py-0 shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between px-6 pt-6">
                <h2 className="text-3xl font-bold">Book {firstName}</h2>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  {chef.priceRange}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4 px-6 pb-6">
                <p className="leading-6 text-muted-foreground">
                  Request a booking and {firstName} will respond within{" "}
                  {chef.responseTime}.
                </p>
                <Button size="lg" className="h-12 w-full shadow-wine">
                  <Calendar className="size-5" />
                  Request Booking
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 w-full border-2 border-primary text-primary"
                >
                  <MessageSquare className="size-5" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-xl py-0 shadow-soft">
              <CardHeader className="px-6 pt-6">
                <h2 className="flex items-center gap-3 text-3xl font-bold">
                  <Calendar className="size-5 text-primary" />
                  Availability
                </h2>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <div>
                  {availability.map(([day, time]) => (
                    <div
                      key={day}
                      className="flex items-center justify-between border-b border-border py-3 last:border-b-0"
                    >
                      <span>{day}</span>
                      <span
                        className={cn(
                          "text-sm",
                          time === "Unavailable"
                            ? "text-muted-foreground"
                            : "font-medium text-green-600",
                        )}
                      >
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}

type Chef = (typeof featuredChefs)[number];

type ChefService = {
  title: string;
  description: string;
  duration: string;
  price: string;
};

type ChefReview = {
  name: string;
  initials: string;
  service: string;
  date: string;
  rating: number;
  comment: string;
};

function AboutPanel({
  about,
  certifications,
  languages,
}: {
  about: string;
  certifications: string[];
  languages: string[];
}) {
  return (
    <div className="space-y-6">
      <InfoCard
        icon={<ChefHat className="size-5 text-primary" />}
        title="About Me"
      >
        <p className="text-lg leading-8 text-muted-foreground">{about}</p>
      </InfoCard>

      <InfoCard
        icon={<Award className="size-5 text-primary" />}
        title="Certifications & Training"
      >
        <div className="flex flex-wrap gap-3">
          {certifications.map((certification) => (
            <Badge
              key={certification}
              variant="outline"
              className="border-border bg-card px-3 py-2"
            >
              <CheckCircle2 className="size-3.5 text-green-500" />
              {certification}
            </Badge>
          ))}
        </div>
      </InfoCard>

      <InfoCard title="Languages">
        <div className="flex flex-wrap gap-3">
          {languages.map((language) => (
            <Badge key={language} variant="secondary" className="px-3 py-1">
              {language}
            </Badge>
          ))}
        </div>
      </InfoCard>
    </div>
  );
}

function ServicesPanel({ services }: { services: ChefService[] }) {
  return (
    <div className="space-y-4">
      {services.map((service) => (
        <Card key={service.title} className="rounded-xl py-0 shadow-soft">
          <CardContent className="grid gap-5 px-6 py-7 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-2xl font-bold">{service.title}</h2>
              <p className="mt-3 text-lg leading-7 text-muted-foreground">
                {service.description}
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="size-4" />
                {service.duration}
              </p>
            </div>
            <div className="flex flex-col items-start gap-5 md:items-end">
              <p className="font-display text-xl font-bold text-primary">
                {service.price}
              </p>
              <Button
                variant="outline"
                className="h-10 border-2 border-primary px-5 text-primary"
              >
                Select Service
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function PortfolioPanel({
  chefName,
  images,
}: {
  chefName: string;
  images: string[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {images.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className="aspect-square overflow-hidden rounded-xl bg-muted shadow-soft"
        >
          <img
            src={image}
            alt={`${chefName} portfolio ${index + 1}`}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

function ReviewsPanel({
  chefName,
  rating,
  reviewCount,
  reviews,
}: {
  chefName: string;
  rating: number;
  reviewCount: number;
  reviews: ChefReview[];
}) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <Star className="size-6 fill-secondary text-secondary" />
        <span className="font-display text-2xl font-bold">{rating}</span>
        <span className="text-muted-foreground">
          Based on {reviewCount} reviews
        </span>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <Card
            key={`${chefName}-${review.name}`}
            className="rounded-xl py-0 shadow-soft"
          >
            <CardContent className="grid gap-4 px-6 py-7 sm:grid-cols-[48px_1fr_auto]">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                {review.initials}
              </div>
              <div>
                <h3 className="font-semibold">{review.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {review.service} <span className="mx-1">•</span> {review.date}
                </p>
                <p className="mt-3 text-lg leading-7 text-muted-foreground">
                  {review.comment}
                </p>
              </div>
              <div className="flex gap-1 pt-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={cn(
                      "size-4",
                      index < review.rating
                        ? "fill-secondary text-secondary"
                        : "text-border",
                    )}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function getChefServices(chef: Chef): ChefService[] {
  const cuisine = chef.cuisines[0] ?? "seasonal";

  return [
    {
      title: "Private Dinner Party",
      description: `An intimate fine dining experience for up to 12 guests with a custom ${cuisine} menu.`,
      duration: "4-5 hours",
      price: `${chef.priceRange === "$" ? "$95" : "$150"}/person`,
    },
    {
      title: "Meal Prep Service",
      description:
        "Weekly meal preparation with fresh, healthy dishes tailored to your dietary needs.",
      duration: "Flexible",
      price: `${chef.priceRange === "$$$$" ? "$450" : "$350"}/week`,
    },
    {
      title: "Cooking Class",
      description: `Learn authentic ${cuisine} techniques in a hands-on cooking session.`,
      duration: "3 hours",
      price: `${chef.priceRange === "$" ? "$125" : "$200"}/person`,
    },
  ];
}

function getPortfolioImages(chefId: string) {
  const images = featuredChefs.map((chef) => chef.imageUrl);
  const startIndex = Math.max(
    0,
    featuredChefs.findIndex((chef) => chef.id === chefId),
  );

  return Array.from({ length: 6 }, (_, index) => {
    return images[(startIndex + index) % images.length];
  });
}

function getChefReviews(chef: Chef): ChefReview[] {
  const firstName = chef.name.split(" ")[0];
  const cuisine = chef.cuisines[0] ?? "culinary";

  return [
    {
      name: "Sarah M.",
      initials: "SM",
      service: "Private Dinner",
      date: "2 weeks ago",
      rating: 5,
      comment: `${firstName} created the most incredible dinner party for my anniversary. Every dish was perfection, and the whole experience felt effortless.`,
    },
    {
      name: "Michael R.",
      initials: "MR",
      service: "Cooking Class",
      date: "1 month ago",
      rating: 5,
      comment: `Hired ${firstName} for a cooking class with friends. The session was patient, knowledgeable, and made learning ${cuisine} cooking so fun.`,
    },
    {
      name: "Jennifer L.",
      initials: "JL",
      service: "Meal Prep",
      date: "2 months ago",
      rating: Math.round(chef.rating),
      comment:
        "Fresh, thoughtful menus every week and excellent communication. The meals made busy weekdays feel calm and special.",
    },
  ];
}

function Stat({
  icon: Icon,
  value,
  label,
  iconClassName,
}: {
  icon: ElementType;
  value: string | number;
  label: string;
  iconClassName?: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-center gap-2">
        <Icon className={cn("size-5 text-primary", iconClassName)} />
        <span className="font-display text-2xl font-bold">{value}</span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function InfoCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <Card className="rounded-xl py-0 shadow-soft">
      <CardContent className="px-6 py-7">
        <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold">
          {icon}
          {title}
        </h2>
        {children}
      </CardContent>
    </Card>
  );
}
