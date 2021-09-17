let felt = document.getElementById("felt")
let footer = document.querySelector('footer')
let pic1 = document.getElementById("pic1")
let pic2 = document.getElementById("pic2")
let pic3 = document.getElementById("pic3")

function trykJS() {
    document.getElementById('headLine').innerHTML = document.getElementById('felt').value


    if(footer.style.backgroundImage == 'url("./assets/1.jpg")'){
        (footer.style.backgroundImage = 'url("./assets/2.jpg")')}
    else if(footer.style.backgroundImage == 'url("./assets/2.jpg")'){
        (footer.style.backgroundImage = 'url("./assets/3.jpg")')}
    else{
        (footer.style.backgroundImage = 'url("./assets/1.jpg")')
    }
}

/*function skift() {
    if((pic1.style.backgroundImage == 'url("./assets/pic1.png")') && (pic2.style.backgroundImage == 'url("./assets/pic2.png")') && (pic3.style.backgroundImage == 'url("./assets/pic3.png")')){
        (pic1.style.backgroundImage = 'url("./assets/pic3.png")')
        (pic2.style.backgroundImage = 'url("./assets/pic1.png")')
        (pic3.style.backgroundImage = 'url("./assets/pic2.png")')
    }else if
    ((pic1.style.backgroundImage == 'url("./assets/pic3.png")') && (pic2.style.backgroundImage == 'url("./assets/pic1.png")') && (pic3.style.backgroundImage == 'url("./assets/pic2.png")')){
        (pic1.style.backgroundImage = 'url("./assets/pic2.png")')
        (pic2.style.backgroundImage = 'url("./assets/pic3.png")')
        (pic3.style.backgroundImage = 'url("./assets/pic1.png")')
    }
    else{
        (pic1.style.backgroundImage = 'url("./assets/pic1.png")')
        (pic2.style.backgroundImage = 'url("./assets/pic2.png")')
        (pic3.style.backgroundImage = 'url("./assets/pic3.png")')
    }
}*/

function skift() {
    if(pic1.style.backgroundImage == 'url("./assets/pic1.png")'){
        (pic1.style.backgroundImage = 'url("./assets/pic3.png")')
    }
    else if(pic1.style.backgroundImage == 'url("./assets/pic3.png")'){
        (pic1.style.backgroundImage = 'url("./assets/pic2.png")')
    }
    else{
        (pic1.style.backgroundImage = 'url("./assets/pic1.png")')
    }

    if(pic2.style.backgroundImage == 'url("./assets/pic2.png")'){
        (pic2.style.backgroundImage = 'url("./assets/pic1.png")')
    }
    else if(pic2.style.backgroundImage == 'url("./assets/pic1.png")'){
        (pic2.style.backgroundImage = 'url("./assets/pic3.png")')
    }
    else{
        (pic2.style.backgroundImage = 'url("./assets/pic2.png")')
    }

    if(pic3.style.backgroundImage == 'url("./assets/pic3.png")'){
        (pic3.style.backgroundImage = 'url("./assets/pic2.png")')
    }
    else if(pic3.style.backgroundImage == 'url("./assets/pic2.png")'){
        (pic3.style.backgroundImage = 'url("./assets/pic1.png")')
    }
    else{
        (pic3.style.backgroundImage = 'url("./assets/pic3.png")')
    }
}

felt.addEventListener("keyup", function(event) {
    if (event.keyCode === 13){
        event.preventDefault();
        document.getElementById("button").click();
    }
})