  AOS.init({
    duration: 500,
    offset: 100,
    once: true,
  });



// updateAos();

const bluewoman = document.getElementById('blueWoman');
const counter = document.querySelectorAll('.counter');
const query = document.querySelectorAll("section .query");
  console.log(query.length)
const bars = document.querySelector('nav .fa-bars')
const sidebar = document.querySelector('nav .sidebar')

const clos = document.querySelector('nav .sidebar .fa-xmark')
const navMenu = document.querySelector('nav .navMenu')
const search = document.querySelector('nav .fa-magnifying-glass')

bars.addEventListener('click' , ()=>{ 

  sidebar.classList.toggle('hidden')
     navMenu.style.display = "flex"
 
})


clos.addEventListener('click' , ()=>{

  sidebar.classList.toggle('hidden')
  navMenu.style.display = "none"

})

window.addEventListener('resize', ()=>{
  if(window.innerWidth > 768){
     navMenu.style.display = "flex"
  }

})

search.addEventListener('click' , ()=>{
  window.location.href = 'search.html'

})


// window.addEventListener('resize', function updateAos(){
//   if(window.innerWidth < 768){
//     bluewoman.setAttribute("data-aos", "fade-left")
//   }
//   else{
//     bluewoman.setAttribute("data-aos", "fade-up")
//   }
//  AOS.refresh();
// })



window.addEventListener("DOMContentLoaded" ,function (){
  counter.forEach( e=>{
       let start = Number(e.dataset.start) ;
       let end = Number(e.dataset.end);
       e.textContent = start
       const timer = setInterval(()=>{
       if(start < end){
           start++ 
           e.textContent = start
       }else{
           clearInterval(timer)
       }
     }, 100)
    })
})

for(i=0 ; i < query.length ; i++){
  query[i].addEventListener('click' , function(){
    if(this.style.backgroundColor == 'white'){
    this.style.backgroundColor = "lightblue";
    this.nextElementSibling.style.display = "flex";
    
    }else{
    this.style.backgroundColor = "white";    
    this.nextElementSibling.style.display = "none";    
    }
  })
  }






