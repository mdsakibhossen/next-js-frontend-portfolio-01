import { bottomToTop, leftToRight, rightToLeft, scroller, smallToLarge } from "../transformAnim";

export const animateBlogCardImage = (trigger) => {
    const tl = scroller(trigger, {
        start: "top 80%",
        end: "top 30%",
    });
    smallToLarge(tl, trigger);
}
export const animateBlogCardText = (trigger) => {
    const tl = scroller(trigger, {
        start: "top 80%",
        end: "top 30%",
    });
    bottomToTop(tl, `${trigger} h3,${trigger} p, ${trigger} a,${trigger} .profession,${trigger} .name,${trigger} .date,${trigger} .reading-time`,{stagger:.15});
}

export const animateBlogButton = ()=>{
    const tl = scroller(".blogs .btn-box", {
        start: "top 80%",
        end: "top 30%",
    });
    leftToRight(tl, ".blogs .btn-box .btn-1");
    rightToLeft(tl, ".blogs .btn-box .btn-2");
}