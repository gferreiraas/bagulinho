function verificarVogal(letra) {
    if (["a", "e", "i", "o", "u"].includes(letra)) {
        return true;
    } else {
        return false;
    }
}
console.log(verificarVogal("g"));
