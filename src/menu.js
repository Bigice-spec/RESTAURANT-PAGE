export default function themenu() {
const myContent = document.getElementById('content');
let mymenu = document.createElement('div');

let food = [
    {
        image: 'images/chicken.jpg',
        title: 'Chicken',
        description: 'Delicious rosted chicken @ 250 a plate'
    },
    {
        image: 'images/chicken.jpg',
        title: 'Chicken',
        description: 'Delicious rosted chicken @ 250 a plate'
    },
    {
        image: 'images/chicken.jpg',
        title: 'Chicken',
        description: 'Delicious rosted chicken @ 250 a plate'
    },
    {
        image: 'images/chicken.jpg',
        title: 'Chicken',
        description: 'Delicious rosted chicken @ 250 a plate'
    },
    {
        image: 'images/chicken.jpg',
        title: 'Chicken',
        description: 'Delicious rosted chicken @ 250 a plate'
    },
    {
        image: 'images/chicken.jpg',
        title: 'Chicken',
        description: 'Delicious rosted chicken @ 250 a plate'
    },
    {
        image: 'images/chicken.jpg',
        title: 'Chicken',
        description: 'Delicious rosted chicken @ 250 a plate'
    },
    {
        image: 'images/chicken.jpg',
        title: 'Chicken',
        description: 'Delicious rosted chicken @ 250 a plate'
    },

]

food.forEach(e => {
    let cardElement = document.createElement('div');
    let imageContainer = document.createElement('div');
    let infoContainer = document.createElement('div');
    let imageElement = document.createElement('img');
    let headingElement = document.createElement('h5');
    let paragraphElement = document.createElement('p');
    let btnElement = document.createElement('a');

    mymenu.className = 'menu';
    cardElement.className = 'card';
    imageContainer.className = 'image-container';
    infoContainer.className = 'info-container';
    imageElement.className = 'image';
    headingElement.className = 'heading';
    paragraphElement.className = 'paragraph';
    btnElement.className = 'btn';

    imageElement.src = e.image;

    btnElement.setAttribute('href', '#');
    imageElement.setAttribute('alt', 'image');

    headingElement.innerHTML = e.title;
    paragraphElement.innerHTML = e.description;
    btnElement.innerHTML = 'Add to Cart';

    myContent.appendChild(mymenu);
    mymenu.appendChild(cardElement);
    cardElement.append(imageContainer, infoContainer);

    imageContainer.appendChild(imageElement);
    infoContainer.append(headingElement, paragraphElement, btnElement);
   });
}