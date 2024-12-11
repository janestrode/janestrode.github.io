const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pics = ["../final/img/mainimage (5)","../final/img/days_label.png","../final/img/days (1).png","../final/img/days (2).png","../final/img/days (3).png","../final/img/days (4).png","../final/img/days (5).png","../final/img/days (6).png"]
/* Declaring the alternative text for each image file */
const alts = ["characters","michael", "gob", "tobias", "lindsay"]

/* Looping through images */
for (let i=0; i < pics.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', pics[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", ()=>{
        displayedImage.setAttribute('src', pics[i]);
        displayedImage.setAttribute('alt', alts[i]);
    });
}



