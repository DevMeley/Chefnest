import {
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Footer from "@/components/LandingPge/Footer";
import Header from "@/components/LandingPge/Header";
import ChefCard from "@/components/ui/ChefCard";
import { featuredChefs } from "@/constant/constant";
import SelectControl from "@/components/ui/SelectControl";


export default function Chefs() { 
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20 lg:pt-40">
        <section className="bg-muted/45 px-8 py-9 md:py-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold leading-tight md:text-6xl">
              Find Your Perfect Chef
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Browse our curated selection of professional chefs ready to create
              unforgettable culinary experiences.
            </p>
          </div>
        </section>

        <section className="sticky top-0 z-20 border-b border-border bg-background/95 px-8 py-6 backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                className="h-10 bg-card pl-10"
                placeholder="Search by name, cuisine, or location..."
                type="search"
              />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <SelectControl label="All Cuisines" />
              <SelectControl label="Any Price" />
              <Button variant="outline" size="icon" className="size-10 bg-card">
                <SlidersHorizontal className="size-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="px-8 py-12">
          <p className="mb-7 text-sm text-muted-foreground">
            Showing {featuredChefs.length} chefs
          </p>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {featuredChefs.map((chef) => (
              <ChefCard key={chef.id} {...chef} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
