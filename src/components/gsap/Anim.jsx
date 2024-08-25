"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

const Anim = ({obj={gsap},animate,options={},children}) => {
    const ref = useRef(null);

    useGSAP(() => {
      animate(obj, ref.current, options);
    }, []);
  return (
    <div ref={ref} className="gsap-anim">
      <div>{children}</div>
    </div>
  );
}

export default Anim