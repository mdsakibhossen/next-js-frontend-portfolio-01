import { bottomToTop, scroller } from "../transformAnim";

export const animateFooter = ()=>{
    const tl = scroller("footer", {
        start: "top bottom",
        end: "bottom bottom",
        toggleActions: "play none none none",
        once: true
    });
    bottomToTop(tl, "footer .copy-text, footer .rules-text a, footer .icons .icon, footer .creator-text",{stagger:.15});
}