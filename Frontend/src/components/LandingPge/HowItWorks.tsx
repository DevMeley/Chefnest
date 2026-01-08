import { work } from "@/constant/constant";

export default function HowItWorks() {
  return (
    <section className="bg-foreground mt-20 p-10">
      <div className="text-center pb-15">
        <h1 className="text-3xl lg:text-4xl font-bold text-accent-foreground pb-5">
          How Chefnest Works
        </h1>
        <p className="text-lg lg:text-2xl text-accent-foreground/50">
          Book your perfect chef in three simple steps
        </p>
      </div>
      <div className="text-accent-foreground text-center flex flex-col gap-8 lg:flex-row">
        {work.map((item, index) => (
          <div  className="relative flex flex-col items-center gap-3">
            <div className="bg-primary rounded-full w-16 h-16 flex items-center gap-2">
              <p className="text-center p-5">{item.step}</p>
            </div>
            {/* Line connecting to next step - hide on last item */}
            {index < 2 && (
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary/50" />
            )}
            <h1 className="text-2xl font-bold lg:text-4xl">{item.title}</h1>
            <p className="text-sm lg:text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
