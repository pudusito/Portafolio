const fuegocanvas= document.getElementById('fuego');

const fuegocontext = fuegocanvas.getContext('2d');



const fuegoImg= new Image();
fuegoImg.src = "/Imagenes/fire.png"
const spriteWidthfuego= 60; 
const spriteHeightfuego= 120;    

let frameXfuego = 0;
let frameYfuego = 0;
const totalFrames = 16; //total de columnas
let gameFrame = 0;
const staggerFrames = 7;     //velocidad de animacion

function animateloop() {
    fuegocontext.clearRect(0, 0, fuegocanvas.width, fuegocanvas.height);//limpia el frame antes de dibujar

    let currentFrame = Math.floor(gameFrame / staggerFrames) % totalFrames;
    frameXfuego = currentFrame;  

    fuegocontext.drawImage(fuegoImg, frameXfuego * spriteWidthfuego, frameYfuego * spriteHeightfuego, spriteWidthfuego, spriteHeightfuego, 0, 0, spriteWidthfuego+250, spriteHeightfuego+30); 

    gameFrame++;  
    requestAnimationFrame(animateloop);
}

animateloop();


