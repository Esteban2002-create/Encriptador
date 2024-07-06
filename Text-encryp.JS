function encryptText() {
    const inputText = document.getElementById("inputText").value;
    let encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = encryptedText;

}
function decryptText() {
    const inputText = document.getElementById("inputText").value;
    let decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = decryptedText;
}
function copiar(){
    const outputText = document.getElementById("outputText").value;
    navigator.clipboard.writeText(outputText).then(function() {
        alert("Texto copiado al portapapeles!");
    }, function(err) {
        console.error("Error al copiar el texto: ", err);
    });
}