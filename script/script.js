
let images = [
    { "src": "../img/FB_IMG_1700512158517.jpg", "text": "" },
    { "src": "../img/FB_IMG_1700512161944.jpg", "text": "" },
    { "src": "../img/FB_IMG_1700512166786.jpg", "text": "" },
    { "src": "../img/FB_IMG_1700512185290.jpg", "text": "" },
    { "src": "../img/FB_IMG_1700512196625.jpg", "text": "" },
    { "src": "../img/FB_IMG_1700512210963.jpg", "text": "" },
    { "src": "../img/FB_IMG_1700512221844.jpg", "text": "" },
    { "src": "../img/FB_IMG_1700512237943.jpg", "text": "" }
];


var gallery = document.getElementById('gallery');

for (var i = 0; i < images.length; i++) {
    var card = document.createElement('div');
    card.className = 'card';

    let img = document.createElement('img');
    img.src = images[i].src;
    img.alt = images[i].alt;
    card.appendChild(img);

    var text = document.createElement('div');
    text.className = 'card-text';
    text.textContent = images[i].text;
    card.appendChild(text);

    card.addEventListener('click', function () {
        var text = this.querySelector('.card-text');
        text.style.display = text.style.display === 'none' ? 'block' : 'none';
    });
    gallery.appendChild(card);
}