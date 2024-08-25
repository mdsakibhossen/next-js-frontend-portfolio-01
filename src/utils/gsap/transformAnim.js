import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}
export const scroller = (trigger,stObj={})=>{
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger,
            start: "top 70%",
            end: "bottom top",
            toggleActions: "play none none reset",
            markers: false,
            scrub: false,
            once:false,
            ...stObj
        },
    })
    return tl;
}

export const topToBottom = (obj, element, options = {}, positionTime =null) => {
    obj.from(element, {
        y: -50,
        opacity: 0,
        ease: "power2.out",
        duration: .5,
        ...options
    }, positionTime)
}
export const bottomToTop = (obj, element, options = {}, positionTime =null) => {
    obj.from(element, {
        y: 50,
        opacity: 0,
        ease: "power2.out",
        duration: .5,
        ...options
    }, positionTime)
}

export const leftToRight = (obj, element, options = {}, positionTime =null) => {
    obj.from(element, {
        x: -50,
        opacity: 0,
        ease: "power2.out",
        duration: .5,
        ...options
    }, positionTime)
}
export const rightToLeft = (obj, element, options = {}, positionTime =null) => {
    obj.from(element, {
        x: 50,
        opacity: 0,
        ease: "power2.out",
        duration: .5,
        ...options
    }, positionTime)
}

export const smallToLarge = (obj, element, options = {}, positionTime =null) => {
    obj.from(element, {
        scale: 0,
        opacity: 0,
        ease: "power2.out",
        duration: .5,
        ...options
    }, positionTime)
}
export const largeToSmall = (obj, element, options = {}, positionTime =null) => {
    obj.from(element, {
        scale: 1.5,
        opacity: 0,
        ease: "power2.out",
        duration: .5,
        ...options
    }, positionTime)
}