import { Link } from "react-router";
import Icon from "../icon";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SignupForm() {
  return (
    <form className="pt-5 flex flex-col gap-5">
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
      <form className="space-y-5">
        <div className="space-y-2">
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
          <p className="text-sm">Must be at least 8 characters with a number and symbol</p>
        </div>
        <div className="flex justify-between">
          <Input type="checkbox"className=""/>
          <div className="">
            <p className="">
              I agree to the <Link to="">Terms of Service</Link> and <Link to="">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </form>
    </form>
  );
}
