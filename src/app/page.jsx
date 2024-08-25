import About from "@/components/home-page/about/About";
import Blogs from "@/components/home-page/blogs/Blogs";
import Contact from "@/components/home-page/contact/Contact";
import Hero from "@/components/home-page/hero/Hero";
import Skills from "@/components/home-page/skills/Skills";
import Works from "@/components/home-page/works/Works";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Works />
      <Blogs />
      <Contact />
    </>
  );
};

export default HomePage;
