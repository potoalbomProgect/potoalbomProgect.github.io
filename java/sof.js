const NextFoto = document.getElementById('sof')
const nextd = document.getElementById('nextd')

const foto=['sofsof.jpg','an.jpg','sofsof.jpg','sof.jpg']
i=0;
function step0(){
 NextFoto.innerHTML= `<img id="nextd"class="sof" src="image/${foto[i]}"></img>`}
 step0()


function step(){
 NextFoto.innerHTML= `<img id="nextd"class="sof" src="image/${foto[i]}"></img>`
  i++;
 if(i == foto.length){
  i = 0;
 }
 
}
a=foto.length;
function step1(){
  NextFoto.innerHTML= `<img id="nextd"class="sof" src="image/${foto[a]}"></img>`
   a--;
  if(a == 0){
   a =foto.length-1;
  }
  
 }
 function num(){
  console.log(i,a)
 }
 num()
   
  
   
    


