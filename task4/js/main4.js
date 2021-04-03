function getAttributes() {
    const element = document.getElementById('w3r');
    for (let i = 0, atributes = element.attributes; i < atributes.length; i++) {
        console.log(atributes[i].nodeValue);
    }
}