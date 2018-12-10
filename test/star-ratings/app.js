const ratings = {
    sony: 4.7,
    samsung: 3.4,
    vizio: 2.3,
    panasonic: 3.6,
    phillips: 4.1,
    apple: 5.4,
    benz: 1.3
}

const maxStars = 5;
let product;

// ElEMENTS
const productSelect = document.querySelector('#product-select');
const ratingInput = document.querySelector('#rating-num');
const productForm = document.querySelector('#product-form');

// EVENTS
document.addEventListener('DOMContentLoaded', getRatings);
productSelect.addEventListener('change', updateProduct);
ratingInput.addEventListener('blur', updateRating);
// productForm.addEventListener('submit', updateRating);

// FUNCTIONS
populateForm();
buildRatingList();

function buildRatingList() {
    const ratingList = document.querySelector('.items');

    for(let brand in ratings) {
        // build the li component
        let listing = document.createElement('li');
        listing.className = brand;
        // span item
        let listingName = document.createElement('span');
        listingName.className = 'item-name';
        listingName.textContent = `${brand.charAt(0).toUpperCase() + brand.substring(1)} TV`;
        // product score
        let productScore = document.createElement('div');
        productScore.className = 'product-score';
        productScore.innerHTML = `
            <div class="stars-outer">
                <div class="stars-inner"></div>
            </div>
            <span class="number-rating"></span>
        `;
        
        listing.appendChild(listingName);
        listing.appendChild(productScore);
        ratingList.appendChild(listing);
    }

    getRatings();
}

function populateForm() {
    const select = document.querySelector('#product-select');

    for(let brand in ratings) {
        let option = document.createElement('option');
        option.value = brand;
        option.textContent = brand.charAt(0).toUpperCase() + brand.substring(1);
        select.appendChild(option);
    }
}

// get the current ratings
function getRatings() {
    for(let brand in ratings) {
        // calculate a percentage value
        const starPrecentage = (ratings[brand] / maxStars) * 100;
        
        // round to the nearest 10
        const starRounded = `${Math.round(starPrecentage/10) * 10}%`;

        let brandItem = document.querySelector(`.${brand}`);
        brandItem.querySelector('.stars-inner').style.width = starRounded;
        brandItem.querySelector('.number-rating').innerHTML = ratings[brand];
    }
}

function updateProduct(e) {
    product = e.target.value;
    ratingInput.disabled = false;
    ratingInput.value = ratings[product];
}

function updateRating(e) {
    const rating = ratingInput.value;

    if(rating > 5 || rating < 0) {
        // display error message
        document.querySelector('.error-message').textContent = 'Please input a number between 0 and 5.';
        setTimeout(() => {
            document.querySelector('.error-message').textContent = '';
        }, 3000);
        return;
    } 

    
    ratings[product] = parseFloat(rating).toFixed(1);
    getRatings();
    productForm.reset();
    ratingInput.disabled = true;
    e.preventDefault();
}