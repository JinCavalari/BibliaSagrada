function copyToClipboard() {
    var pixKey = document.getElementById("pixKey");
    pixKey.select();
    document.execCommand("copy");
    alert("Chave PIX copiada para a área de transferência: " + pixKey.value);
}