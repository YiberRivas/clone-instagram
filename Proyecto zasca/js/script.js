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


