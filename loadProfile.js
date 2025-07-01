fetch('config.json')
  .then(res => res.json())
  .then(config => {
    // Imagen de perfil
    const img = document.querySelector('img[alt="Eros Tun"]');
    if (img && config.imagen) img.src = config.imagen;

    // Redes sociales
    document.querySelectorAll('.social-icons a').forEach(link => {
      const red = link.dataset.red;
      if (!config.redes[red].activo) {
        link.style.display = "none";
      } else {
        link.href = config.redes[red].url;
      }
    });
  })
  .catch(err => {
    console.error("No se pudo cargar config.json", err);
  });

