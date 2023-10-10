
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


let tl = gsap.timeline()
tl.to("#main",{
    y:"0vh",
    scale:0.1
})
tl.to("#main", {
    y: "-150vh",
    duration: 1,
    delay: 1.5,
})
tl.to("#main", {
    delay:0.5,
    y: "0vh",
    rotate: 360,
    scale: 1,
    duration: 1.5,
})
