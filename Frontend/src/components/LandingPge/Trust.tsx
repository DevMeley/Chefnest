import { trusts } from "@/constant/constant";
import chef1 from "../../assets/chef1.png";
import { Star } from "lucide-react";

export default function Trust() {
  return (
    <section className="p-10 mt-15">
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap2">
        <div className="flex flex-col gap-8 lg:gap-14">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Trusted by Food Lovers Everywhere
            </h1>
            <p className="text:2xl lg:text-2xl text-foreground/60">
              Chefnest verifies every chef on our platform, ensuring you get
              access to genuine culinary professionals with proven expertise.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:gap-8">
            {trusts.map((trust) => (
              <div className="flex items-start gap-2">
                <div className="bg-primary/30 h-16 w-16 p-5 rounded-lg">
                  <trust.icon className="" />
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="text-2xl">{trust.title}</h1>
                  <p className="text-foreground/80 lg:text-lg">
                    {trust.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img src={chef1} alt="" className="rounded-xl" />
          <div className="absolute p-6 -bottom-6 -left-6 bg-card rounded-xl shadow-elevated max-w-xs flex flex-col gap-4">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="text-secondary fill-secondary" />
              ))}
            </div>
            <p className="text-sm">
              "Chef Isabella created the most incredible anniversary dinner.
              Every dish was a masterpiece!"
            </p>
            <p className="text-xs">— Sarah M., New York</p>
          </div>
        </div>
      </div>
    </section>
  );
}
