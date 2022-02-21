// dismissable drawer

let ham=document.querySelector('.dismissable .hamburger');
let toggle=0;
ham.addEventListener('click',()=>{
    toggle===0?toggle=1:toggle=0;
    toggle===1?document.querySelector('.dismissable .drawer-navigation').style.display="inherit":document.querySelector('.dismissable .drawer-navigation').style.display="none";
    
})

// tabs shifting

let tabsType1=document.querySelectorAll('.nav-firstTabs .tab');
function resetTabsType1(){
    tabsType1.forEach(tab=>{
        tab.parentNode.classList.remove('primary-link')
    });
}
 tabsType1.forEach(tab=>{
    tab.addEventListener('click',()=>{   
        resetTabsType1();
        tab.parentNode.classList.add('primary-link');})
})
let tabsType2=document.querySelectorAll('.nav-secondTabs .tab');
function resetTabsType2(){
    tabsType2.forEach(tab=>{
        tab.parentNode.classList.remove('selected-tab')
    });
}
 tabsType2.forEach(tab=>{
    tab.addEventListener('click',()=>{   
        resetTabsType2();
        tab.parentNode.classList.add('selected-tab');})
})

// Slider Code

const mySliders=document.querySelectorAll('.slider');
mySliders.forEach(mySlider=>mySlider.addEventListener('input',()=>{
    let valPercent=(mySlider.value/mySlider.max)*100;
    mySlider.style.background=`linear-gradient(to right,var(--secondary-300) ${valPercent}%,var(--primary-200) ${valPercent}%)`
}))
    

// Ratings Code

const allStars=document.querySelectorAll('.rating-star');

allStars.forEach((star,id)=>{
   
    star.addEventListener('change',()=>{
        if(allStars[id].checked){
            for(let i=id;i>=0;i--){
                allStars[i].checked=true;
            }
        }else{
            for(let i=id;i<allStars.length;i++){
                allStars[i].checked=false;
            }
        }
    });
})

// Snackbar Code

let baseSnack=document.querySelector('.baseline-snackbar');
baseSnack.addEventListener('click',(e)=>{
    console.log(e.target);
    document.querySelector('.baseline').classList.toggle('show');
})
let leadSnack=document.querySelector('.leading-snackbar');
leadSnack.addEventListener('click',()=>{
    document.querySelector('.leading').classList.toggle('show');

})
let baseStackedSnack=document.querySelector('.baseline-stackedSnackbar');
baseStackedSnack.addEventListener('click',()=>{
    document.querySelector('.stacked-baseline').classList.toggle('show');
})
let leadStackedSnack=document.querySelector('.leading-stackedSnackbar');
leadStackedSnack.addEventListener('click',()=>{
    document.querySelector('.stacked-leading').classList.toggle('show');
})

// Component-Library Navigation for Mobile

let asideMenu=document.querySelector('.egNav-Lib');
let openAsideMenu=document.querySelector('.condensed-menuBar');
let clickables=document.querySelectorAll('.list-noneOrdered .secondary-link');
clickables.forEach(click=>{
    console.log(click);
    click.addEventListener('click',()=>{  
        openAsideMenu.classList.toggle('rotate');
         asideMenu.classList.toggle('show');
     document.querySelector('.eg-components').classList.toggle('hide');
})
})
openAsideMenu.addEventListener('click',()=>{
    openAsideMenu.classList.toggle('rotate');
    asideMenu.classList.toggle('show');
    document.querySelector('.eg-components').classList.toggle('hide');
})

//dark mode
let mode = true;
if (localStorage.getItem("site")) {
  document.body.classList.add("dark");
  document.querySelector('.dark .material-icons').innerText="wb_sunny";
  document.querySelector('.dark .material-icons').style.color='var(--white)';
  mode = false;
}
document.querySelector('.dark.secondary-link').addEventListener("click", () => {
  if (mode) {
    document.body.classList.add("dark");
    document.querySelector('.dark .material-icons').innerText="wb_sunny";
    document.querySelector('.dark .material-icons').style.color='var(--white)';
    localStorage.setItem("site", "dark");
  } 
  else {
    document.body.classList.remove("dark");
    document.querySelector('.dark .material-icons').innerText="nights_stay";
    document.querySelector('.dark .material-icons').style.color='black';
    localStorage.removeItem("site");
  }
  mode = !mode;
});


