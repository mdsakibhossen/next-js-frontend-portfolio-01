"use client";

import SecContainer from "@/components/sec-container/SecContainer";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import ScrollingIndicator from "@/components/scrolling-indicator/ScrollingIndicator";
import { animateScrollIndicator } from "@/utils/gsap/home-page/animateScrollIndicator";
import { animateImage, animateText } from "@/utils/gsap/home-page/animateAbout";

const About = () => {
  useGSAP(() => {
    animateScrollIndicator(".about .top-inidicator");
    animateText();
    animateImage();
  }, []);

  return (
    <SecContainer classes="about min-h-screen w-full bg-black/90 py-20 overflow-hidden">
      <div className="top-inidicator mb-10">
        <ScrollingIndicator />
      </div>
      <div className="flex flex-col justify-between lg:flex-row gap-20">
        <div className="text">
          <h2 className="heading text-white border-2 border-primary rounded-tl-[2rem] rounded-br-[2rem] text-2xl lg:text-4xl inline-block max-w-max px-8 py-2 mb-5">
            About Me
          </h2>
          <div className="sub-heading max-w-[800px] p-8 bg-slate-600 rounded-[2rem]">
            <code className="text-sm text-primary italic inline-block">
              {"<p>"}
            </code>
            <div className="font-light">
              <h3 className="text-xl text-primary">Hello! </h3>
              <p className="text-white/60">
                My name is Sinan and I specialize in web developement that
                utilizes <span className="text-primary">HTML</span>,{" "}
                <span className="text-primary">CSS</span> ,{" "}
                <span className="text-primary">JS</span> , and{" "}
                <span className="text-primary">REACT</span> etc. I am a highly
                motivated individual and eternal optimist dedicated to writing
                clear, concise, robust code that works. Striving to never stop
                learning and improving. When I'm not coding, I am writing bolgs,
                reading, or picking up some new hands-on art project like
                photography. I like to have my perspective and belief systems
                challenged so that I see the world through new eyes.
              </p>
            </div>
            <code className="text-sm text-primary italic inline-block">
              {"</p>"}
            </code>
          </div>
        </div>
        <div className="img-box rounded-2xl overflow-hidden">
          <Image
            className="w-full h-full"
            src={
              "https://images.pexels.com/photos/4103247/pexels-photo-4103247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="About Pic"
            width={600}
            height={600}
          />
        </div>
      </div>
    </SecContainer>
  );
};

export default About;
