// Cambiar imagen de perfil si hay guardada
const profileImage = localStorage.getItem("profileImage");
if (profileImage) {
  const img = document.querySelector('img[alt="Eros Tun"]');
  if (img) img.src = profileImage;
}

// Aplicar configuración a cada red
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.social-icons a').forEach(link => {
    const red = link.dataset.red;
    const url = localStorage.getItem(`${red}-url`);
    const enabled = localStorage.getItem(`${red}-enabled`);

    if (enabled === "false") {
      link.style.display = "none";
    } else if (url) {
      link.href = url;
    }
  });
});
