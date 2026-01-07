import { services } from "@/constant/constant";
import { Card } from "../ui/card";

export default function Service() {
  return (
    <section className="p-10 mx-auto flex flex-col gap-8 mt-20">
      <div className="text-center lg:mx-50 flex flex-col gap-8">
        <h1 className="text-4xl font-bold lg:text-5xl text-primary">
          Culinary Services for Every Occasion
        </h1>
        <p className="text-gray-900/50 lg:text-2xl">
          From intimate dinners to grand celebrations, our chefs bring
          extraordinary culinary experiences to you.
        </p>
      </div>
      .
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <Card key={i} className="p-4 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 hover:bg-primary hover:scale-110 transition-all duration-300">
              <service.icon className="w-7 h-7 text-primary hover:text-primary-foreground transition-colors" />
            </div>
            <h1 className="text-2xl font-bold">{service.title}</h1>
            <p>{service.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
