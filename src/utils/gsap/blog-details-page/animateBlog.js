import { bottomToTop, largeToSmall, scroller, smallToLarge } from "../transformAnim";

export const animateBlogPage = () => {
    const tl1 = scroller(".single-blog .container .content", {
        start: "top 80%",
        end: "top 30%",
    });
    bottomToTop(tl1, ".single-blog .container .content h3");
    bottomToTop(tl1, ".single-blog .container .content .bar div div",{stagger:.15});
    smallToLarge(tl1, ".single-blog .container .content .bar .share-icon");
    largeToSmall(tl1, ".single-blog .container .content .img-box");
    const tl2 = scroller(".single-blog .container .content .description", {
        start: "top 80%",
        end: "top 30%",
    });
    bottomToTop(tl2, ".single-blog .container .content .description");

    const tl3 = scroller(".single-blog .container .content .btn-box", {
        start: "top 90%",
        end: "bottom bottom",
    });
    smallToLarge(tl3, ".single-blog .container .content .btn-box");
}