import { scroller, smallToLarge } from "../transformAnim";

export const animateBlogPageButton = ()=>{
    const tl = scroller(".blogs .btn-box", {
        start: "top 80%",
        end: "top 30%",
    });
    smallToLarge(tl, ".blogs .btn-box");
}