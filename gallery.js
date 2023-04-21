let images = document.querySelectorAll('img');
let wraper = document.getElementById('wraper');
let imgwraper = document.getElementById('fullimg');
let close = document.querySelector('span');

images.forEach((img, index) => {
    img.addEventListener('click', () =>{
        openModel(`images/ass${index}.jpg`);
    });
});

close.addEventListener("click", () => (wraper.style.display = 'none'));


function openModel(pic) {
    wraper.style.display = 'flex';
    imgwraper.src = pic;
}