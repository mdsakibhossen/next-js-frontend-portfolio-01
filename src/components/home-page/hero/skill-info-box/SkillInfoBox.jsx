"use client";

import { animateSkillsBox } from "@/utils/gsap/home-page/animateHero";
import { useGSAP } from "@gsap/react";

const SkillInfoBox = () => {
  useGSAP(() => {
    animateSkillsBox();
  }, []);
  return (
    <div className="skill-info-box flex flex-col justify-between gap-8 bg-black/60 rounded-[5rem] p-10 max-w-max">
      <div className="single-box flex gap-3 items-center">
        <div className="number text-4xl font-medium text-primary">4</div>
        <div className="text text-white/80 font-light">
          Programming <br /> Language
        </div>
      </div>
      <div className="single-box flex gap-3 items-center">
        <div className="number text-4xl font-medium text-primary">6</div>
        <div className="text text-white/80 font-light">
          Development <br /> Tools
        </div>
      </div>
      <div className="single-box flex gap-3 items-center">
        <div className="number text-4xl font-medium text-primary">8</div>
        <div className="text text-white/80 font-light">
          Years of <br /> Experience
        </div>
      </div>
    </div>
  );
};

export default SkillInfoBox;
