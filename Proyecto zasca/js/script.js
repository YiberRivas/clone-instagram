document.addEventListener("DOMContentLoaded", function () {
  console.log("Instagram Clone Loaded");


  // Se actualizan los selectores para que coincidan con "publicacion" y "boton-like"
  const publicaciones = document.querySelectorAll(".publicacion");
  publicaciones.forEach(publicacion => {
    const likeBtn = publicacion.querySelector(".boton-like");
    if (likeBtn) {
      likeBtn.style.cursor = "pointer";

      likeBtn.addEventListener("click", () => {
        const heartIcon = likeBtn.querySelector("i");
        if (heartIcon.classList.contains("fa-solid")) {
          // Quitar 
          heartIcon.classList.remove("fa-solid");
          heartIcon.classList.add("fa-regular");
          heartIcon.style.color = "";
        } else {
          // Dar like:
          heartIcon.classList.remove("fa-regular");
          heartIcon.classList.add("fa-solid");
          heartIcon.style.color = "red";
        }
      });
    }
  });

  const followButtons = document.querySelectorAll(".boton-seguir");
  followButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.innerText = "Siguiendo";
      btn.disabled = true;
    });
  });
});

// Seleccionamos el contenedor de las publicaciones
const contenedorPublicaciones = document.querySelector('.contenido-principal');

// Función para cargar más publicaciones (simulada)
function cargarMasPublicaciones() {
  // Crear una nueva publicación de ejemplo
  const nuevaPublicacion = document.createElement('section');
  nuevaPublicacion.classList.add('publicacion');
  nuevaPublicacion.innerHTML = `
    <header class="cabecera-publicacion">
      <img class="foto-perfil" src="https://picsum.photos/50/50?random=${Math.floor(Math.random() * 100)}" alt="Perfil">
      <p><strong>Usuario_${Math.floor(Math.random() * 1000)}</strong> • Hace 1 hora</p>
    </header>
    <img class="imagen-publicacion" src="https://picsum.photos/600/400?random=${Math.floor(Math.random() * 100)}" alt="Publicación">
    <div class="acciones-publicacion">
      <button class="boton-like"><i class="fa-regular fa-heart"></i></button>
      <button class="boton-comentario"><i class="fa-regular fa-comment"></i></button>
      <button class="boton-compartir"><i class="fa-regular fa-paper-plane"></i></button>
    </div>
    <div class="info-publicacion">
      <p class="cantidad-likes"><strong>${Math.floor(Math.random() * 5000)} Me gusta</strong></p>
      <p class="texto-publicacion"><strong>Usuario_${Math.floor(Math.random() * 1000)}</strong> Texto de ejemplo.</p>
      <p class="ver-comentarios"> Ver los ${Math.floor(Math.random() * 200)} comentarios</p>
    </div>
  `;
  contenedorPublicaciones.appendChild(nuevaPublicacion);
}

// Función para detectar cuando se llega al final de la página
function detectarScroll() {
  // Verificar si estamos cerca del final de la página
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
    // Llamamos a la función para cargar más publicaciones
    cargarMasPublicaciones();
  }
}

// Agregar un evento de scroll a la ventana
window.addEventListener('scroll', detectarScroll);



