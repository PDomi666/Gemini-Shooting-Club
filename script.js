function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

var menuItems = document.querySelectorAll('.menu a');
menuItems.forEach(function(item) {
  item.addEventListener('click', function() {
    var menu = document.querySelector('.menu');
    menu.classList.remove('active');
  });
});