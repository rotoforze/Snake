window.addEventListener("keydown", move) //Esto detectará la tecla que pulsamos
window.onload = events; //Primera carga
function events(){
    document.getElementById("boton").addEventListener("click", sw); //Añadimos un EventListener para llamar a la función que cambiará el color de la página
    document.querySelector("a").addEventListener("mouseenter", twitterenter); //Añadimos un EventListener para llamar a la función twitterenter 
    document.querySelector("a").addEventListener("mouseleave", twitterleave); //Añadimos un EventListener para llamar a la función twitterleave 
    document.getElementById("boton").addEventListener("click", animacion); //Añadimos un EventListener para llamar a la función animacion
    document.getElementById("puntuacion").innerHTML = "Puntos: "+punt; //Escribimos para no dejar en blanco
    document.getElementById("posY").innerHTML = "PosY: "+ posY; //Escribimos para no dejar en blanco
    document.getElementById("posX").innerHTML = "PosX: "+ posX; //Escribimos para no dejar en blanco
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

var der = 0; //Para saber la útlima tecla
var izq = 0; // "
var abj = 0; // "
var arr = 0; // "

function move(event) {
    let key = event.key; //Guardamos en una variable la tecla pulsada
    if (key == "ArrowRight" || key == "ArrowLeft" || key == "ArrowDown" || key == "ArrowUp") { //Si la tecla pulsada fue una de las siguientes
        if (key == "ArrowRight"){der = 1;}else{der = 0;} //Si fue derecha guardamos la info para seguir avanzando hacia ese lado
        if (key == "ArrowLeft"){izq = 1;}else{izq = 0;} // " izquierda
        if (key == "ArrowDown"){abj = 1;}else{abj = 0;} // " abajo
        if (key == "ArrowUp"){arr = 1;}else{arr = 0;} // " arriba
    }
}
const s = document.getElementById("snake").style; //Acortamos código
const p = document.getElementById("point").style; //Acortamos código

var speed = 5; //Variable para poner una velocidad
var posX = 20; // Posición X del cuadrado verde
var posY = 20; // Posición Y del cuadrado verde
var posXp = 20; // Posición X del punto
var posYp = 80; // Posición Y del punto
var punt = 0; // Puntuación
var tempPunt = 0; // Puntuación temporal
var id = null; // Variable para el timer

function inicio(){
    clearInterval(id); //Impedimos loop
    id = setInterval(frame, 42); //Iniciamos timer
    document.getElementById("reset").addEventListener("click", inicio) //Ponemos el botón de reiniciar
    der = 0; //Lo ponemos en 0 para que no siga avanzando
    izq = 0; // "
    abj = 0; // "
    arr = 0; // "
    posX = 20; //Reiniciamos la posición
    posY = 20; // "
    posXp = 20; // "
    posYp = 80; // "
    punt = 0; // Reiniciamos la puntuación
    tempPunt = 0; // " Puntuación temporal
    speed = 5; // Reiniciamos velocidad
    document.getElementById("point").hidden = false; //Ponemos el puntuable visible
    s.backgroundColor = "#008000"; //Ponemos el jugador del color con el que se representa estar vivo
    s.left = posX+"px"; //Movemos el player
    s.top = posY+"px"; // "
    p.left = posXp+"px"; // "
    p.top = posYp+"px"; // "
    function frame() {
        document.getElementById("puntuacion").innerHTML = "Puntos: "+punt; // Pintamos la puntuación
        document.getElementById("posY").innerHTML = "PosY: "+ posY; // Pintamos la posY
        document.getElementById("posX").innerHTML = "PosX: "+ posX; // Pintamos la posX
        //Overlap
        var rect1 = document.querySelector("#snake").getBoundingClientRect(); //Recogemos los datos de posición del player
        var rect2 = document.querySelector("#point").getBoundingClientRect(); //Recogemos los datos de posición del puntuable
        var tempPosYp = Math.random() * 380; //Generamos un número random para posY temporal del puntuable 
        var tempPosXp = Math.random() * 380; //Generamos un número random para posX temporal del puntuable 
        const overlap = !(rect1.right < rect2.left ||  //Comprobamos si se sobreponen
            rect1.left > rect2.right ||  
            rect1.bottom < rect2.top ||  
            rect1.top > rect2.bottom);
        if (overlap == true){
            document.getElementById("point").hidden = true; //Ocultamos el puntuable 
            punt = punt+1; //Sumamos 1 en la puntuación
            posXp = tempPosXp + 20; //Ponemos en la var posXp la posición temporal de el puntuable con el rng
            posYp = tempPosYp + 20; // "
            p.top=posYp+"px"; // Movemos el puntuable
            p.left=posXp+"px"; // // "
            document.getElementById("point").hidden = false; //Lo mostramos de nuevo
        } 
        //Subida de dificultad
        if (tempPunt == punt-5){ //Comprobamos si la puntuacón temporal es idéntico a la puntuación - 5
            speed=speed+1; //Sumamos 1 a la velocidad
            tempPunt = punt; //Movemos la puntuacón temporal a la actual
        }
        //Movilidad
        if (der == 1){ //Si la última pulsada es derecha
            if (posX >= 475){ //Si sobrepasa estas coordenadas
                clearInterval(id); //Pausamos el game 
                s.backgroundColor = "#db1f22" //Cambiamos a rojo para darle un feedback al jugador
            } else { //Si no
                posX = posX+speed; //PosX + Velocidad
                s.left = posX+"px"; //Movemos el personaje
            }
        }else if(izq == 1){ //Si la última pulsada es izquierda
            if (posX <= 0){//Si sobrepasa estas coordenadas
                clearInterval(id);//Pausamos el game 
                s.backgroundColor = "#db1f22"//Cambiamos a rojo para darle un feedback al jugador
            } else { //Si no
                posX = posX-speed; //PosX - Velocidad
                s.left = posX+"px"; //Movemos el personaje
            }
        }else if(arr == 1){ //Si la última pulsada es arriba
            if (posY <= -20){//Si sobrepasa estas coordenadas
                clearInterval(id);//Pausamos el game 
                s.backgroundColor = "#db1f22"//Cambiamos a rojo para darle un feedback al jugador
            } else { //Si no
                posY = posY-speed; //PosY - Velocidad
                s.top = posY+"px"; //Movemos el personaje
            }
        }else if(abj == 1){ //Si la última pulsada es abajo
            if (posY >=455){//Si sobrepasa estas coordenadas
                clearInterval(id);//Pausamos el game 
                s.backgroundColor = "#db1f22"//Cambiamos a rojo para darle un feedback al jugador
            } else { //Si no
                posY = posY+speed; //PosY + Velocidad
                s.top = posY+"px"; //Movemos el personaje
            }
        }
    }
}
