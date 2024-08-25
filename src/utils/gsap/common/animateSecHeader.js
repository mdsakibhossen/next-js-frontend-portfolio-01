import { bottomToTop, scroller } from "../transformAnim";

export const animateSecHeader = (trigger)=>{
    const tl = scroller(trigger, {
        start: "top 80%",
        end: "top 30%",
    });
    bottomToTop(tl, trigger, {
        stagger: 0.15,
    });
}