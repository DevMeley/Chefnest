import Icon from "../icon";
import { Badge } from "./badge";
import { Card, CardContent } from "./card";

interface ChefCardProps {
  id: string;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  imageUrl: string;
  cuisines: string[];
}

export default function ChefCard({
  //   id,
  name,
  //   specialty,
  location,
  rating,
  reviewCount,
  priceRange,
  imageUrl,
  cuisines,
}: ChefCardProps) {
  return (
    <div>
      <Card className="overflow-hidden group">
        <div className="relative overflow-hidden ">
          <img src={imageUrl} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-foreground/60 via-transparent to-transparent" />
          {/* Price range */}
          <div className="absolute top-4 right-4">
            <Badge
              variant="secondary"
              className="bg-background/90 backdrop-blur-sm text-foreground font-body"
            >
              {priceRange}
            </Badge>
          </div>
          {/* ratings */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 px-2 py-1 bg-background/90 backdrop-blur-sm rounded-full">
            <Icon
              name="Star"
              className="fill-secondary text-secondary size-4"
            />
            <p className="text-black">{rating}</p>
            <p className="text-primary/30">({reviewCount})</p>
          </div>
        </div>
        <CardContent className="p-5 flex flex-col gap-3">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="flex items-center gap-2">
            <Icon name="MapPin" />
            {location}
          </p>
          <div className="flex items-center gap-2">
            {cuisines.slice(0, 3).map((cuisine) => (
              <Badge variant="outline">{cuisine}</Badge>
            ))}
            {cuisines.length > 3 && (
              <Badge variant="outline" className="font-body text-xs">
                +{cuisines.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
