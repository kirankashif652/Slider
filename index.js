var images = [
  
  "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg",
  "https://wallpaperinn.co.za/wp-content/uploads/2022/04/Jungle-Adventure-Mural-46481-scaled.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFebVNmBsu_s2dDLNTMTYi-W2KE1tRGfA7PA&s",
  "https://www.shutterstock.com/image-photo/panoramic-view-sundappled-forest-floor-600nw-2486868323.jpg",
];

currentIndex = 0;

function next() {
;
  var currentImg = document.getElementById("slider-img");

  if (currentIndex === images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  currentImg.src = images[currentIndex];
}

function prev() {
  var currentImg = document.getElementById("slider-img");
  if (currentIndex === 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex--;
  }

  currentImg.src = images[currentIndex];
}