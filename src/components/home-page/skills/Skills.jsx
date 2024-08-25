"use client";
import ScrollingIndicator from "@/components/scrolling-indicator/ScrollingIndicator";
import SecContainer from "@/components/sec-container/SecContainer";
import SecHeader from "@/components/sec-header/SecHeader";
import { animateSecHeader } from "@/utils/gsap/common/animateSecHeader";
import { animateScrollIndicator } from "@/utils/gsap/home-page/animateScrollIndicator";
import { animateSkills } from "@/utils/gsap/home-page/animateSkills";
import { useGSAP } from "@gsap/react";
import { FaHtml5, FaLaptopCode, FaNodeJs, FaReact } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa6";

const Skills = () => {
  useGSAP(() => {
    animateScrollIndicator(".skills .top-inidicator");
    animateSecHeader(
      ".skills .sec-header .title, .skills .sec-header .sub-title"
    );
    animateSkills();
  }, []);
  return (
    <SecContainer classes="skills overflow-hidden bg-secondary py-20 min-h-screen">
      <div className="top-inidicator mb-10">
        <ScrollingIndicator />
      </div>
      <div className="header text-white/70">
        <SecHeader
          title={"Skills"}
          subTitle={"I am striving to never stop learning and improving"}
        />
      </div>
      <div className="content max-w-[600px] mx-auto">
        <div className="top flex flex-col gap-5 sm:flex-row justify-evenly">
          <div className="box bg-primary text-black/60 px-5 py-3 flex flex-col items-center rounded relative overflow-hidden before:content-[''] before:w-2 before:h-full before:bg-blue-400 before:absolute before:left-0 before:top-0">
            <div className="icon text-2xl">
              <FaLaptopCode />
            </div>
            <h4 className="font-medium">Web Developement</h4>
            <small>HTML·CSS·JS·REACT</small>
          </div>
          <div className="box bg-primary text-black/60 px-5 py-3 flex flex-col items-center rounded relative overflow-hidden before:content-[''] before:w-2 before:h-full before:bg-blue-400 before:absolute before:left-0 before:top-0">
            <div className="icon text-2xl">
              <IoMdPhonePortrait />
            </div>
            <h4 className="font-medium">App Developement</h4>
            <small>iOS·Android</small>
          </div>
        </div>
        <div className="bottom mt-12 grid grid-cols-2 lg:grid-cols-4 justify-center gap-6">
          <div className="single-box flex flex-col justify-center items-center gap-3">
            <div className="icon w-24 h-24 rounded-full bg-red-500 text-white flex justify-center items-center text-3xl">
              <span>
                <FaHtml5 />
              </span>
            </div>
            <h3 className="text-red-500 text-center">HTML</h3>
          </div>
          <div className="single-box flex flex-col justify-center items-center gap-3">
            <div className="icon w-24 h-24 rounded-full bg-blue-600 text-white flex justify-center items-center text-3xl">
              <span>
                <FaCss3Alt />
              </span>
            </div>
            <h3 className="text-blue-600 text-center">CSS</h3>
          </div>
          <div className="single-box flex flex-col justify-center items-center gap-3">
            <div className="icon w-24 h-24 rounded-full bg-yellow-500 text-white flex justify-center items-center text-3xl">
              <span>
                <FaNodeJs />
              </span>
            </div>
            <h3 className="text-yellow-500 text-center">JS</h3>
          </div>
          <div className="single-box flex flex-col justify-center items-center gap-3">
            <div className="icon w-24 h-24 rounded-full bg-blue-400 text-white flex justify-center items-center text-4xl">
              <span>
                <FaReact />
              </span>
            </div>
            <h3 className="text-blue-300 text-center">REACT</h3>
          </div>
        </div>
      </div>
    </SecContainer>
  );
};

export default Skills;
