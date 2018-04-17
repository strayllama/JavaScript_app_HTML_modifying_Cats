document.addEventListener('DOMContentLoaded', () => {

  const catImageContainer = document.querySelector('#cats'); // create container where ul is to go
  imageContainer.innerHTML = '';  // clear it out


  const createCat = function (src, container, catName, catFood) {
    const catUL = document.createElement('ul');
    const catLiName = document.createElement('li');
    const catLiFavFood = document.createElement('li');
    const catImage = document.createElement('img');

    catLiName.textContent = `Name: ${catName}`;
    catLiFavFood.textContent = `Favourite food: ${catFood}`;
    image.src = src; // add the source of image to element
    catUL.appendChild(catLiName);
    catUL.appendChild(catLiFavFood);
    catUL.appendChild(catImage);
    container.appendChild(catUL);
  };





for (let i = 1; i < 4 ; i++) {
//  createImage(`images/`)
};


});
