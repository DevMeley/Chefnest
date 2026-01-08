import { Button } from "../ui/button";

export default function CTA() {
  return (
    <section className="bg-primary px-10 lg:px-80 py-15 mt-20 text-center flex flex-col lg:items-center gap-12">
      <div className="container text-primary-foreground flex flex-col gap-6">
        <h1 className="text-4xl lg:text-5xl">Ready to enjoy Culinary Magic?</h1>
        <p className="text-lg lg:3xl">Whether you're a chef looking to grow your business or a 
          client seeking exceptional dining experiences, ChefConnect is your gateway to culinary excellence.</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 justify-center">
        <Button variant="secondary" size="lg" className="text-lg text-white">Find a chef</Button>
        <Button variant="outline" size="lg" className="text-lg text-white">Join as a chef</Button>
      </div>
    </section>
  )
}
