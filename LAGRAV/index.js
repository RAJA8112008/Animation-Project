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

function circleMouseFollower() {
    var xscale = 1;
    var yscale = 1;
    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        xscale = gsap.utils.clamp(0.8, 1.2, (dets.clientX - xprev) * 0.05);
        yscale = gsap.utils.clamp(0.8, 1.2, (dets.clientY - yprev) * 0.05);

        xprev = dets.clientX;
        yprev = dets.clientY;

        document.querySelector("#minicircle").style.transform = 
        `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
}
circleMouseFollower();
firstpageAnim();

    document.querySelectorAll(".elem").forEach(function (elem){
        elem.addEventListener("mousemove", function(dets){
            var diff =dets.clirntY-elem.getBoundingClientRect().top;
            gsap.to(elem.querySelector("img"),{
                opacity:1,
                ease:Power1,
                top:diff,
                left:dets.clientX
            })
        });
    });

