import { Link } from "react-router";
import Logo from "../../assets/chefnest.png";
import Icon from "../icon";

export default function Footer() {
  return (
    <section className="px-10 mt-20 py-15 bg-foreground text-primary-foreground/80">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-12 pr-50">
        <div className="flex flex-col gap-4 max-w-80">
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} className="w-15 h-15" alt="Logo" />
            <h1 className="text-2xl font-extrabold">Chefnest</h1>
          </Link>
          <p className="">
            Connecting culinary talent with those who appreciate exceptional
            dining experiences.
          </p>
          <div className="flex gap-2">
            <Icon name="Instagram" />
            <Icon name="Facebook" />
            <Icon name="Twitter" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl  font-bold">For Clients</h1>
          <ul className="text-sm flex flex-col gap-2">
            <Link to="">
              <li>Find a Chef</li>
            </Link>
            <Link to="">
              <li>How It Works</li>
            </Link>
            <Link to="">
              <li>Services</li>
            </Link>
            <Link to="">
              <li>Pricing</li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">For Chefs</h1>
          <ul className="text-sm flex flex-col gap-2">
            <Link to="">
              <li>Join as Chef</li>
            </Link>
            <Link to="">
              <li>Chef Resources</li>
            </Link>
            <Link to="">
              <li>Success Stories</li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Company</h1>
          <ul className="text-sm flex flex-col gap-2">
            <Link to="">
              <li>About Us</li>
            </Link>
            <Link to="">
              <li>Contact</li>
            </Link>
            <Link to="">
              <li>Privacy Policy</li>
            </Link>
            <Link to="">
              <li>Terms of Service</li>
            </Link>
          </ul>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-primary-foreground/50 font-body text-sm">
          © {new Date().getFullYear()} ChefConnect. All rights reserved.
        </p>
        <p className="text-primary-foreground/50 font-body text-sm">
          Crafted with passion for culinary excellence
        </p>
      </div>
    </section>
  );
}
