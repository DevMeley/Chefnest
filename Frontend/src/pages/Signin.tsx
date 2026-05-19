import { type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Logo from "../assets/chefnest.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Signin() {
  const navigate = useNavigate();
  const location = useLocation();
  const from =
    (location.state as { from?: { pathname?: string } } | null)?.from
      ?.pathname ?? "/chef-personal/2";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    localStorage.setItem("chefnest-auth", "true");
    navigate(from, { replace: true });
  }

  return (
    <section className="min-h-100 py-10 flex flex-col justify-center items-center">
      <div className="px-10 w-full max-w-lg">
        <Link to="/" className="flex items-center justify-center gap-2">
          <img src={Logo} className="w-15 h-15" alt="Logo" />
          <h1 className="text-3xl text-primary font-extrabold">Chefnest</h1>
        </Link>
        <div className="text-center">
          <h1 className="text-3xl mb-3">Welcome back</h1>
          <p className="text-foreground/80">
            Sign in to continue your culinary journey
          </p>
        </div>

        <div className="pt-5 flex flex-col gap-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                className="h-10"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-4">
                <label htmlFor="password">Password</label>
                <Link to="" className="text-sm text-red-900">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                className="h-10"
              />
            </div>
            <div className="flex items-center gap-3">
              <Input id="remember" type="checkbox" className="size-5" />
              <label htmlFor="remember" className="text-sm">
                Remember me
              </label>
            </div>
            <Button size="lg" className="w-full h-10">
              Sign in
            </Button>
          </form>

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

          <Button variant="outline" size="lg" className="w-full">
            Google
          </Button>
          <div className="text-center">
            Don&apos;t have an account?
            <Link to="/signup" className="text-red-900">
              {" "}
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
