import { bottomToTop, leftToRight, rightToLeft, scroller, smallToLarge } from "../transformAnim";

export const animateText = () => {
    const tl = scroller(".about .text", {
        start: "top 60%",
        end: "top 30%",
    });

    leftToRight(tl, ".about .text");
    leftToRight(tl, ".about .text .heading");
    smallToLarge(tl, ".about .text .sub-heading code:nth-child(1)");
    bottomToTop(tl, ".about .text .sub-heading div:nth-child(2)", {
        stagger: 0.15,
    });
    smallToLarge(tl, ".about .text .sub-heading code:nth-child(3)");
}

export const animateImage = () => {
    const tl = scroller(".about .img-box", {
        start: "top 60%",
        end: "top 30%",
    });
    rightToLeft(tl, ".about .img-box", { scale: 2 });
}