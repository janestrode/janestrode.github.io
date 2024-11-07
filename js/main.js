const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pics = ["../img/dog1.JPG", "../img/dog2.JPG", "../img/dog3.JPG", "../img/dog4.JPG", "../img/dog5.JPG"]
/* Declaring the alternative text for each image file */
const alts = ["pic 5","pic 4", "pic 3", "pic 2", "pic 1"]

/* Looping through images */
for (let i=0; i < 5; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', pics[i]);
    newImage.setAttribute('alt', alts[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", ()=>{
        displayedImage.setAttribute('src', pics[i]);
        displayedImage.setAttribute('alt', alts[i]);
    });
}


/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', ()=>{
    const button = btn.getAttribute('class');
    if (button == 'dark'){
        btn.setAttribute('class', 'light');
        btn.textContent = 'lighten';
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'darken';
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
});