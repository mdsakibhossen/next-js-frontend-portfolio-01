"use client";
import Logo from "./logo/Logo";
import Nav from "./nav/Nav";
import SearchBar from "./search-bar/SearchBar";
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import SocialLinks from "./social-links/SocialLinks";
// import MenuButton from "./menu-button/MenuButton";
// import MobileNav from "./mobile-nav/MobileNav";
import gsap from "gsap";
import StaggerAnim from "../gsap/StaggerAnim";
import { bottomToTop, smallToLarge } from "@/utils/gsap/transformAnim";
import Anim from "../gsap/Anim";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Header = () => {
  const tl = gsap.timeline();
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  
  useEffect(() => {
    const scrollHandler = () => {
      scrollY > 50 ? setIsHeaderActive(true) : setIsHeaderActive(false);
    };
    window.addEventListener("scroll",scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [isHeaderActive]);



  return (
    <header
      id="header"
      className="bg-secondary text-white fixed top-0 w-full z-50"
    >
      <div
        className={`container mx-auto px-3 flex justify-between items-center border-b border-b-white/10 transition-all duration-300 ${
          isHeaderActive ? "py-4" : "py-8"
        }`}
      >
        {/* Logo */}
        <Anim obj={tl} animate={smallToLarge} options={{ delay: 0.25 }}>
          <Logo />
        </Anim>
        {/* Menu Button */}
        {/* <MenuButton /> */}
        {/* <MobileNav/> */}
        {/* Navbar */}
        <div className="nav-bar flex items-center gap-4 sm:gap-8 font-light">
          {/* Nav */}
          <StaggerAnim
            obj={tl}
            animate={bottomToTop}
            staggerSelector="nav .nav-link"
          >
            <Nav />
          </StaggerAnim>
          {/* Search Bar */}
          <Anim obj={tl} animate={bottomToTop}>
            <div className="hidden lg:block">
              <SearchBar />
            </div>
            <button
              onClick={() => setSearchBarOpen(!searchBarOpen)}
              className="p-2 lg:hidden"
            >
              {!searchBarOpen ? <IoSearch /> : <IoMdClose />}
            </button>
          </Anim>

          {/* Social Links */}
          <StaggerAnim
            obj={tl}
            animate={bottomToTop}
            staggerSelector="#header .social-link"
          >
            <SocialLinks />
          </StaggerAnim>
        </div>
        <div
          className={`absolute top-[50%] right-16 translate-y-[-50%] flex justify-end items-center w-full h-full bg-secondary transition-all duration-300 origin-right ${
            searchBarOpen ? "scale-x-100" : "scale-x-0"
          }`}
        >
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
