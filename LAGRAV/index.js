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
function circleChaptaKaro(){
    //define default scale value
    var xscale = 1;
    var yscale =1;
    var xprev =0;
    var yprev =0;
    window.addEventListener("mouse", function(dets){
         
        xprev =dets.clientX;
        yprev =dets.clientY;
        
         xscale =gsap.utils.clamp(.8, 1.2,dets.clientX- xprev);
         yscale =gsap.utils.clamp(.8, 1.2,dets.clientY- yprev);
    });
}
circleChaptaKaro();

function circlemouseFollower() {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform = 
        `translate(${dets.clientX}px, ${dets.clientY}px)`; // Corrected syntax with backticks
    });
}

circlemouseFollower();
firstpageAnim();
