 const cuadros = [
    { nombre: "Raíz Serena", imagen: "https://raw.githubusercontent.com/MaikolPinturas/pinturas2025/main/Africana.jpg", descripcion: "Representa la fuerza y tranquilidad ancestral que transmite su mirada.", precio: 50000, agotado: true },
    { nombre: "Ritmo Abstracto", imagen: "https://raw.githubusercontent.com/MaikolPinturas/pinturas2025/main/gitarra.jpg", descripcion: "Conexión entre música y emoción.", precio: 52000, agotado: true },
    { nombre: "Susurros del Otoño", imagen: "https://raw.githubusercontent.com/MaikolPinturas/pinturas2025/main/cuadro_medio.jpg", descripcion: "Un instante de calma donde el viento pinta recuerdos.", precio: 48000, agotado: true },
    { nombre: "Horizonte Encendido", imagen: "https://i.imgur.com/pW9Tfg7.jpeg", descripcion: "Cielo cálido que evoca un atardecer ardiente.", precio: 38000, agotado: true },
    { nombre: "Sueños Vibrantes", imagen: "https://i.imgur.com/ckmdrOs.jpeg", descripcion: "Colores vivos y dinámicos que expresan energía.", precio: 46000, agotado: true },
    { nombre: "Ritmo Silente", imagen: "https://i.imgur.com/OTtIXmi.jpeg", descripcion: "Calma y ritmo pausado con tonos suaves.", precio: 44000, agotado: true },
    { nombre: "Paisaje Fragmentado", imagen: "https://i.imgur.com/kfzhBCI.jpeg", descripcion: "Líneas y bloques que recuerdan un entorno urbano.", precio: 40000, agotado: true },
    { nombre: "Energía Abstracta", imagen: "https://i.imgur.com/F8RXNxZ.jpeg", descripcion: "Movimiento caótico de formas y colores.", precio: 45000, agotado: false },
    { nombre: "Despertar Cósmico", imagen: "https://i.imgur.com/2JJI7yy.jpeg", descripcion: "Trazos espaciales que invitan a un viaje interior.", precio: 43000, agotado: false },
    { nombre: "Sueños del Mar Infinito", imagen: "https://github.com/MaikolPinturas/pinturas2025/blob/main/barco.jpg?raw=true", descripcion: "Figura femenina entre energía oceánica.", precio: 45000, agotado: false },
    { nombre: "Raíces del Alma", imagen: "https://github.com/MaikolPinturas/pinturas2025/blob/main/cielo1.jpg?raw=true", descripcion: "Figura humana fusionada con raíces emocionales.", precio: 49990, agotado: false },
    { nombre: "Despertar del Jaguar", imagen: "https://github.com/MaikolPinturas/pinturas2025/blob/main/cielo2.jpg?raw=true", descripcion: "Ojos felinos en un mundo lleno de simbolismo.", precio: 55000, agotado: false },
    { nombre: "Fuego Interior", imagen: "https://github.com/MaikolPinturas/pinturas2025/blob/main/edificio.jpg?raw=true", descripcion: "Figura ardiente entre llamas.", precio: 38000, agotado: false },
    { nombre: "Alma Negra", imagen: "https://github.com/MaikolPinturas/pinturas2025/blob/main/Negrita.jpg?raw=true", descripcion: "Elegancia, poder y raíces afrodescendientes.", precio: 47000, agotado: true },
    { nombre: "Sabiduría Cósmica", imagen: "https://github.com/MaikolPinturas/pinturas2025/blob/main/edificiorojos.jpg?raw=true", descripcion: "Rostro sabio entre símbolos estelares.", precio: 48990, agotado: false },
    { nombre: "Reflejos del Alma", imagen: "https://i.imgur.com/Z2xDG3I.jpeg", descripcion: "Formas abstractas que transmiten calma y profundidad.", precio: 42000, agotado: false },
    { nombre: "Audrey Hepburn stencil", imagen: "https://github.com/MaikolPinturas/pinturas2025/blob/main/Audrey%20Hepburnstencil.jpg?raw=true", descripcion: "Inspirada en la elegancia atemporal de Hepburn.", precio: 55000, agotado: true },
    { nombre: "Misterio Urbano", imagen: "https://i.imgur.com/utRRzAz.jpeg", descripcion: "Sombras y luces que atrapan el alma de la ciudad.", precio: 20000, agotado: false },
    { nombre: "Espejo del Alma", imagen: "https://i.imgur.com/tGRjodN.jpeg", descripcion: "Retrato que refleja emociones profundas.", precio: 28000, agotado: false }
  ];

  const galeria = document.getElementById("galeria");
  const filtro = document.getElementById("filtro");

  function mostrarCuadros(lista) {
    galeria.innerHTML = "";
    lista.forEach(cuadro => {
      const col = document.createElement("div");
      col.className = "col-sm-12 col-md-6 col-lg-4 mb-4";
      col.innerHTML = `
        <div class="card shadow">
          <img src="${cuadro.imagen}" class="card-img-top" alt="${cuadro.nombre}" onclick="abrirModal(this)">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${cuadro.nombre}</h5>
            <p class="card-text">${cuadro.descripcion}</p>
            <p class="fw-bold">$${cuadro.precio.toLocaleString("es-CL")}</p>
            ${
              cuadro.agotado
                ? '<span class="btn btn-danger">Agotado</span>'
                : `<a href="https://wa.me/56961269336?text=Hola%20Maikol,%20quiero%20comprar%20el%20cuadro%20${encodeURIComponent(cuadro.nombre)}" class="btn btn-success mt-auto">Comprar</a>`
            }
          </div>
        </div>
      `;
      galeria.appendChild(col);
    });
  }

  function ordenarCuadros(criterio) {
    let listaOrdenada = [...cuadros];
    if (criterio === "menor") listaOrdenada.sort((a,b)=>a.precio-b.precio);
    else if (criterio === "mayor") listaOrdenada.sort((a,b)=>b.precio-a.precio);
    else if (criterio === "nombre") listaOrdenada.sort((a,b)=>a.nombre.localeCompare(b.nombre));
    mostrarCuadros(listaOrdenada);
  }

  filtro.addEventListener("change", e => ordenarCuadros(e.target.value));
  mostrarCuadros(cuadros);

  // Buscador
  document.getElementById("buscadorForm").addEventListener("submit", e=>{
    e.preventDefault();
    const valor = document.getElementById("buscadorInput").value.toLowerCase();
    const filtrados = cuadros.filter(c=>c.nombre.toLowerCase().includes(valor));
    mostrarCuadros(filtrados);
  });

  // Modal
  let rotacion = 0;
  function abrirModal(img){
    const modalImg = document.getElementById("imagenAmpliada");
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    rotacion=0;
    modalImg.style.transform="rotate(0deg)";
    new bootstrap.Modal(document.getElementById('modalImagen')).show();
  }
  function rotarImagen(){
    rotacion=(rotacion+90)%360;
    document.getElementById("imagenAmpliada").style.transform=`rotate(${rotacion}deg)`;
  }

  // Carrito
  const carrito = [];
  function agregarAlCarrito(nombre, precio){
    carrito.push({nombre, precio});
    actualizarCarrito();
  }
  function actualizarCarrito(){
    const lista=document.getElementById("lista-carrito");
    lista.innerHTML="";
    let total=0;
    carrito.forEach((item,index)=>{
      total+=item.precio;
      const li=document.createElement("li");
      li.innerHTML=`${item.nombre} - $${item.precio.toLocaleString()} <button onclick="eliminarDelCarrito(${index})">❌</button>`;
      lista.appendChild(li);
    });
    document.getElementById("total").textContent=`Total: $${total.toLocaleString()}`;
  }
  function eliminarDelCarrito(index){
    carrito.splice(index,1);
    actualizarCarrito();
  }
  function enviarPedido(){
    if(carrito.length===0){alert("Tu carrito está vacío."); return;}
    let mensaje="Hola, quiero comprar los siguientes cuadros:%0A";
    carrito.forEach(item=>mensaje+=`- ${item.nombre}: $${item.precio.toLocaleString()}%0A`);
    const total=carrito.reduce((sum,item)=>sum+item.precio,0);
    mensaje+=`%0ATotal: $${total.toLocaleString()}`;
    window.open(`https://wa.me/+56961269336?text=${mensaje}`,"_blank");
  }

  // Scroll top
  window.addEventListener('scroll', () => {
    const btnTop = document.getElementById('btn-top');
    btnTop.style.display = window.scrollY>200?'block':'none';
  });

  

    function enviarOpinion(event) {
      event.preventDefault();

      const nombre = document.getElementById('nombre').value.trim();
      const opinion = document.getElementById('opinion').value.trim();

      if (nombre && opinion) {
        const div = document.createElement('div');
        div.className = 'alert alert-secondary';
        div.innerHTML = `<strong>${nombre}:</strong> ${opinion}`;
        document.getElementById('opiniones-lista').appendChild(div);

        document.getElementById('nombre').value = '';
        document.getElementById('opinion').value = '';
      }
    }