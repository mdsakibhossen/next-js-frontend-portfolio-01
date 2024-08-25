"use client";
import Button from "@/components/button/Button";
import SecContainer from "@/components/sec-container/SecContainer";
import { blogs } from "@/lib/data";
import { animateBlogPage } from "@/utils/gsap/blog-details-page/animateBlog";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { FiShare } from "react-icons/fi";

const BlogDetailsPageComp = ({params}) => {
  // console.log(params,"params");
  const {slug} = params;
  const {title,author,date,readingTime,image,description} = blogs.find(item=>item.slug===slug);
  useGSAP(() => {
    animateBlogPage();
  }, []);
  return (
    <SecContainer classes="single-blog overflow-hidden bg-secondary pt-24 py-10">
      <div className="content mt-16 max-w-[800px] mx-auto text-white/60">
        <h3 className="font-medium text-xl lg:text-3xl text-primary my-5">
          {title}
        </h3>
        <div className="bar border-t border-b border-white/10 py-2 flex flex-wrap items-center  gap-4 justify-between">
          <div className="flex flex-wrap gap-4">
            <div className="flex gap-2 flex-wrap">
              <span className="text-white font-medium">Author</span>
              <span>{author}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-white font-medium">Date</span>
              <span>{date}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-white font-medium">Read</span>
              <span>{readingTime}</span>
            </div>
          </div>
          <div className="share-icon">
            <button className="w-8 h-8 rounded-full bg-primary border-2 border-dotted border-primary flex justify-center items-center text-black transition-all duration-300 hover:bg-transparent hover:text-primary">
              <FiShare />
            </button>
          </div>
        </div>
        <div className="img-box w-full h-[300px] md:h-[400px] mx-auto mt-6 mb-8">
          <Image
            src={image}
            alt={title}
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="description font-light flex flex-col gap-4 mb-5">
          <p>{description}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at
            nesciunt harum omnis eum excepturi eveniet in sunt cupiditate alias
            et nihil nisi, ducimus, laboriosam dolor inventore ipsum sint nemo
            accusamus nobis corporis soluta? Natus illo voluptatibus minus
            molestiae voluptatum! Quibusdam ducimus molestias maxime
            reprehenderit nisi atque aspernatur expedita omnis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at
            nesciunt harum omnis eum excepturi eveniet in sunt cupiditate alias
            et nihil nisi, ducimus, laboriosam dolor inventore ipsum sint nemo
            accusamus nobis corporis soluta? Natus illo voluptatibus minus
            molestiae voluptatum! Quibusdam ducimus molestias maxime
            reprehenderit nisi atque aspernatur expedita omnis! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Corrupti at nesciunt
            harum omnis eum excepturi eveniet in sunt cupiditate alias et nihil
            nisi, ducimus, laboriosam dolor inventore ipsum sint nemo accusamus
            nobis corporis soluta? Natus illo voluptatibus minus molestiae
            voluptatum! Quibusdam ducimus molestias maxime reprehenderit nisi
            atque aspernatur expedita omnis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at
            nesciunt harum omnis eum excepturi eveniet in sunt cupiditate alias
            et nihil nisi, ducimus, laboriosam dolor inventore ipsum sint nemo
            accusamus nobis corporis soluta? Natus illo voluptatibus minus
            molestiae voluptatum! Quibusdam ducimus molestias maxime
            reprehenderit nisi atque aspernatur expedita omnis!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at
            nesciunt harum omnis eum excepturi eveniet in sunt cupiditate alias
            et nihil nisi, ducimus, laboriosam dolor inventore ipsum sint nemo
            accusamus nobis corporis soluta? Natus illo voluptatibus minus
            molestiae voluptatum! Quibusdam ducimus molestias maxime
            reprehenderit nisi atque aspernatur expedita omnis! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Corrupti at nesciunt
            harum omnis eum excepturi eveniet in sunt cupiditate alias et nihil
            nisi, ducimus, laboriosam dolor inventore ipsum sint nemo accusamus
            nobis corporis soluta? Natus illo voluptatibus minus molestiae
            voluptatum! Quibusdam ducimus molestias maxime reprehenderit nisi
            atque aspernatur expedita omnis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at
            nesciunt harum omnis eum excepturi eveniet in sunt cupiditate alias
            et nihil nisi, ducimus, laboriosam dolor inventore ipsum sint nemo
            accusamus nobis corporis soluta? Natus illo voluptatibus minus
            molestiae voluptatum! Quibusdam ducimus molestias maxime
            reprehenderit nisi atque aspernatur expedita omnis! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Corrupti at nesciunt
            harum omnis eum excepturi eveniet in sunt cupiditate alias et nihil
            nisi, ducimus, laboriosam dolor inventore ipsum sint nemo accusamus
            nobis corporis soluta? Natus illo voluptatibus minus molestiae
            voluptatum! Quibusdam ducimus molestias maxime reprehenderit nisi
            atque aspernatur expedita omnis!
          </p>
        </div>
        <div className="bar flex-wrap border-t border-b border-white/10 py-2 flex items-center gap-4 justify-between">
          <div className="flex flex-wrap gap-4">
            <div className="flex gap-2 flex-wrap">
              <span className="text-white font-medium">Author</span>
              <span>{author}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-white font-medium">Date</span>
              <span>{date}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-white font-medium">Read</span>
              <span>{readingTime}</span>
            </div>
          </div>
          <div className="share-icon">
            <button className="w-8 h-8 rounded-full bg-primary border-2 border-dotted border-primary flex justify-center items-center text-black transition-all duration-300 hover:bg-transparent hover:text-primary">
              <FiShare />
            </button>
          </div>
        </div>
        <div className="btn-box text-center mt-6">
          <Button>Subscribe My Blogs</Button>
        </div>
      </div>
    </SecContainer>
  );
};

export default BlogDetailsPageComp;
