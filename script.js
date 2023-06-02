const textarea = document.querySelector(".textarea")
const mensaje = document.querySelector(".mensaje")

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = Encriptar(textarea.value) 
    mensaje.value = textoEncriptado
    textarea.value = ""
    mensaje.style.backgroundImage = "none"
}

function Encriptar(stringEncriptado){
    let codigomatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < codigomatriz.length; i++){
        if(stringEncriptado.includes(codigomatriz[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(codigomatriz[i][0], codigomatriz[i][1])
        }
    }
    return stringEncriptado
}

function btnDesencriptar(){
    const textoEncriptado = desEncriptar(textarea.value) 
    mensaje.value = textoEncriptado
    textarea.value = ""
    mensaje.style.backgroundImage = "none"

}

function desEncriptar(stringDesencriptada){
    let codigomatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < codigomatriz.length; i++){
        if(stringDesencriptada.includes(codigomatriz[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(codigomatriz[i][1], codigomatriz[i][0])
        }
    }
    return stringDesencriptada
}

function btnCopiar(){
    var contenido = document.getElementById("mensaje");
    
   contenido.select();
   contenido.setSelectionRange(0, 99999);
   
   navigator.clipboard.writeText(contenido.value);


   alert("Mensaje copiado:" + contenido.value );
}
