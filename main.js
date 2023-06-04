window.addEventListener("keydown", move)
window.onload = events;
function events(){
    document.getElementById("boton").addEventListener("click", sw); //Añadimos un EventListener para llamar a la función que cambiará el color de la página
    document.querySelector("a").addEventListener("mouseenter", twitterenter); //Añadimos un EventListener para llamar a la función twitterenter 
    document.querySelector("a").addEventListener("mouseleave", twitterleave); //Añadimos un EventListener para llamar a la función twitterleave 
    document.getElementById("boton").addEventListener("click", animacion);
    document.getElementById("puntuacion").innerHTML = "Puntos: "+punt;
    document.getElementById("posY").innerHTML = "PosY: "+ posY;
    document.getElementById("posX").innerHTML = "PosX: "+ posX;
    inicio();
}
//Botón para cambiar modo claro y oscuro
var tempC = 0; //Variable temporal para saber a que color cambiar
const b = "rgb(242, 242, 242)"; // "
const n = "rgb(18, 18, 18)"; // "
function sw(){
    const c = document.querySelector("body").style; //Acortamos código haciéndolo variable
    const a = document.querySelector("a").style;
    const e = document.getElementById("circulo").style; 
    const bt = document.getElementById("reset").style;
    if(tempC == 0){
        c.backgroundColor = n; //Cambiamos el color de fondo del archivo html
        c.color = b; //Cambiamos el color del texto
        a.color = b;
        e.borderColor = b;
        e.backgroundColor = b;
        bt.color = b;
        tempC = 1; //Devolvemos el número contrario para que cuando volvamos a clicar vuelva al blanco
    }else if(tempC == 1){
        c.backgroundColor = b; //Cambiamos el color de fondo del archivo html
        c.color = n; //Cambiamos el color del texto
        a.color = n;
        e.borderColor = n;
        e.backgroundColor = n;
        bt.color = n;
        tempC = 0; //Devolvemos el número contrario para que cuando volvamos a clicar vuelva al negro
    }
}
//Animación botón
var idC = null; //Definimos una variable que va a ser usada para medir tiempo
var tempA = 0; //Variable para saber en que tema estamos
var pB = 0; //Posición del botón
function animacion(){
    const e = document.getElementById("circulo"); //Acortar código
    clearInterval(idC); //Para que no se lopee
    idC = setInterval(frame, 10); //Añadimos un intervalo que llame a frame cada 10ms
    function frame() {
        if (tempA == 0){
            document.getElementById("boton").removeEventListener("click", animacion); //Quitamos el EventListener
            document.getElementById("boton").removeEventListener("click", sw); //Quitamos el EventListener
            if (pB == 33){
                clearInterval(idC); //Dejamos en null de nuevo el tiempo porque la animación ya terminó
                document.getElementById("boton").addEventListener("click", animacion); //Añadimos el EventListener
                document.getElementById("boton").addEventListener("click", sw); //Añadimos el EventListener
                tempA = 1; //Cambiamos la variable para saber que la próxima vez ha de seguir para alante y no ejecutar esto
            } else {
                pB = pB +1.5; //Le sumamos para que vaya a la derecha
                e.style.left = pB+"px"; //Cambiamos el css para aplicar la animación
            }
        }else if(tempA == 1){
            document.getElementById("boton").removeEventListener("click", animacion); //Quitamos el EventListener
            document.getElementById("boton").removeEventListener("click", sw); //Quitamos el EventListener
            if (pB == 0){
                clearInterval(idC);  //Dejamos en null de nuevo el tiempo porque la animación ya terminó
                document.getElementById("boton").addEventListener("click", animacion); //Añadimos el EventListener
                document.getElementById("boton").addEventListener("click", sw); //Añadimos el EventListener
                tempA = 0; //Cambiamos la variable para saber que la próxima vez ha de seguir para alante y no ejecutar esto
            } else {
                pB = pB -1.5; //Restamos para que vaya a la derecha
                e.style.left = pB+"px"; //Cambiamos el css para aplicar la animación
            }
        }
    }
}
//Código para el color del twitter
function twitterenter(){
    const a = document.querySelector("a").style; //Acortamos código haciéndolo variable
    a.color = "#a8a1a0"; //Cambiamos al color gris
}
function twitterleave(){
    const a = document.querySelector("a").style; //Acortamos código haciéndolo variable
    if(tempC == 0){ 
        a.color = n; //Cambiamos a negro
    }else if(tempC == 1){
        a.color = b; //Cambiamos a blanco
    }
}

var der = 0;
var izq = 0;
var abj = 0;
var arr = 0;

function move(event) {
    let key = event.key;
    if (key == "ArrowRight" || key == "ArrowLeft" || key == "ArrowDown" || key == "ArrowUp") {
        if (key == "ArrowRight"){der = 1;}else{der = 0;}
        if (key == "ArrowLeft"){izq = 1;}else{izq = 0;}
        if (key == "ArrowDown"){abj = 1;}else{abj = 0;}
        if (key == "ArrowUp"){arr = 1;}else{arr = 0;}
    }
}
const s = document.getElementById("snake").style;
const p = document.getElementById("point").style;

var speed = 5;
var posX = 20;
var posY = 20;
var posXp = 20;
var posYp = 80;
var punt = 0;
var tempPunt = 0;
var id = null;

function inicio(){
    clearInterval(id);
    id = setInterval(frame, 42);
    document.getElementById("reset").addEventListener("click", inicio)
    der = 0;
    izq = 0;
    abj = 0;
    arr = 0;
    posX = 20;
    posY = 20;
    posXp = 20;
    posYp = 80;
    punt = 0;
    tempPunt = 0;
    document.getElementById("point").hidden = false;
    s.backgroundColor = "#008000";
    s.left = posX+"px";
    s.top = posY+"px";
    p.left = posXp+"px";
    p.top = posYp+"px"
    function frame() {
        document.getElementById("puntuacion").innerHTML = "Puntos: "+punt;
        document.getElementById("posY").innerHTML = "PosY: "+ posY;
        document.getElementById("posX").innerHTML = "PosX: "+ posX;
        var rect1 = document.querySelector("#snake").getBoundingClientRect();
        var rect2 = document.querySelector("#point").getBoundingClientRect();
        var tempPosYp = Math.random() * 380;
        var tempPosXp = Math.random() * 380;
        const overlap = !(rect1.right < rect2.left ||  
            rect1.left > rect2.right ||  
            rect1.bottom < rect2.top ||  
            rect1.top > rect2.bottom);
        if (overlap == true){
            document.getElementById("point").hidden = true;
            punt = punt+1;
            posXp = tempPosXp + 20;
            posYp = tempPosYp + 20;
            p.top=posYp+"px";
            p.left=posXp+"px";
            document.getElementById("point").hidden = false;
        }
        if (tempPunt == punt-5){
            speed=speed+1;
            tempPunt = punt;
        }
        if (der == 1){
            if (posX >= 475){
                clearInterval(id);
                s.backgroundColor = "#db1f22"
            } else { 
                posX = posX+speed;
                s.left = posX+"px";
            }
        }else if(izq == 1){
            if (posX <= 0){
                clearInterval(id);
                s.backgroundColor = "#db1f22"
            } else { 
                posX = posX-speed;
                s.left = posX+"px";
            }
        }else if(arr == 1){
            if (posY <= -20){
                clearInterval(id);
                s.backgroundColor = "#db1f22"
            } else { 
                posY = posY-speed;
                s.top = posY+"px";
            }
        }else if(abj == 1){
            if (posY >=455){
                clearInterval(id);
                s.backgroundColor = "#db1f22"
            } else { 
                posY = posY+speed;
                s.top = posY+"px";
            }
        }
    }
}
