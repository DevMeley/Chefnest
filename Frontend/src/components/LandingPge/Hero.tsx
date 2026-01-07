import HeroImg from "../../assets/hero.png";
import Chef1 from "../../assets/Chef1.png";
import Chef2 from "../../assets/Chef2.png";
import Chef3 from "../../assets/Chef3.png";
import Icon from "../icon";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-10 py-60 lg:px-20">
      <div className="absolute inset-0">
        <img
          src={HeroImg}
          alt="professional chef"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
      </div>
      <div className="container relative text-white flex flex-col gap-10">
        <div className="max-w-2xl lg:max-w-4xl flex flex-col gap-8">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Exceptional Chefs,{" "}
            <span className="text-secondary">Unforgettable</span> Experiences
          </h1>
          <p className="text-lg lg:text-2xl text-muted ">
            Connect with world-class culinary professionals for private dining,
            event catering, and personalized cooking experiences.
          </p>
        </div>
        <div className="flex gap-8">
          <Button
            variant="outline"
            size="lg"
            className="lg:text-lg lg:font-bold"
          >
            <Icon name="Search" />
            Find a chef
          </Button>
          <Button
            variant="default"
            size="lg"
            className="lg:text-lg lg:font-bold"
          >
            <Icon name="ChefHat" className="text-white" />
            Join as a chef
          </Button>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex items-center gap-2 lg:gap-8 -mr-5">
            <div className="flex -space-x-2">
              {[Chef1, Chef2, Chef3].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="border-3 border-accent-foreground w-12 h-12 rounded-full "
                />
              ))}
            </div>
            <p>
              <span className="font-bold">500+</span> verified chefs
            </p>
          </div>
          <div className="flex items-center">
            <Icon name="Star" className="text-secondary" />{" "}
            <span>4.9 average rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
