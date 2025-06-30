document.getElementById('img-upload').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      document.getElementById('profile-img').src = evt.target.result;
      localStorage.setItem('img64', evt.target.result);
    };
    reader.readAsDataURL(file);
  }
});

document.querySelector('label[for="img-upload"]').onclick = () => {
  document.getElementById('img-upload').click();
};

document.querySelector('.panel').onsubmit = e => {
  e.preventDefault();

  const redes = ['tiktok', 'spotify', 'youtube', 'facebook', 'instagram'];
  const config = {
    imagen: localStorage.getItem('img64') || '',
    redes: {}
  };

  redes.forEach(red => {
    config.redes[red] = {
      url: document.getElementById(`${red}-url`).value,
      activo: document.getElementById(red).checked
    };
  });

  const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'config.json';
  a.click();

  URL.revokeObjectURL(url);
};
