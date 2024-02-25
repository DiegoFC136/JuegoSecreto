let numeroSecreto= 0;
let intentos=1;
let lista=[];
let numeroMaximo=3;

function asignarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function verificarIntento(){
        let numeroDeUsuario =parseInt(document.getElementById('valorUsuario').value);
        console.log(numeroSecreto);
        if(numeroSecreto===numeroDeUsuario){
            asignarTextoElemento('p',`Acertaste el número. Te tomó ${intentos} ${(intentos==1)?'intento':'intentos'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
            
        }else {
            if(numeroSecreto>numeroDeUsuario){
            asignarTextoElemento('p',`El número es mayor. Llevas ${intentos} ${(intentos==1)?'intento':'intentos'}`);
            intentos++;
        }else{ asignarTextoElemento('p',`El número es menor. Llevas ${intentos} ${(intentos==1)?'intento':'intentos'}`); intentos++;}
        limpiarCaja();
    }
        return;
}

function generarNumeroSecreto() {
    let numGenerado=Math.floor(Math.random()*numeroMaximo)+1;      
    console.log(numGenerado);
    console.log(lista); 
    console.log('num max',numeroMaximo)
      if(lista.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los elementos.');
       
       
      document.getElementById('Intento').setAttribute('disabled','true');
        
      }
        
      else{
   if(lista.includes(numGenerado)){
        return generarNumeroSecreto();
    }else{
        lista.push(numGenerado);
        return numGenerado;
    }}
}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';
    
}
function inicioJuego(){
    asignarTextoElemento('h1','Juego del número secreto.');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}.`);
   // lista=[];
    numeroSecreto=generarNumeroSecreto(lista);
   // intentos=1;
}
function nuevoJuego(){
    //mensaje inicial
    //limpiar caja
    limpiarCaja();
    inicioJuego();
    //generar número aleatorio
    //Reiniciar intentos
    //Deshabilitar botón nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
inicioJuego();
