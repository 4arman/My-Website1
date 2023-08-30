var indexValue = 0;
function slideShow () {
    setTimeout(slideShow,1700)
    var x;
    const img = document.querySelectorAll('img');
    for(x = 0; x < img.length; x++) {
        img[x].style.display = "none";
    } 
    indexValue++;
    if(indexValue > img.length){indexValue = 1}
    img[indexValue -1].style.display = "block";
}
slideShow();

const buyBtn = document.querySelector('.btn1')
const money = document.querySelector('#mn')

buyBtn.onclick = function () {
    money.textContent = '1990$'
}

buyBtn.addEventListener('click', () => {
    buyBtn.textContent = 'Loading...'
})

const darkBtn = document.querySelector('#dark-btn')
const backNew = document.querySelector('.new')
const header = document.querySelector('.header')
const centerPage = document.querySelector('.center-page')
const nav = document.querySelector('.navbar')
const lightBtn = document.querySelector('#light-btn')
const midPage = document.querySelector('.middle-page')
const conText = document.querySelector('.ct-text')
const mdpPage = document.querySelector('.mdp-page')

darkBtn.addEventListener('click', () => {
    backNew.style = 'background-color: #222;'
    header.style = 'background-color: #333'
    centerPage.style = 'background-color: #333'
    midPage.style = 'background-color: #2a2a2a; color: #fff'
    conText.style = 'color: #fff'
    darkBtn.style = 'display: none;'
    lightBtn.style = 'display: inline; '
    mdpPage.style = 'background-color: #222'
})

lightBtn.addEventListener('click',() => {
    backNew.style = 'background-colir: rgb(182, 182, 182);'
    header.style = 'background-color: #777'
    centerPage.style = 'background-color: rgb(202, 202, 202)'
    darkBtn.style = 'display: inline;'
    midPage.style = 'background-color: rgb(230, 230, 230)'
    lightBtn.style = 'display: none;'
    conText.style = 'color: #000'
    mdpPage.style = 'background-color: #bfbfbf'
})

const subBtn = document.getElementById('subBtn')
const textInfo = document.querySelector(".inps")
const textArea = document.querySelector('.textArea')
const nameInput = document.getElementById('inp2')


subBtn.onclick = () => {
    nameInput.value = ''
    textArea.value = ''
    textInfo.value = ''
    subBtn.value = 'Loading...'
    if (subBtn.value === 'Loading...') {
        setTimeout(() => subBtn.value = 'Submited!',3000)
    }
    /*for (t of textInfo.value) {
        if (t ==="@") {
            subBtn.value = 'Yes'
        }
        */
}