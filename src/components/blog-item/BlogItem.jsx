"use client";
import {
  animateBlogCardImage,
  animateBlogCardText,
} from "@/utils/gsap/common/animateBlogCard";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const BlogItem = ({ blog }) => {
  const {
    slug,
    image,
    title,
    description,
    profession,
    author,
    date,
    readingTime,
  } = blog;
  useGSAP(() => {
    animateBlogCardImage(`.blogs .blog-item-${blog.id} .img-box`);
    animateBlogCardText(`.blogs .blog-item-${blog.id} .text`);
  }, []);
  return (
    <div
      className={`blog-item-${blog.id} flex flex-col items-center gap-8 md:flex-row`}
    >
      <div className="img-box flex-1">
        <Link href={`blogs/${slug}`} data-abc={true}>
          <Image
            src={image}
            alt={title}
            width={600}
            height={600}
            className="w-full h-full object-cover"
            priority
          />
        </Link>
      </div>
      <div className="text flex-[2] flex flex-col gap-4 text-white/50 font-light">
        <h3 className="font-medium text-xl lg:text-2xl text-primary">
          {title}
        </h3>
        <p>
          {description.length > 150
            ? description.slice(0, 100) + "..."
            : description}
        </p>

        <Link
          href={`blogs/${slug}`}
          data-abc={true}
          className="text-primary flex gap-1 items-center"
        >
          <span>Read More</span>{" "}
          <span className="mt-0.5 text-lg">
            <MdKeyboardDoubleArrowRight />
          </span>
        </Link>
        <div className="bottom-bar flex gap-4 flex-wrap">
          <div className="profession bg-black/60 rounded-3xl px-3 py-1">
            {profession}
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="name flex items-center gap-2 flex-wrap">
              <strong className="text-white">Author</strong>
              <span>{author}</span>
            </div>
            <div className="date flex items-center gap-2">
              <strong className="text-white">Date</strong>
              <span>{date}</span>
            </div>
            <div className="reading-time flex items-center gap-2">
              <strong className="text-white">Read</strong>
              <span>{readingTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
