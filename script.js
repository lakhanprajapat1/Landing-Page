function page1Animation() {
    var tl = gsap.timeline();

tl.from("nav h1",{
    y:-50,
    opacity:0,
    duration:1
})
tl.from("nav h4, nav button",{
    y:-50,
    opacity:0,
    stagger:0.1
})
tl.from(".center-part1 h1",{
    x:-300,
    opacity:0,
    duration:0.5
})
tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.5
})
tl.from(".center-part1 button",{
    opacity:0,
    duration:0.5
})
tl.from(".center-part2 img",{
    x:100,
    opacity:0,
    duration:0.5
},"-=1.5")
}


page1Animation()

var tl2= gsap.timeline({
        scrollTrigger:{
        trigger:"#services",
        scroller:"body",
        markers:false,
        start:"top 70%",
        end:"top 40%",
        scrub:2
    }
})
tl2.from(".bottom img",{
    opacity:0,
    x:-900,
    duration:1,
})

tl2.from(".services h1",{
    x:900,
    opacity:0,
    duration:1,
})
tl2.from(".services p",{
    y:100,
    opacity:0,
    duration:1,
})

var tl3= gsap.timeline({
    scrollTrigger:{
        trigger:".line1",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 40%",
        scrub:2
    }
})
tl3.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:0.5
},"one")
tl3.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:0.5
},"one")

var tl4= gsap.timeline({
    scrollTrigger:{
        trigger:".line2",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 50%",
        scrub:2
    }
})
tl4.from(".elem.line2.left",{
    x:-300,
    opacity:0,
    duration:1
},"two")
tl4.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:1
},"two")

var tl5= gsap.timeline({
    scrollTrigger:{
        trigger:".line3",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:2
    }
})
tl5.from(".elem.line3.left",{
    x:-300,
    opacity:0,
    duration:1
},"three")
tl5.from(".elem.line3.right",{
    x:300,
    opacity:0,
    duration:1
},"three")


gsap.from(".btmTop",{
    opacity:0,
    scale:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#bottom-top",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 30%",
        scrub:2
    }
})
var tl6 = gsap.timeline({
    scrollTrigger:{
        trigger:".case",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 40%",
        scrub:2
    }
})
tl6.from(".case h1",{
    opacity:0,
    // delay:1,
    duration:1
})
tl6.from(".case p",{
    x:500,
    opacity:0,
    duration:0.5
})

gsap.from(".btmEnd",{
    y:200,
    opacity:0,
    scale:1,
    duration:1,
    scrollTrigger:{
        trigger:".btmEnd .betu",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 500%",
        scrub:2
    }
})



var crsr=document.querySelector(".crsr")
var body = document.querySelector("body")
var h1 = document.querySelector(".center-part1 h1")

body.addEventListener("mousemove", (dets)=>{
    gsap.to(crsr,{
        x:dets.x,
        y:dets.y,
        duration:0.6,
    })
})

