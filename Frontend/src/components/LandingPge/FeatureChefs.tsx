import { featuredChefs } from "@/constant/constant";
import Icon from "../icon";
import { Button } from "../ui/button";
import ChefCard from "../ui/ChefCard";

export default function FeatureChefs() {
  return (
    <section className="px-10 mt-20">
      <div className="flex flex-col lg:flex-row lg:justify-between items-baseline lg:items-end gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl lg:text-5xl font-bold">Featured Chefs</h1>
          <p className="text-lg lg:text-2xl text-muted-foreground max-w-xl">
            Discover exceptional culinary talent handpicked for their expertise
            and outstanding reviews.
          </p>
        </div>
        <Button
          variant="outline"
          size="lg"
          className="text-primary hover:bg-primary hover:text-white border-primary border-3"
        >
          View All Chefs <Icon name="ArrowRight" />
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 content-center gap-6 lg:gap-8 mt-15">
        {featuredChefs.map((chef) => (
          <ChefCard key={chef.id} {...chef} />
        ))}
      </div>
    </section>
  );
}
