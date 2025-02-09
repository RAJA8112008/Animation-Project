const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstpageAnim() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: "expo.inOut",
    })
    .to(".boundingelem", {
        y: 0,
        ease: "expo.inOut",
        duration: 2,
        stagger: 0.2
    })
    .from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: "expo.inOut"
    }, "-=0.5"); 
}

function circlemouseFollower() {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform = 
        `translate(${dets.clientX}px, ${dets.clientY}px)`; // Corrected syntax with backticks
    });
}

circlemouseFollower();
firstpageAnim();
