var t=gsap.timeline();

t.from(".last",{
    opacity:0,
    y:70,
    duration:2,
    delay:1,
    // ease: "bounce.out",
    ease: "elastic.out(1, 0)",

    stagger:0.2,
    rotateY:"180deg",

})

t.to(".t",{
    opacity:0,
    y:-70,
    rotate:70,
    stagger:0.1,
})

t.from(".n",{
    y:"-107.5%",
    opacity:0,
    rotate:-70,
    duration:2,
    ease: "elastic.out(1, 0.3)",
    stagger:0.1,
})


t.to(".last , .n",{
    opacity:0,
    stagger:-0.1,
    y:100,
    rotateX:"130deg",
})

var happy=gsap.timeline();

// t.from(".happy",{
//     opacity:0,
//     y:-60,
//     stagger:0.3,
//     duration:1,
//     // ease: "elastic.out(1, 0.2)",
//     ease:"bounce.out"
// })
// t.from(".neww",{
//     opacity:0,
//     x:-60,
//     stagger:-0.3,
//     duration:1,
//     // ease: "elastic.out(1, 0.2)",
//     ease:"bounce.out"
// })
// t.from(".year2",{
//     opacity:0,
//     y:60,
//     stagger:-0.3,
//     duration:1,
//     // ease: "elastic.out(1, 0.2)",
//     ease:"bounce.out"
// })

t.from(".happy, .neww, .year2",{
    opacity:0,
    stagger:0.2,
    y:100,
    rotateX:"130deg",
    color:"red"
})
t.to(".happy, .neww, .year2",{
    opacity:0,
    stagger:-0.1,
    // y:100,
    rotateX:"130deg",
    color:"red"
})