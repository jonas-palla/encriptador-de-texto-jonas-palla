let $encriptar = document.getElementById("Encriptar");
let $desencriptar = document.getElementById("Desencriptar");
let $copy = document.getElementById("copy")
let $textoACopiar = document.getElementById("textareaOutput");
let $textoInput = document.getElementById("textareaInput");
let $muñeco = document.getElementById("muñeco");
function codificar(texto) {
    let codificado = texto.replace(/e/g, "enter")
    .replace(/i/g,"imes")
    .replace(/a/g,"ai")
    .replace(/o/g,"ober")
    .replace(/u/g,"ufat");
    return codificado;

}
function decodificar(texto) {
    let decodificado = texto.replace(/enter/g, "e")
    .replace(/imes/g,"i")
    .replace(/ai/g,"a")
    .replace(/ober/g,"o")
    .replace(/ufat/g,"u");
    return decodificado;

}




function $input() {
    const input = document.getElementById("textareaInput");
    let contenido = input.value;
    return contenido;
}

function output(text) {
    const output = document.getElementById("textareaOutput");
    output.value = text;
    $textoACopiar = output;
    $muñeco.style.display = "none";
}

$encriptar.onclick = function() {
    output(codificar($input()))
   
};
$desencriptar.onclick = function() {
    output(decodificar($input()))
   
};
$copy.addEventListener("click", function() {

    $textoACopiar.select();
    document.execCommand("copy");
    

  });
$textoInput.addEventListener('input', (event) => {
    const target = event.target;
    target.style.height = 'auto';
    target.style.height = target.scrollHeight + ' px';
    
    if (target.value === '') {
        $muñeco.style.display = "block";
        $textoACopiar.value = " ";
     
    } else {
        $muñeco.style.display = "none";
        
    }
});


 
