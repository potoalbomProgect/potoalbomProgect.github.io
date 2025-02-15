const moni = document.getElementById('moni')
const next = document.getElementById('next')
const next1 = document.getElementById('next1')
const data = document.querySelector('.text')
let animo = document.querySelector('.monitor')
const inputs = document.querySelector('.in').addEventListener('change', function() {
  poto.push(this.files[0].name);
});
const inputs2 = document.querySelector('.in2')
const entrs = document.querySelector('.entr')



const poto = ['svadba.jpg', 'свадьба 2.jpg', 'свадьба 3.jpg', 'свадьба 4.jpg', 'свадьба 5.jpg', 'свадьба 6.jpg', 'свадьба 7.jpg', 'свадьба 8.jpg', 'свадьба 9.jpg', 'свадьба 10.jpg', 'свадьба 11.jpg', 'свадьба 12.jpg', 'свадьба 13.jpg','свадьба 14.jpg', 'свадьба 15.jpg', 'свадьба 16.jpg','свадьба 17.jpg','свадьба 18.jpg','свадьба 19.jpg','свадьба 20.jpg' ]
i = 0
const text = ['свадьба','пузырь','свадьба','пузырь','свадьба','пузырь','свадьба','пузырь','свадьба','пузырь','свадьба','пузырь','свадьба','пузырь','свадьба','пузырь',]
x = 0


  
  
 function addTodoHandler(){
  text.push(inputs2.value);
 }


function n() {
  moni.innerHTML = `<img id="monitor" src="image/${poto[i]}">`;
  
}
n()
function r() {
  data.innerHTML = `<h1>${text[i]}</h1>`;
}
r()
i++

next.onclick = nextd
function nextd() {
  moni.innerHTML = `<img id="monitor" src="image/${poto[i]}">`;
 
  
  data.innerHTML = `<h1>${text[i]}</h1>`
  i++
  if (i === poto.length) {
    i = 0
  };

}
a = poto.length-1 ;
next1.onclick = nextd1
function nextd1() {
 
  moni.innerHTML = `<img id="monitor" src="image/${poto[a]}">`;
 
 
 
  data.innerHTML = `<h1>${text[a]}</h1>`
  a--
  if (a < 0) {
    a = poto.length -1;
  };
  

}
/*next.addEventListener("click", function(evt){
  evt.preventDefault();
  animo.classList.toggle("monitor1")
})*/
function animation() {
  var widt = 0;
  var pos = 100;
  var id = setInterval(frame, 1);
  var wi = setInterval(fra, 5);
  function frame() {
    if (pos == 10) {
      clearInterval(id);
    }
    else {
      pos--;
      moni.style.left = pos + '%';
    }
  }
  function fra() {
    if (widt == 80) {
      clearInterval(wi);
    }
    else {
      widt++;
      moni.style.width = widt + '%';
      moni.style.height = widt + '%';
    }
  }
}
function animation1() {
  var widt = 0;
  var pos = 100;
  var id = setInterval(frame,5);
  var wi = setInterval(fra,3);
  function frame() {
    if (pos == 10) {
      clearInterval(id);
    }
    else {
      pos--;
      moni.style.right = pos + '%';
    }
  }
  function fra() {
    if (widt == 80) {
      clearInterval(wi);
    }
    else {
      widt++;
      moni.style.width = widt + '%';
      moni.style.height = widt + '%';
    }
  }
}