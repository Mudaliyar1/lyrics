var t=gsap.timeline();


t.from(".lyrics",{
    opacity:0,
    duration:0.4,
    repeat:25
})
t.to(".lyrics",{
    opacity:0,
    duration:0,
    display:"none",
})


t.from(".l1",{
    opacity:0,
    duration:0.6,
    // x:100,
    rotateX:"-200deg",
    scale:4,
    stagger:0.5
})
t.to(".l1",{
    opacity:0,
    duration:0.3,
    y:-100,
    stagger:0.2
})

t.from(".l2", {
    opacity: 0,
    duration: 1,
    rotateY:"-180deg",
    x: -100,
    stagger: 0.5,
});
t.to(".l2", {
    opacity: 0,
    duration: 1,
    y: -100,
    rotateX:"-180deg",
    stagger: 0.5,
});

t.from(".l3", {
    opacity: 0,
    duration: 1,
    x: -100,
    stagger: 0.5,
});
t.to(".l3", {
    opacity: 0,
    duration: 1,
    y: 100,
    stagger: 0.5,
});

t.from(".l4", {
    opacity: 0,
    duration: 0.4,
    y: -100,
    stagger: 0.5,
});
t.to(".l4", {
    opacity: 0,
    duration: 0.4,
    y: -100,
    stagger: 0.20,
});

t.from(".l5", {
    opacity: 0,
    duration: 1,
    x: 100,
    stagger: 0.6,
});
t.to(".l5", {
    opacity: 0,
    duration: 1,
    y: -100,
    stagger: 0.5,
});
t.from(".l6", {
    opacity: 0,
    duration: 0.6,
    x: 100,
    stagger: 0.6,
});
t.to(".l6", {
    opacity: 0,
    duration: 0.2,
    y: -100,
    stagger: 0.2,
});
t.from(".l7", {
    opacity: 0,
    duration: 0.7,
    x: -100,
    stagger: 0.3,
});
t.to(".l7", {
    opacity: 0,
    duration: 1,
    y: 100,
    rotateX:"360deg",
    stagger: 0.5,
});
t.from(".l8", {
    opacity: 0,
    duration: 1,
    x: -100,
    stagger: 0.4,
});
t.to(".l8", {
    opacity: 0,
    duration: 0.4,
    y: 100,
    rotateX:"360deg",
    stagger: 0.20,
});
t.from(".l9", {
    opacity: 0,
    duration: 0.2,
    x: -100,
    stagger: 0.2,
});
t.to(".l9", {
    opacity: 0,
    duration: 1,
    y: 100,
    rotateX:"360deg",
    stagger: 0.5,
});
t.from(".l10", {
    opacity: 0,
    duration: 0.7,
    x: -100,
    stagger: 0.2,
});
t.to(".l10", {
    opacity: 0,
    duration: 1,
    y: 100,
    rotateX:"360deg",
    stagger: 0.5,
});
t.from(".l11", {
    opacity: 0,
    duration: 0.7,
    x: -100,
    stagger: 0.2,
});
t.to(".l11", {
    opacity: 0,
    duration: 1,
    y: -100,
    rotateZ:"100deg",
    stagger: 0.5,
});
t.from(".l12", {
    opacity: 0,
    duration: 0.7,
    x: -100,
    stagger: 0.2,
});
t.to(".l12", {
    opacity: 0,
    duration: 1,
    x: 100,
    rotateX:"182deg",
    stagger: 1,
});
t.from(".l13", {
    delay:1,
    opacity: 0,
    duration: 0.7,
    y: -100,
    stagger: 0.2,
});
t.to(".l13", {
    opacity: 0,
    duration: 1,
    x: 100,
    rotateY:"282deg",
    stagger: 0.8,
});
t.from(".l14", {
    opacity: 0,
    duration: 1,
    // x: 100,
    stagger: 0.4,
});
t.to(".l14", {
    opacity: 0,
    duration: 1,
    x: 100,
    rotateX:"182deg",
    stagger: 0.8,
});
t.from(".l15", {
    opacity: 0,
    duration: 1,
    y: -100,
    stagger: 0.4,
});
t.to(".l15", {
    opacity: 0,
    duration: 0.3,
    x: -100,
    rotateY:"-182deg",
    stagger: 0.2,
});
t.from(".l16", {
    opacity: 0,
    duration: 1,
    y: 100,
    stagger: 0.4,
});
t.to(".l16", {
    opacity: 0,
    duration: 1,
    y: -100,
    rotateX:"20deg",
    stagger: 0.8,
});
t.from(".l17", {
    opacity: 0,
    duration: 1,
    y: 100,
    stagger: 0.4,
    rotateX:"-20deg",
});
t.to(".l17", {
    opacity: 0,
    duration: 1,
    // x: -100,
    stagger: 0.8,
});
t.from(".l18", {
    opacity: 0,
    duration: 1,
    // y: 100,
    stagger: 0.4,
    rotateX:"-20deg",
});
t.to(".l18", {
    opacity: 0,
    duration: 1,
    x: -100,
    stagger: 0.8,
});
