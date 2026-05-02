import { Link } from "react-router";
import Logo from "../assets/chefnest.png";
import SignupForm from "@/components/forms/SignupForm";

export default function Signup() {
  return (
    <section className="min-h-100 flex flex-col justify-center items-center">
      <div className="px-10">
        <Link to="/" className="flex items-center justify-center gap-2">
          <img src={Logo} className="w-15 h-15" alt="Logo" />
          <h1 className="text-3xl text-primary font-extrabold">Chefnest</h1>
        </Link>
        <div className="text-center">
          <h1 className="text-3xl mb-3">Create your account</h1>
          <p className="text-foreground/80">
            Start your culinary journey today
          </p>
        </div>
        <div className="">
          <SignupForm />
        </div>
      </div>
    </section>
  );
}
