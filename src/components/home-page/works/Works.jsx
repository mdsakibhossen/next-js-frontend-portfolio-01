"use client";
import ScrollingIndicator from "@/components/scrolling-indicator/ScrollingIndicator";
import SecContainer from "@/components/sec-container/SecContainer";
import SecHeader from "@/components/sec-header/SecHeader";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import "./works.css";

// import required modules
// import { Pagination, Navigation } from "swiper/modules";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { animateScrollIndicator } from "@/utils/gsap/home-page/animateScrollIndicator";
import { animateSecHeader } from "@/utils/gsap/common/animateSecHeader";
import { animateWorks } from "@/utils/gsap/home-page/animateWorks";

const Works = () => {
  useGSAP(() => {
    animateScrollIndicator(".works .top-inidicator");
    animateSecHeader(
      ".works .sec-header .title, .works .sec-header .sub-title"
    );
    animateWorks();
  }, []);
  return (
    <SecContainer classes="works overflow-hidden bg-black/90 py-20 min-h-screen">
      <div className="top-inidicator mb-10">
        <ScrollingIndicator />
      </div>
      <div className="header text-white/70">
        <SecHeader
          title={"Works"}
          subTitle={"I am striving to never stop learning and improving"}
        />
      </div>
      <div className="content max-w-[1000px] mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card w-full sm:px-16 flex justify-center items-center">
              <div className="img-box group w-full h-[300px] md:h-[450px] relative after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black after:opacity-0 after:transition-all after:duration-300 hover:after:opacity-80">
                <div className="view-link absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] scale-0 transition-all duration-300 group-hover:scale-100 md:text-4xl delay-200 z-30">
                  <Link
                    href={"/"}
                    className="text-primary font-medium"
                    data-abc={true}
                  >
                    View Website
                  </Link>
                </div>
                <Image
                  src={
                    "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt={"Image"}
                  width={1000}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-full sm:px-16 flex justify-center items-center">
              <div className="img-box group w-full h-[300px] md:h-[450px] relative after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black after:opacity-0 after:transition-all after:duration-300 hover:after:opacity-80">
                <div className="view-link absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] scale-0 transition-all duration-300 group-hover:scale-100 md:text-4xl delay-200 z-30">
                  <Link
                    href={"/"}
                    className="text-primary font-medium"
                    data-abc={true}
                  >
                    View Website
                  </Link>
                </div>
                <Image
                  src={
                    "https://images.pexels.com/photos/935743/pexels-photo-935743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt={"Image"}
                  width={1000}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-full sm:px-16 flex justify-center items-center">
              <div className="img-box group w-full h-[300px] md:h-[450px] relative after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black after:opacity-0 after:transition-all after:duration-300 hover:after:opacity-80">
                <div className="view-link absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] scale-0 transition-all duration-300 group-hover:scale-100 md:text-4xl delay-200 z-30">
                  <Link
                    href={"/"}
                    className="text-primary font-medium"
                    data-abc={true}
                  >
                    View Website
                  </Link>
                </div>
                <Image
                  src={
                    "https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg"
                  }
                  alt={"Image"}
                  width={1000}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </SecContainer>
  );
};

export default Works;
