const animationTimeline = () =>  {
    const tl = new TimelineMax();

    tl.to(".container", 0.6, {
        visibility: "visible"
    })
    .from(".container", 0.7, {
        opacity: 0,
        y: 10
    })
    .from(".text2", 0.4, {
        opacity: 0,
        y: 10
    })
    .to(".container",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "+=3.5")
    .to(".text2",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "-=1")
}
animationTimeline()