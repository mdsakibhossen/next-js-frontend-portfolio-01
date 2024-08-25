"use client";
import { animateHeadingBox } from "@/utils/gsap/home-page/animateHero";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";

const HeadingBox = () => {
  useGSAP(()=>{
    animateHeadingBox()
  },[])
  return (
    <div className="heading-box flex flex-col gap-5">
      <div className="main-heading text-4xl sm:text-5xl">
        <code className="text-sm text-primary italic inline-block">
          {"<h1>"}
        </code>
        <h1>Hey</h1>
        <h1 className="mt-3">
          I’m{" "}
          <div className="text-primary inline-block">
            {"Sinan,".split("").map((char, i) => (
              <span key={i} className="inline-block">
                {char}
              </span>
            ))}
          </div>
        </h1>
        <h1 className="inline-block me-3 mt-3 text-2xl sm:text-4xl xl:text-5xl">
          Full-stack developer
        </h1>
        <code className="text-sm text-primary italic inline-block">
          {"</h1>"}
        </code>
      </div>
      <div className="sub-heading">
        <code className="text-sm text-primary italic inline-block">
          {"<p>"}
        </code>
        <div className="font-light">
          {"I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done"
            .split("")
            .map((char, i) => (
              <pre key={i} className="inline-block text-white/60">
                {char}
              </pre>
            ))}
        </div>
        <code className="text-sm text-primary italic inline-block">
          {"</p>"}
        </code>
      </div>
      <div className="btn-box">
        <Link
          href="mailto:"
          data-abc={true}
          className="text-primary flex gap-2 items-center"
        >
          <span className="text-xl">Let's Talk</span>
          <span className="w-6 h-6 rounded-full bg-slate-700 flex justify-center items-center">
            <MdOutlineMail />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HeadingBox;
