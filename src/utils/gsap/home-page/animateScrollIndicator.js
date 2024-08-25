import gsap from "gsap";
import { scroller, topToBottom } from "../transformAnim";

export const animateScrollIndicator = (trigger) => {
    const tl = scroller(trigger, {
        start: "top 80%",
        end: "top 30%",
    });

    topToBottom(tl, trigger);

    gsap.fromTo(
        ".scrolling-indicator span",
        {
            opacity: 1,
            y: -2,
            repeat: -1,
            duration: .75
        },
        {
            opacity: 0,
            y: 10,
            repeat: -1,
            duration: 1.25
        }
    );
}