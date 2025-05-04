const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const filenames = [
    "pic1",
    "pic2",
    "pic3",
    "pic4",
    "pic5"
];

/* Declaring the alternative text for each image file */

const alternativeTexts = {
    pic1: "Closeup of a human eye",
    pic2: "Rock that looks like a wave",
    pic3: "Purple and white pansies",
    pic4: "Section of wall from a pharoah's tomb",
    pic5: "Large moth on a leaf"
}

/* Looping through images */

for (filename of filenames) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `./images/${filename}.jpg`);
    newImage.setAttribute('alt', alternativeTexts[filename]);
    thumbBar.appendChild(newImage);
}

function changeImage (evt) {
    const src = evt.target.src;
    const alt = evt.target.alt;
    displayedImage.setAttribute('src', src);
    displayedImage.setAttribute('alt', alt);
}

thumbBar.addEventListener("click", changeImage)

/* Wiring up the Darken/Lighten button */

function darken () {
    if (btn.textContent === "Darken") {
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        btn.textContent = "Lighten";
    } else {
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)"
        btn.textContent = "Darken";
    }

    /* btn.textContent === "Darken" 
        ? (
            overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)",
            btn.textContent = "Lighten"
        ) : (
            overlay.style.backgroundColor = "rgba(0, 0, 0, 0)",
            btn.textContent = "Darken"
        ); */
}

btn.addEventListener("click", darken)