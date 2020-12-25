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

/// for PC

let myName = document.querySelectorAll('.normal');

let tlName = gsap.timeline();

tlName.from(myName, .1, {
   opacity:0,

    
    stagger: .1
})


//handling the details tag
const All_Details = document.querySelectorAll('details');

All_Details.forEach(deet=>{
  deet.addEventListener('toggle', toggleOpenOneOnly)
})

function toggleOpenOneOnly(e) {
  if (this.open) {
    All_Details.forEach(deet=>{
      if (deet!=this && deet.open) deet.open = false
    });
  }
}


let projectD = document.getElementById('p');
let summary = document.querySelectorAll('.project-summary');

for(let i =0 ; i<summary.length ; ++i){
    summary[i].addEventListener('click', function(){
        projectD.style.display = "none";
    })
}
