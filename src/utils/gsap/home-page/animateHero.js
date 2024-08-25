import { scroller, topToBottom, leftToRight, smallToLarge, bottomToTop, largeToSmall, rightToLeft } from "../transformAnim";

export const animateInfoBox = () => {
  const tl = scroller(".hero .info__box");

  topToBottom(tl, ".hero .hero__title");
  leftToRight(tl, ".hero .info__box");
  smallToLarge(tl, ".hero .info__box .img-box");
  bottomToTop(
    tl,
    ".hero .info__box .info h4,.hero .info__box .info p",
    { stagger: 0.15 }
  );
  bottomToTop(tl, ".hero .info__box .links .link", { stagger: 0.15 });
  bottomToTop(tl, ".hero .info__box .skills span", { stagger: 0.15 });
  largeToSmall(tl, ".hero .info__box .btn-box");
}



export const animateHeadingBox = () => {
  const tl = scroller(".hero .heading-box");

  bottomToTop(tl, ".hero .heading-box");
  smallToLarge(
    tl,
    ".hero .heading-box .main-heading code:nth-child(1)"
  );
  bottomToTop(
    tl,
    ".hero .heading-box .main-heading h1:nth-child(2)"
  );
  bottomToTop(
    tl,
    ".hero .heading-box .main-heading h1:nth-child(3)"
  );
  largeToSmall(
    tl,
    ".hero .heading-box .main-heading h1:nth-child(3) span",
    { stagger: 0.1 }
  );
  bottomToTop(
    tl,
    ".hero .heading-box .main-heading h1:nth-child(4)"
  );
  smallToLarge(
    tl,
    ".hero .heading-box .main-heading code:nth-child(5)"
  );

  smallToLarge(
    tl,
    ".hero .heading-box .sub-heading code:nth-child(1)"
  );
  bottomToTop(tl, ".hero .heading-box .sub-heading div pre", {
    stagger: 0.05,
    duration: 0.05,
  });
  smallToLarge(
    tl,
    ".hero .heading-box .sub-heading code:nth-child(3)"
  );

  leftToRight(tl, ".hero .heading-box .btn-box");
}

export const animateSkillsBox = () => {
  const tl = scroller(".hero .skill-info-box");

  rightToLeft(tl, ".hero .skill-info-box");
  bottomToTop(tl, ".hero .skill-info-box .single-box", {
    stagger: 0.25,
  });
}