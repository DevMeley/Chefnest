import { Link, useParams } from "react-router";
import {
  BarChart3,
  Bell,
  CalendarDays,
  Camera,
  ChefHat,
  Eye,
  MapPin,
  MessageSquare,
  Plus,
  Settings,
  Star,
  TrendingUp,
  Upload,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featuredChefs } from "@/constant/constant";
import { cn } from "@/lib/utils";

const tabs = [
  "Overview",
  "Edit Profile",
  "Services",
  "Portfolio",
  "Availability",
  "Bookings",
];

const bookings = [
  {
    client: "Sarah Johnson",
    service: "Private Dining",
    date: "Jan 15, 2026",
    status: "confirmed",
    amount: "$850",
  },
  {
    client: "Michael Brown",
    service: "Cooking Class",
    date: "Jan 18, 2026",
    status: "pending",
    amount: "$600",
  },
  {
    client: "Emily Davis",
    service: "Meal Prep",
    date: "Jan 20, 2026",
    status: "confirmed",
    amount: "$500",
  },
];

const quickActions = [
  { label: "Update Availability", icon: CalendarDays },
  { label: "View Messages", icon: MessageSquare },
  { label: "Add New Service", icon: Plus },
  { label: "Upload Photos", icon: Upload },
  { label: "View Analytics", icon: BarChart3 },
];

export default function ChefPersonal() {
  const { id } = useParams();
  const chef =
    featuredChefs.find((item) => item.id === id) ??
    featuredChefs.find((item) => item.id === "2");

  if (!chef) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
        <ChefHat className="mb-4 size-12 text-primary" />
        <h1 className="text-4xl">Chef profile unavailable</h1>
        <Button asChild className="mt-6">
          <Link to="/chefs">Back to Chefs</Link>
        </Button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="relative size-24 shrink-0 overflow-hidden rounded-full border-4 border-muted bg-card shadow-soft">
              <img
                src={chef.imageUrl}
                alt={chef.name}
                className="h-full w-full object-cover"
              />
              <span className="absolute bottom-1 right-0 flex size-5 items-center justify-center rounded-full border border-background bg-card">
                <Camera className="size-3 text-foreground" />
              </span>
            </div>

            <div>
              <h1 className="text-4xl leading-none">{chef.name}</h1>
              <p className="mt-3 flex items-center gap-2 text-base">
                <MapPin className="size-4" />
                {chef.location}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1.5 text-base">
                  <Star className="size-4 fill-foreground text-foreground" />
                  {chef.rating} ({chef.reviewCount} reviews)
                </span>
                <Badge
                  variant="outline"
                  className="border-border bg-card px-3 py-1 text-xs"
                >
                  Contemporary Asian Fusion
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" className="h-9 bg-card px-5">
              <Link to={`/chef/${chef.id}`}>
                <Eye className="size-4" />
                View Public Profile
              </Link>
            </Button>
            <Button variant="outline" className="h-9 bg-card px-5">
              <Bell className="size-4" />
              Notifications
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-12 bg-card"
              aria-label="Settings"
            >
              <Settings className="size-4" />
            </Button>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <Metric value="89" label="Total Bookings" />
          <Metric value="5" label="Pending Requests" />
          <Metric value="$12,450" label="This Month" />
          <Metric value="342" label="Profile Views" />
          <Metric value="98%" label="Response Rate" />
          <Metric value="45%" label="Repeat Clients" />
        </div>
      </section>

      <section className="border-b border-border px-4 py-12 sm:px-6 lg:px-8">
        <nav className="flex gap-1 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={cn(
                "h-10 shrink-0 rounded-md px-3 text-sm text-muted-foreground transition-colors hover:text-foreground",
                tab === "Overview" && "bg-card text-foreground shadow-sm",
              )}
            >
              {tab}
            </button>
          ))}
        </nav>
      </section>

      <section className="grid gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_416px] lg:px-8">
        <Card className="rounded-lg py-0 shadow-soft">
          <CardContent className="p-6">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-3xl leading-none">Recent Bookings</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Your latest service requests
                </p>
              </div>
              <Button
                variant="outline"
                className="h-9 border-2 border-primary px-4 text-primary"
              >
                View All
              </Button>
            </div>

            <div className="divide-y divide-border">
              {bookings.map((booking) => (
                <div
                  key={booking.client}
                  className="grid gap-3 py-5 sm:grid-cols-[1fr_auto_auto] sm:items-center"
                >
                  <div>
                    <h3 className="font-medium">{booking.client}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {booking.service} <span className="mx-1">•</span>{" "}
                      {booking.date}
                    </p>
                  </div>
                  <StatusBadge status={booking.status} />
                  <p className="font-semibold">{booking.amount}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-lg py-0 shadow-soft">
          <CardContent className="p-6">
            <h2 className="mb-6 text-3xl leading-none">Quick Actions</h2>
            <div className="space-y-3">
              {quickActions.map((action) => (
                <Button
                  key={action.label}
                  variant="outline"
                  className="h-12 w-full justify-start border-2 border-primary bg-card px-6 text-primary"
                >
                  <action.icon className="size-4" />
                  {action.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <Card className="rounded-lg py-0 shadow-soft">
          <CardContent className="grid gap-5 p-6 sm:grid-cols-[48px_1fr_auto] sm:items-center">
            <div className="flex size-12 items-center justify-center">
              <TrendingUp className="size-6" />
            </div>
            <div>
              <h2 className="text-xl">Boost Your Profile</h2>
              <p className="mt-3 text-muted-foreground">
                Add more portfolio photos to increase bookings by up to 40%.
                Profiles with 6+ photos get significantly more inquiries.
              </p>
              <Button className="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Upload Photos
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <Card className="rounded-lg py-0 shadow-none">
      <CardContent className="p-5 text-center">
        <p className="text-3xl font-bold leading-none">{value}</p>
        <p className="mt-2 text-sm text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  );
}

function StatusBadge({ status }: { status: string }) {
  const isPending = status === "pending";

  return (
    <Badge
      className={cn(
        "justify-self-start border-transparent px-3 py-1 text-xs capitalize sm:justify-self-end",
        isPending
          ? "bg-secondary text-secondary-foreground"
          : "bg-primary text-primary-foreground",
      )}
    >
      {status}
    </Badge>
  );
}
