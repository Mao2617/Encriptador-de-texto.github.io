document.addEventListener("DOMContentLoaded", function() {
    const botonEncriptar = document.querySelector('.boton_encriptar');
    const botonDesencriptar = document.querySelector('.boton_desencriptar');
    const botonCopiar = document.querySelector('.boton_copiar');
    const textarea = document.querySelector('.cuadro_texto');
    const textoUno = document.querySelector('.texto-uno');
    const textoDos = document.querySelector('.texto-dos');

    const reglas = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    function encriptarTexto(texto) {
        return texto.split('').map(char => {
            return reglas[char] || char;
        }).join('');
    }

    function desencriptarTexto(texto) {
        let textoDesencriptado = texto;
        for (const [clave, valor] of Object.entries(reglas)) {
            const regex = new RegExp(valor, 'g');
            textoDesencriptado = textoDesencriptado.replace(regex, clave);
        }
        return textoDesencriptado;
    }

    function manejarEncriptar() {
        const textoIngresado = textarea.value;
        const textoEncriptado = encriptarTexto(textoIngresado);
        mostrarResultado(textoEncriptado);
    }

    function manejarDesencriptar() {
        const textoIngresado = textarea.value;
        const textoDesencriptado = desencriptarTexto(textoIngresado);
        mostrarResultado(textoDesencriptado);
    }

    function mostrarResultado(texto) {
        if (texto.length > 0) {
            textoUno.textContent = texto;
            textoDos.textContent = '';
        } else {
            textoUno.textContent = 'Ningun mensaje fue encontrado';
            textoDos.textContent = 'Ingresa el texto que deseas encriptar o desencriptar';
        }
    }

    function copiarTexto() {
        const textoCopiado = textoUno.textContent;
        navigator.clipboard.writeText(textoCopiado).then(() => {
            alert('Texto copiado al portapapeles');
        });
    }
    
    botonEncriptar.addEventListener('click', manejarEncriptar);
    botonDesencriptar.addEventListener('click', manejarDesencriptar);
    botonCopiar.addEventListener('click', copiarTexto);
});
