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

document.addEventListener("DOMContentLoaded", function() {
  const content = document.querySelector('.content');
  const images = document.querySelector('.images');

  window.addEventListener('scroll', function() {
      let scrollPosition = window.scrollY;

      content.style.opacity = 1 - scrollPosition / (document.body.scrollHeight - window.innerHeight);
      images.style.opacity = scrollPosition / (document.body.scrollHeight - window.innerHeight);

      const imgList = document.querySelectorAll('.images img');
      imgList.forEach((img, index) => {
          const imgOffset = img.offsetTop;
          const halfwayThroughImg = imgOffset - window.innerHeight * 0.5;

          if (scrollPosition > halfwayThroughImg) {
              img.style.opacity = 1;
              img.style.transform = 'translateY(0)';
          }
      });
  });
});



// Get the modal
var modal = document.querySelector('.modal');

// Get the image, caption and insert them inside the modal
var images = document.querySelectorAll('.image-gallery img');
var modalImg = document.getElementById("modal-image");
var captionText = document.getElementById("image-caption");

images.forEach(function(image) {
  image.addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.textContent = this.dataset.caption; // Set the caption text to the value of the "data-caption" attribute
  });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};