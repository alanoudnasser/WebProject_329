/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


// Add event listener for deleting an image
const imagesContainer = document.querySelector('#property-images-container');

imagesContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-image-link')) {
        e.preventDefault();

        e.target.parentNode.remove();
    }
});
