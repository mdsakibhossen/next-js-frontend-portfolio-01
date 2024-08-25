import { scroller, smallToLarge } from "../transformAnim";

export const animateWorks = () => {
    const tl = scroller(".works .content", {
        start: "top 80%",
        end: "top 30%",
    });
    smallToLarge(tl, ".works .content");
}