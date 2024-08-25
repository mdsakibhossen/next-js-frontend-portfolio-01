"use client";
import { animateFooter } from "@/utils/gsap/common/animateFooter";
import { useGSAP } from "@gsap/react";
import Link from "next/link"
import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  useGSAP(() => {
    animateFooter()
  }, []);
  return (
    <footer className="bg-black/95 text-white/80 overflow-hidden">
      <div className="container mx-auto px-3 py-5 flex flex-col gap-4 justify-center items-center lg:flex-row lg:justify-between">
        <div className="icons flex gap-4 lg:order-2">
          <div className="icon">
            <Link
              href={"/"}
              data-abc={true}
              className="w-8 h-8 rounded-full bg-primary border-2 border-dotted border-primary flex justify-center items-center text-black transition-all duration-300 hover:bg-transparent hover:text-primary"
            >
              <FaInstagram />
            </Link>
          </div>
          <div className="icon">
            <Link
              href={"/"}
              data-abc={true}
              className="w-8 h-8 rounded-full bg-primary border-2 border-dotted border-primary flex justify-center items-center text-black transition-all duration-300 hover:bg-transparent hover:text-primary"
            >
              <FaDiscord />
            </Link>
          </div>
          <div className="icon">
            <Link
              href={"/"}
              data-abc={true}
              className="w-8 h-8 rounded-full bg-primary border-2 border-dotted border-primary flex justify-center items-center text-black transition-all duration-300 hover:bg-transparent hover:text-primary"
            >
              <FaGithub />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-10 gap-4 lg:gap-20 xl:gap-32">
          <p className="copy-text text-center">
            &copy; 2023 SinanTokmak. All rights reserved.
          </p>
          <div className="rules-text flex justify-center gap-6">
            <Link href={""} data-abc={true}>
              Privacy Policy
            </Link>
            <Link href={""} data-abc={true}>
              Terms & Conditions
            </Link>
          </div>
        </div>
        <div className="creator-text flex justify-center gap-2 lg:order-3">
          <span>Design By</span>
          <Link
            className="text-primary hover:underline"
            href={""}
            data-abc={true}
          >
            Sakib
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer