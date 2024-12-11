// Lista de 1000 frases (reemplaza este array con tus frases)
const frases = [
  "La vida es un sueño, y los sueños, sueños son.",
  "A quien madruga, Dios le ayuda.",
  "El que mucho abarca, poco aprieta.",
  "No dejes para mañana lo que puedas hacer hoy.",
  // Agrega hasta 1000 frases aquí...
];

let fraseIndex = 0;

// Función para cambiar la frase
function cambiarFrase() {
  const textoElemento = document.getElementById('fortune-text');
  textoElemento.textContent = frases[fraseIndex];
  fraseIndex = (fraseIndex + 1) % frases.length;
}

// Cambiar la frase cada 30 segundos
setInterval(cambiarFrase, 30000);

// Cambiar la frase al cargar la página
cambiarFrase();
