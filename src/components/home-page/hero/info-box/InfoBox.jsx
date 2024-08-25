"use client";
import ProfilePic from "../../../../../public/images/profile-pic.jpg";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineEmail, MdOutlineFileDownload } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { SiFreelancer } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import { useGSAP } from "@gsap/react";
import { animateInfoBox } from "@/utils/gsap/home-page/animateHero";

const InfoBox = () => {
  useGSAP(()=>{
    animateInfoBox()
  },[])
  return (
    <div className="info__box max-w-[320px] sm:max-w-max px-8 pt-10 pb-16 rounded-tl-[10rem] rounded-br-[10rem] shadow-[-3px_-3px_2px_1px_#12F7D6] border-4">
      <div className="img-box w-24 h-24 rounded-full overflow-hidden mb-3 mx-auto cursor-pointer">
        <Image src={ProfilePic} alt="Profile Pic" priority />
      </div>
      <div className="info text-center">
        <h4 className="text-lg">Sinan</h4>
        <p className="text-sm text-white/70 font-light">Full-stack developer</p>
      </div>
      <div className="links flex flex-col gap-1 mt-5 text-white/70 font-[300]">
        <div className="link">
          <Link
            className="flex gap-3 items-center transition-all duration-300 hover:text-primary"
            href={"mailto:abdurrahman_sinan@hotmail.com"}
            data-abc={true}
          >
            <span>
              <MdOutlineEmail />
            </span>{" "}
            <span>abdurrahman_sinan@hotmail.com</span>{" "}
          </Link>
        </div>
        <div className="link">
          <Link
            className="flex gap-3 items-center transition-all duration-300 hover:text-primary"
            href={"/"}
            data-abc={true}
          >
            <span>
              <IoLocationOutline />
            </span>{" "}
            <span>Turkey</span>{" "}
          </Link>
        </div>
        <div className="link">
          <div className="flex gap-3 items-center transition-all duration-300 hover:text-primary">
            <span>
              <SiFreelancer />
            </span>{" "}
            <span>Full-time / Freelancer</span>{" "}
          </div>
        </div>
        <div className="link">
          <Link
            className="flex gap-3 items-center transition-all duration-300 hover:text-primary"
            href={"https://sinantokmak.com"}
            data-abc={true}
          >
            <span>
              <TbWorld />
            </span>{" "}
            <span>sinantokmak.com</span>{" "}
          </Link>
        </div>
      </div>
      <div className="skills flex justify-between gap-3 mt-3 text-black/90">
        <span className="px-4 text-sm py-0.5 rounded-3xl bg-primary">HTML</span>
        <span className="px-4 text-sm py-0.5 rounded-3xl bg-primary">CSS</span>
        <span className="px-4 text-sm py-0.5 rounded-3xl bg-primary">JS</span>
        <span className="px-4 text-sm py-0.5 rounded-3xl bg-primary">
          React
        </span>
      </div>
      <div className="btn-box mt-5 ">
        <button className="px-5 py-2 bg-white text-black rounded-3xl flex gap-2 justify-center items-center w-full transition-all duration-300 hover:bg-primary">
          <span>Download CV</span>{" "}
          <span className="text-lg">
            <MdOutlineFileDownload />
          </span>
        </button>
      </div>
    </div>
  );
};

export default InfoBox;
