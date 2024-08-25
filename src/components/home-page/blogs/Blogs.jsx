"use client";
import BlogItem from "@/components/blog-item/BlogItem";
import Button from "@/components/button/Button";
import ScrollingIndicator from "@/components/scrolling-indicator/ScrollingIndicator";
import SecContainer from "@/components/sec-container/SecContainer";
import SecHeader from "@/components/sec-header/SecHeader";
import { blogs } from "@/lib/data";
import {
  animateBlogButton,
  animateBlogCardImage,
  animateBlogCardText,
} from "@/utils/gsap/common/animateBlogCard";
import { animateSecHeader } from "@/utils/gsap/common/animateSecHeader";
import { animateScrollIndicator } from "@/utils/gsap/home-page/animateScrollIndicator";
import { useGSAP } from "@gsap/react";

const Blogs = () => {
  useGSAP(() => {
    animateScrollIndicator(".blogs .top-inidicator");
    animateSecHeader(
      ".blogs .sec-header .title, .blogs .sec-header .sub-title"
    );
    animateBlogButton();
  }, []);
  const blog = blogs[0];
  return (
    <SecContainer classes="blogs bg-secondary py-20 min-h-screen">
      <div className="top-inidicator mb-10">
        <ScrollingIndicator />
      </div>
      <div className="header text-white/70">
        <SecHeader
          title={"Blogs"}
          subTitle={"I am striving to never stop learning and improving"}
        />
      </div>
      <div className="content">
        <div className="blog border-t-2 border-b-2 border-white/45 py-6">
          <BlogItem blog={blog} />
        </div>
        <div className="btn-box mt-10 flex flex-wrap justify-center gap-4">
          <div className="btn-1">
            <Button isBgFill={true}>View More</Button>
          </div>
          <div className="btn-2">
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </SecContainer>
  );
};

export default Blogs;
