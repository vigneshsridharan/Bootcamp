document.querySelector('header').classList.add('breed-header');
const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
const select = document.querySelector('.breeds');
const img = document.querySelector('.dog-img');
const spinner = document.querySelector('.spinner');

function init() {
    fetch(BREEDS_URL)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject);

        for (let i = 0; i < breedsArray.length; i++) {
            const option = document.createElement('option');
            option.value = breedsArray[i];
            option.innerText = breedsArray[i];
            select.appendChild(option);
        }
    });
}

select.addEventListener('change', function(event) {
    //Make the url
    const breedUrl = `https://dog.ceo/api/breed/${event.target.value}/images/random`;    
    // fetch fom api the url
    getDoggo(breedUrl);
    
   
});

function getDoggo(url) {
    //Show the loading Spinner
    spinner.classList.add('show');
    img.classList.remove('show');
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        img.src = data.message;
        img.style.borderRadius = '10px';
    });
}

img.addEventListener('load', function() {
    //Remove the loading Spinner
    spinner.classList.remove('show');
    img.classList.add('show');
});

init();


// const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

// function addDoggo() {
//     //show loading spinner
//     const span = document.createElement('span');
//     const img = document.createElement('img');
//     img.src = '🐶';
//     img.alt = 'dog face';

//     document.querySelector('span')
//         .appendChild(img);

//     fetch(BREEDS_URL).then(response => {
//         return response.json()
//     })
//     .then(data => {
//         const img = document.createElement('img');
//         img.src = data.message;
//         img.alt = 'Cute Doggo!!!'
    
//         document.querySelector('.doggos')
//             .appendChild(img);
    
//         //stop showing the loadingspinner    
//     });

// }

// document.querySelector('.add-doggo')
//     .addEventListener('click', addDoggo);