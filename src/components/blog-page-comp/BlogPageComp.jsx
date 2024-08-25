"use client";
import BlogItem from "@/components/blog-item/BlogItem";
import Button from "@/components/button/Button";
import SecContainer from "@/components/sec-container/SecContainer";
import SecHeader from "@/components/sec-header/SecHeader";
import { blogs } from "@/lib/data";
import { animateBlogPageButton } from "@/utils/gsap/blog-page/animateBlogs";
import { animateSecHeader } from "@/utils/gsap/common/animateSecHeader";
import { useGSAP } from "@gsap/react";

const BlogsPageComp = () => {
  const allBlogs = blogs;
  useGSAP(() => {
    animateSecHeader(
      ".blogs .sec-header .title, .blogs .sec-header .sub-title"
    );
    animateBlogPageButton();
  }, []);
  return (
    <SecContainer classes="blogs bg-secondary pt-24 py-10">
      <div className="header text-white/70 mt-16">
        <SecHeader
          title={"Blogs"}
          subTitle={"I am striving to never stop learning and improving"}
        />
      </div>
      <div className="btn-box text-center mt-6">
        <Button>Subscribe My Blogs</Button>
      </div>
      <div className="blog-items my-10 border-b border-b-white/60">
        {allBlogs.map((blog) => (
          <div key={blog.id} className="py-6 border-t border-t-white/60">
            <BlogItem blog={blog} />
          </div>
        ))}
      </div>
    </SecContainer>
  );
};

export default BlogsPageComp;
