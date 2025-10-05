const ModClose = document.querySelector('.ModalClose');
const BotClose = document.querySelector('.BottomClose')
function Mclose(){
    BotClose.innerHTML = `<p  class="close-button" onclick="show('none')">close</p>`
}
function closslide1(){
    BotClose.innerHTML = ``
}