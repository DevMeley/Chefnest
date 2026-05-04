import { Link } from "react-router";
import Icon from "../icon";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SignupForm() {
  return (
    <div className="pt-5 flex flex-col gap-8">
      <p>I want to join as a...</p>
      {/* selection buttons */}
      <div className="flex justify-between gap-5">
        <div className="">
          <Button
            type="button"
            variant="outline"
            className=" h-40 flex flex-col hover:text-black"
            size="lg"
          >
            <div className="h-16 w-16 rounded-full flex items-center justify-center">
              <Icon name="Users" className="text-primary w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <h1 className="">Client</h1>
              <p className="">Find & book a chef</p>
            </div>
          </Button>
        </div>
        <div className="">
          <Button
            type="button"
            variant="outline"
            className="h-40 flex flex-col hover:text-black"
            size="lg"
          >
            <div className="h-16 w-16 rounded-full flex items-center justify-center">
              <Icon name="ChefHat" className="text-primary w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <h1 className="">Chef</h1>
              <p className="">Offer your service</p>
            </div>
          </Button>
        </div>
      </div>
      {/* form field */}
      <form className="space-y-6">
        <div className="space-y-3">
          <label htmlFor="text">Fullname</label>
          <Input type="text" placeholder="Fullname" className="h-10" />
        </div>
        <div className="space-y-2">
          <label htmlFor="text">Email</label>
          <Input type="email" placeholder="Email" className="h-10" />
        </div>
        <div className="space-y-2">
          <label htmlFor="Password">Fullname</label>
          <Input type="password" placeholder="Password" className="h-10" />
          <p className="text-sm">
            Must be at least 8 characters with a number and symbol
          </p>
        </div>
        <div className="flex justify-between gap-4">
          <Input type="checkbox" className="size-5" />
          <p className="text-sm">
            I agree to the{" "}
            <Link to="" className="text-red-900">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="" className="text-red-900">
              Privacy Policy
            </Link>
          </p>
        </div>
        <Button size="lg" className="w-full h-10">
          Create account
        </Button>
      </form>
      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-cream-200" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-background text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" size="lg" className="w-full">Google</Button>
      <div className="text-center">Aready have an account?<span className="text-red-900"> Sign in</span></div>
    </div>
  );
}
