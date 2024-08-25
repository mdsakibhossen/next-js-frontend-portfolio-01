import Link from "next/link";
import NavLink from "../nav/nav-link/NavLink";
import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa";

const MobileNav = () => {
  return (
    <div className="nav-wrapper p-8 fixed top-0 left-0 w-full h-full z-40 bg-black/90 origin-left flex flex-col justify-center gap-8">
      <nav className="mobile-nav flex flex-col gap-6 text-2xl text-center">
        <NavLink href={"/"}>Home</NavLink>
        <NavLink href={"/blogs"}>Blogs</NavLink>
      </nav>
      <div className="social-links flex gap-5 text-lg justify-center">
        <Link
          href={"/"}
          data-abc={true}
          className="transition-all duration-300 hover:text-primary"
        >
          <FaInstagram />
        </Link>

        <Link
          href={"/"}
          data-abc={true}
          className="transition-all duration-300 hover:text-primary"
        >
          <FaDiscord />
        </Link>

        <Link
          href={"/"}
          data-abc={true}
          className="transition-all duration-300 hover:text-primary"
        >
          <FaGithub />
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
