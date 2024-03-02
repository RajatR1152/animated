var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
    }
})

tl.to("#mainImg", {
    top: "130%",
    left: "5%",
    transform: 'rotate(10deg)',
})

tl.to("#slice", {
    top: "120%",
    left: "75%",
    zIndex: 0,
})

tl.to("#leaf1", {
    top: "170%",
    left: "75%",
    zIndex: 0,
    transform: 'rotate(220deg)'
})

tl.to("#leaf2", {
    top: "120%",
    left: "45%",
    zIndex: 0,
    transform: 'rotate(60deg)'
})


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".third",
        start: "30% 95%",
        end: "70% 70%",
        scrub: true,
    }
})

tl2.from(".slice1", {
    left: "-50%",
    top: '110%',
    opacity: 0,
    zIndex: -1
})

tl2.from(".slice2", {
    left: "50%",
    top: '0%',
    opacity: 0,
    zIndex: -1
})

tl2.from("#cocaImg", {
    left: "-50%",
    top: '60%',
    transform: 'rotate(-60deg)'
})

tl2.from("#pepsiImg", {
    left: "50%",
    top: '60%',
    transform: 'rotate(60deg)'

})

tl2.to("#mainImg", {
    top: "231%",
    height: '450px',
    left: "30%",
    transform: 'rotate(0deg)',
    transition: 'width 5s'
})

tl.to("#slice", {
    top: "215%",
    left: "43%",
    width: '230px'
})

