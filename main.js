let act = document.getElementById('activator');


let tl = gsap.timeline();
let toggle = false;

tl.to('.activator', {
    'borderRadius' : '4em 0em 0em 4em',
     'backgroundColor': '#B1C1F2'
})
tl.to('nav', {
    'backgroundColor': '#5549DDEs',
    'clipPath' : 'ellipse(100% 100% at 50% 50%)'
}, '-=.5')

tl.to('nav img', {
    opacity:1,
    'transform' : 'translateX(0)'
}, '-=.5')
tl.pause();
act.addEventListener('click', function(){
    toggle = !toggle;

    if(toggle){
        tl.play();
    }else{
        tl.reverse();
    }
})