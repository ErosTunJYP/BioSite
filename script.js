document.querySelector('.panel').onsubmit = e => {
  e.preventDefault();

  // Guardar imagen si se sube una nueva
  const file = imgInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      localStorage.setItem('profileImage', evt.target.result);
    };
    reader.readAsDataURL(file);
  }

  // Guardar enlaces de redes sociales
  const redes = ['tiktok', 'spotify', 'youtube', 'facebook', 'instagram'];
  redes.forEach(id => {
    const checkbox = document.getElementById(id);
    const url = document.getElementById(`${id}-url`);
    localStorage.setItem(`${id}-enabled`, checkbox.checked);
    localStorage.setItem(`${id}-url`, url.value);
  });

  alert('Cambios guardados correctamente');
};
