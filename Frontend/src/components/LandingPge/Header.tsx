import { Link } from "react-router";
import Logo from "../../assets/chefnest.png";
import { Button } from "../ui/button";
import Icon from "../icon";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-10 py-5 bg-background/80 backdrop-blur-md">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} className="w-15 h-15" alt="Logo" />
          <h1 className="text-2xl text-primary font-extrabold">Chefnest</h1>
        </Link>
        <ul className="hidden lg:flex justify-between gap-8 text-primary/50">
          <li className=" hover:text-primary transition-colors font-medium">
            Find a chef
          </li>
          <li className=" hover:text-primary transition-colors font-medium">
            How is work
          </li>
          <li className=" hover:text-primary transition-colors font-medium">
            Service
          </li>
        </ul>
        <div className="hidden lg:flex justify-between gap-6">
          <Button variant="link" size="lg">
            Sign in
          </Button>
          <Button variant="default" size="lg">
            Sign up
          </Button>
        </div>
        <span
          className="lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {menuOpen ? <Icon name="closeMenu" /> : <Icon name="Menu" />}
        </span>
      </div>
      {menuOpen && (
        <div className="absolute z-50 w-full left-0 top-full flex flex-col gap-20 px-5 py-10 bg-background/90 backdrop-blur-md animate-fade-in">
          <ul className="flex flex-col justify-between gap-8 text-primary/50 px-10 cursor-pointer">
            <li className=" hover:text-primary transition-colors font-medium">
              Find a chef
            </li>
            <li className=" hover:text-primary transition-colors font-medium">
              How is work
            </li>
            <li className=" hover:text-primary transition-colors font-medium">
              Service
            </li>
          </ul>
          <div className="flex flex-col justify-between gap-6">
            <Button variant="link" size="lg">
              Sign in
            </Button>
            <Button variant="default" size="lg">
              Sign up
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
