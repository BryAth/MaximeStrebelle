

setTimeout(() => {
    gsap.to(".blabla", {scaleX: 2,scaleY:2});
     setTimeout(() => {
        gsap.fromTo(".blabla",{width:1920,height:1080,opacity : 0,duration : 4},{opacity:1})
         window.location.href = "https://www.instagram.com/maxime_strebelle/"
     }, 1000);
}, 4000);









