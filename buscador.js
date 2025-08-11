// Lista completa de cuadros
const misCuadros = [
  {
    nombre: "Raíz Serena",
    imagen: "https://raw.githubusercontent.com/MaikolPinturas/pinturas2025/main/Africana.jpg",
    descripcion: "Representa la fuerza y tranquilidad ancestral que transmite su mirada. Una conexión con la herencia cultural y la serenidad interior.",
    precio: 50000
  },
  {
    nombre: "Ritmo Abstracto",
    imagen: "https://raw.githubusercontent.com/MaikolPinturas/pinturas2025/main/gitarra.jpg",
    descripcion: "Transmite la conexión entre la música, el arte visual y la emoción.",
    precio: 52000
  },
  {
    nombre: "Susurros del Otoño",
    imagen: "https://raw.githubusercontent.com/MaikolPinturas/pinturas2025/main/cuadro_medio.jpg",
    descripcion: "Un instante de calma donde el viento pinta recuerdos.",
    precio: 48000
  },
  {
    nombre: "Horizonte Encendido",
    imagen: "https://i.imgur.com/pW9Tfg7.jpeg",
    descripcion: "Cielo cálido con trazos expresivos y energéticos que evocan un atardecer ardiente.",
    precio: 38000
  },
  {
    nombre: "Sueños Vibrantes",
    imagen: "https://i.imgur.com/ckmdrOs.jpeg",
    descripcion: "Colores vivos y formas dinámicas que expresan energía y creatividad en movimiento.",
    precio: 46000
  },
  {
    nombre: "Ritmo Silente",
    imagen: "https://i.imgur.com/OTtIXmi.jpeg",
    descripcion: "Composición que transmite calma y ritmo pausado con tonos neutros y suaves.",
    precio: 44000
  },
  {
    nombre: "Paisaje Fragmentado",
    imagen: "https://i.imgur.com/kfzhBCI.jpeg",
    descripcion: "Composición moderna de líneas y bloques de color que recuerdan un entorno urbano estilizado.",
    precio: 40000
  },
  {
    nombre: "Energía Abstracta",
    imagen: "https://i.imgur.com/F8RXNxZ.jpeg",
    descripcion: "Movimiento caótico de formas y colores que simbolizan la intensidad creativa.",
    precio: 45000
  },
  {
    nombre: "Despertar Cósmico",
    imagen: "https://i.imgur.com/2JJI7yy.jpeg",
    descripcion: "Elementos circulares y trazos espaciales que invitan a un viaje interior y universal.",
    precio: 43000
  },
  {
    nombre: "Sueños del Mar Infinito",
    imagen: "https://github.com/MaikolPinturas/pinturas2025/blob/main/barco.jpg?raw=true",
    descripcion: "Una figura femenina emerge del azul profundo, rodeada de símbolos místicos y energía oceánica.",
    precio: 45000
  },
  {
    nombre: "Raíces del Alma",
    imagen: "https://github.com/MaikolPinturas/pinturas2025/blob/main/cielo1.jpg?raw=true",
    descripcion: "Una figura humana se funde con formas abstractas que evocan raíces y emociones profundas.",
    precio: 49990
  },
  {
    nombre: "Despertar del Jaguar",
    imagen: "https://github.com/MaikolPinturas/pinturas2025/blob/main/cielo2.jpg?raw=true",
    descripcion: "Ojos felinos vigilan con fuerza ancestral desde un mundo onírico lleno de simbolismo.",
    precio: 55000
  },
  {
    nombre: "Fuego Interior",
    imagen: "https://github.com/MaikolPinturas/pinturas2025/blob/main/edificio.jpg?raw=true",
    descripcion: "Una figura ardiente emerge entre llamas, representando pasión y transformación espiritual.",
    precio: 38000
  },
  {
    nombre: "Alma Negra",
    imagen: "https://github.com/MaikolPinturas/pinturas2025/blob/main/Negrita.jpg?raw=true",
    descripcion: "Una presencia imponente que encarna elegancia, poder y la profundidad espiritual de las raíces afrodescendientes.",
    precio: 47000
  },
  {
    nombre: "Sabiduría Cósmica",
    imagen: "https://github.com/MaikolPinturas/pinturas2025/blob/main/edificiorojos.jpg?raw=true",
    descripcion: "Un rostro sabio entre símbolos estelares nos invita a conectarnos con el conocimiento oculto del universo.",
    precio: 48990
  },
  {
    nombre: "Reflejos del Alma",
    imagen: "https://i.imgur.com/Z2xDG3I.jpeg",
    descripcion: "Tonos suaves y formas abstractas que transmiten calma y profundidad emocional.",
    precio: 42000
  },
  {
    nombre: "Audrey Hepburn stencil",
    imagen: "https://github.com/MaikolPinturas/pinturas2025/blob/main/Audrey%20Hepburnstencil.jpg?raw=true",
    descripcion: "Colores vibrantes y trazos místicos dan vida a un ser espiritual en proceso de transformación. Inspirada en la elegancia atemporal de Audrey Hepburn.",
    precio: 55000
  },
  {
    nombre: "Misterio Urbano",
    imagen: "https://i.imgur.com/utRRzAz.jpeg",
    descripcion: "Sombras y luces se mezclan en una calle sin nombre, atrapando el alma de la ciudad nocturna.",
    precio: 20000
  },
  {
    nombre: "Espejo del Alma",
    imagen: "https://i.imgur.com/tGRjodN.jpeg",
    descripcion: "Retrato que revela emociones profundas, donde cada trazo refleja una historia no contada.",
    precio: 28000
  }
];

// Elementos del DOM
const formulario = document.getElementById("Buscador-Formulario");
const inputBusqueda = document.getElementById("Buscador-input");
const contenedorResultados = document.getElementById("contenedor-resultados");

// Evento para buscar
formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const termino = inputBusqueda.value.toLowerCase();
  const resultados = misCuadros.filter(cuadro =>
    cuadro.nombre.toLowerCase().includes(termino)
  );

  mostrarResultados(resultados);
});

// Mostrar resultados
function mostrarResultados(lista) {
  contenedorResultados.innerHTML = "";

  if (lista.length === 0) {
    contenedorResultados.innerHTML = "<p>No se encontraron cuadros con ese nombre.</p>";
    return;
  }

  lista.forEach(cuadro => {
    const div = document.createElement("div");
    div.classList.add("cuadro");
    div.style.border = "1px solid #ccc";
    div.style.padding = "10px";
    div.style.marginBottom = "10px";
    div.style.borderRadius = "5px";
    div.style.backgroundColor = "#fff";

    div.innerHTML = `
      <img src="${cuadro.imagen}" alt="${cuadro.nombre}" style="max-width: 200px; display: block; margin-bottom: 10px; cursor: pointer;" onclick="abrirModal(this)">
      <h3>${cuadro.nombre}</h3>
      <p>${cuadro.descripcion}</p>
      <strong>Precio: $${cuadro.precio.toLocaleString("es-CL")}</strong>
    `;

    contenedorResultados.appendChild(div);
  });
}
