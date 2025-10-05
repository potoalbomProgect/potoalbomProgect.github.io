const slidesV = document.querySelectorAll('.slide video')
const slides = document.querySelectorAll('.slide img')
const closes = document.querySelectorAll('.close-button')
const closBottom = document.querySelectorAll('.BottomClose')
const ModClose = document.querySelector('.ModalClose');
const BotClose = document.querySelector('.BottomClose')
const BotCloseV = document.querySelector('.BottomCloseV')
const Filtres = document.querySelector('.filtrClass')
const playOn = document.querySelector('.play')
const stopOff = document.querySelector('.stop')
const progressContpol = document.querySelector('.progressType')
const controlTime = document.querySelector('.controlTime')
const videoPlay = document.querySelector('.video')
const taypOff = document.querySelector('.tape')
for (const slideV of slidesV){
    slideV.addEventListener('click', () =>{
        offslideV()
        
slideV.classList.add('activ')

 })
}

function  offslideV(){
    slidesV.forEach((slideV) =>{
        slideV.classList.remove('activ')  
        videoPlay.currentTime = 0
       videoPlay.pause()
       // playOn.src = './image/imageTape/play1.png',
       // playOn.innerHTML = ``
    })  
    slides.forEach((slide) =>{
        slide.classList.remove('activ')   
    })  
    BotClose.innerHTML = ``,
    BotCloseV.innerHTML = ``,
    Filtres.innerHTML = ``
    
}


for (const slide of slides){
    slide.addEventListener('click', () =>{
        offslide()
        
slide.classList.add('activ')

 })
}

function  offslide(){
    slides.forEach((slide) =>{
        slide.classList.remove('activ')   
    })  
    slidesV.forEach((slideV) =>{
        slideV.classList.remove('activ')   
    })  
    BotCloseV.innerHTML = ``,
    BotClose.innerHTML = ``,
    Filtres.innerHTML = ``
   
    

}
function FilterOff(){
    Filtres.innerHTML = ``
}

function Mclose(){
    BotClose.innerHTML = `<p  class="close-button" onclick="show('none')">close</p>`,
    Filtres.innerHTML = `<div class=" filtr" onclick=" FilterOff()"></div>`
}
function McloseV(){
    BotCloseV.innerHTML = `<p  class="close-buttonV" onclick="show('none')">close</p>`,
    Filtres.innerHTML = `<div class=" filtr" onclick=" FilterOff()"></div>`}
   

//функционал плейера
// function VideoStatus(){
  // if(videoPlay.paused){
   // videoPlay.play()
   // playOn.src = './image/imageTape/pausa.png'
  // } else {
   // videoPlay.pause()
   // playOn.src = './image/imageTape/play1.png'
  // }
  // }
  // function StopVideo(){
  //  videoPlay.currentTime = 0
  //  videoPlay.pause()
   // playOn.src = './image/imageTape/play1.png'
 //  }

 //playOn.addEventListener('click',VideoStatus)
 //videoPlay.addEventListener('click',VideoStatus)
//stopOff.addEventListener('click',StopVideo)

