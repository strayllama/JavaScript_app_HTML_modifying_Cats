document.addEventListener('DOMContentLoaded', () => {

  const catImageContainer = document.querySelector('#cats'); // create container where image is to go

  imageContainer.innerHTML = '';  // clear it out

  const image = document.createElement('img'); // create img element

  image.src = 'images/IMG1.jpg'; // add the source of image to element

  container.appendChild(image); // add the img element to the image container

});
