import SecContainer from "../../sec-container/SecContainer";
import InfoBox from "./info-box/InfoBox";
import HeadingBox from "./heading-box/HeadingBox";
import SkillInfoBox from "./skill-info-box/SkillInfoBox";

const Hero = () => {
  return (
    <SecContainer classes="hero overflow-x-hidden bg-secondary min-h-screen py-20 text-white/95">
      <h1 className="hero__title text-5xl md:text-6xl xl:text-7xl text-center text-primary my-8">
        Developer
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-6 xl:gap-16">
        <InfoBox />
        <div className="flex flex-col items-center md:flex-row gap-10 md:gap-6 xl:gap-10">
          <HeadingBox />
          <SkillInfoBox />
        </div>
      </div>
    </SecContainer>
  );
};

export default Hero;
