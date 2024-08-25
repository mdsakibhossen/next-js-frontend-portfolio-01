import { bottomToTop, scroller, topToBottom } from "../transformAnim";

export const animateContactHeading = () => {
    const tl1 = scroller(".contact .heading", {
        start: "top 80%",
        end: "top 30%",
    });
    topToBottom(tl1, ".contact .heading");
}

export const animateContactForm = () => {
    const tl1 = scroller(".contact .form-box", {
        start: "top 80%",
        end: "top 30%",
    });

    bottomToTop(tl1, ".contact .form-box small, .contact .form-box .single-field,.contact .form-box .btn-box",{stagger:.25})
}