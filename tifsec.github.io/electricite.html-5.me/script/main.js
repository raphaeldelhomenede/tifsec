const trigger = document.getElementById('trigger');
const menu = document.getElementById('menu');
trigger.addEventListener('click', function() {
  if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block'; // Si c'est le cas, affiche le menu
  } else {
    menu.style.display = 'none';
  }
});
