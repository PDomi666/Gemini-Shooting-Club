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
var modalImg = document.getElementById("modal-image");
var captionText = document.getElementById("image-caption");
var prevButton = document.getElementById("prev-button");
var nextButton = document.getElementById("next-button");
var currentIndex = 0;
var currentImages = [];
var currentCaption = "";

// Get the image, caption and insert them inside the modal
var images = document.querySelectorAll('.image-gallery img');

images.forEach(function(image, index) {
  image.addEventListener('click', function() {
    var imageData = JSON.parse(this.dataset.images);
    currentImages = imageData;
    currentIndex = 0;
    modal.style.display = "block";
    modalImg.src = imageData[currentIndex];
    currentCaption = this.dataset.caption;
    updateCaption();
    updateButtons();
  });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

function updateCaption() {
  if (currentCaption) {
    captionText.textContent = currentCaption;
  } else {
    captionText.textContent = "Image " + (currentIndex + 1) + " of " + currentImages.length;
  }
}

function updateButtons() {
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === currentImages.length - 1;
}

prevButton.onclick = function() {
  if (currentIndex > 0) {
    currentIndex--;
    modalImg.src = currentImages[currentIndex];
    updateCaption();
    updateButtons();
  }
};

nextButton.onclick = function() {
  if (currentIndex < currentImages.length - 1) {
    currentIndex++;
    modalImg.src = currentImages[currentIndex];
    updateCaption();
    updateButtons();
  }
};