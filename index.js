
let btnPress=document.querySelector('.main-body .primary');
// document.body.style.transition='all 700ms ease-in';

// setInterval(()=>{
//     let bgImages=['images/cover.jpg','images/cover1.jpg','images/cover2.jpg','images/cover3.jpg'];
//     let bg=bgImages[Math.floor(Math.random()*bgImages.length)];
//   document.body.style.backgroundImage=`url(${bg})`;
// },4000);
const landingPage=()=>{
    
 window.location.href="/docs/Attract-componentLib.html";
};

btnPress.addEventListener('click',landingPage);

