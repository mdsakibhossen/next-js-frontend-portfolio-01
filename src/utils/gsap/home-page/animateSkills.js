import { bottomToTop, leftToRight, rightToLeft, scroller, smallToLarge } from "../transformAnim";

export const animateSkills = ()=>{
    const tl1 = scroller(".skills .top .box:nth-child(1)", {
        start: "top 80%",
        end: "top 30%",
    });
    leftToRight(tl1, ".skills .top .box:nth-child(1)");
    const tl2 = scroller(".skills .top .box:nth-child(2)", {
        start: "top 80%",
        end: "top 30%",
    });
    rightToLeft(tl2, ".skills .top .box:nth-child(2)");

    const tl3 = scroller(".skills .bottom .single-box:nth-child(1)", {
        start: "top 80%",
        end: "top 30%",
    });
    bottomToTop(tl3, ".skills .bottom .single-box:nth-child(1) .icon");
    smallToLarge(tl3, " .skills .bottom .single-box:nth-child(1) h3");

    const tl4 = scroller(".skills .bottom .single-box:nth-child(2)", {
        start: "top 80%",
        end: "top 30%",
    });
    bottomToTop(tl4, ".skills .bottom .single-box:nth-child(2) .icon");
    smallToLarge(tl4, " .skills .bottom .single-box:nth-child(2) h3");

    const tl5 = scroller(".skills .bottom .single-box:nth-child(3)", {
        start: "top 80%",
        end: "top 30%",
    });
    bottomToTop(tl5, ".skills .bottom .single-box:nth-child(3) .icon");
    smallToLarge(tl5, " .skills .bottom .single-box:nth-child(3) h3");

    const tl6 = scroller(".skills .bottom .single-box:nth-child(4)", {
        start: "top 80%",
        end: "top 30%",
    });
    bottomToTop(tl6, ".skills .bottom .single-box:nth-child(4) .icon");
    smallToLarge(tl6, " .skills .bottom .single-box:nth-child(4) h3");
}