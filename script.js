const btnSi = document.getElementById('btnSi');
const btnNo = document.getElementById('btnNo');
const mensaje = document.getElementById('mensaje');

btnSi.addEventListener('click', () => {
  mensaje.textContent = '¡Sabía que dirías que sí! 💖 ¡Te amo! Nos vemos en Jaleo, 14 de febrero a las 20:00.';
});

btnNo.addEventListener('mouseover', () => {
  // Hacemos que el botón "No" se mueva aleatoriamente
  const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
  const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
  btnNo.style.position = 'absolute';
  btnNo.style.left = `${x}px`;
  btnNo.style.top = `${y}px`;
});