"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

const StaggerAnim = ({ obj=gsap, animate, staggerSelector, options={}, children }) => {

  useGSAP(() => {
    animate(obj, staggerSelector, { stagger: 0.15, ...options });
  }, []);
  return (
    <div className="gsap-stagger-anim">
      {children}
    </div>
  );
};

export default StaggerAnim;
