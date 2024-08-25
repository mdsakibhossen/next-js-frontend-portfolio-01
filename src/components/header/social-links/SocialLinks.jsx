import Link from "next/link";
import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {

  return (
    <div className="social-links hidden sm:flex items-center gap-6">
      <div className="social-link">
        <Link
          href={"/"}
          data-abc={true}
          className="flex gap-3 items-center transition-all duration-300 hover:text-primary"
        >
          <span className="icon text-primary">
            <FaInstagram />
          </span>
          <span className="hidden lg:block">Instagram</span>
        </Link>
      </div>

      <div className="social-link">
        <Link
          href={"/"}
          data-abc={true}
          className="flex gap-3 items-center transition-all duration-300 hover:text-primary"
        >
          <span className="icon text-primary">
            <FaDiscord />
          </span>
          <span className="hidden lg:block">Discord</span>
        </Link>
      </div>

      <div className="social-link">
        <Link
          href={"/"}
          data-abc={true}
          className="flex gap-3 items-center transition-all duration-300 hover:text-primary"
        >
          <span className="icon text-primary">
            <FaGithub />
          </span>
          <span className="hidden lg:block">Github</span>
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;
