document.addEventListener('DOMContentLoaded', function() {
    const cartImages = document.querySelectorAll('.cart');

    cartImages.forEach(cartImage => {
        cartImage.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the click from propagating to the document

            const popup = this.nextElementSibling;
            const rect = this.getBoundingClientRect(); // Get the position of the cart image

            // Position the pop-up below the cart image
            popup.style.display = 'block';
            popup.style.left = rect.left + 'px';
            popup.style.top = rect.bottom + 'px';
        });
    });

    // Close the pop-up when clicking anywhere in the document
    document.addEventListener('click', function() {
        const popups = document.querySelectorAll('.popup');
        popups.forEach(popup => {
            popup.style.display = 'none';
        });
    });
});
// Get the input element and the plus and minus buttons
const input = document.querySelector('.quantityInput input');
const plusButton = document.querySelector('.quantityInput .plus');
const minusButton = document.querySelector('.quantityInput .minus');

// Add event listener to the plus button
plusButton.addEventListener('click', () => {
    // Parse the current value of the input as an integer
    let currentValue = parseInt(input.value);

    // Increment the value if it's less than the maximum value (optional)
    // In this case, we'll assume there's no maximum value, so we won't check it.

    // Increase the value and update the input
    currentValue++;
    input.value = currentValue;
});

// Add event listener to the minus button
minusButton.addEventListener('click', () => {
    // Parse the current value of the input as an integer
    let currentValue = parseInt(input.value);

    // Decrement the value if it's greater than the minimum value (0 in this case)
    if (currentValue > 0) {
        currentValue--;
    }

    // Update the input
    input.value = currentValue;
});
// Get the necessary elements
const quantityInput = document.querySelector('.quantityInput input');
const addToCartButton = document.querySelector('.addToCart');
const cartPopup = document.querySelector('.popup');

// Define the product price (replace this with the actual product price)
const productPrice = 125; // For example, the product price is $10.

// Add event listener to the "Add to cart" button
addToCartButton.addEventListener('click', () => {
    // Get the quantity value and convert it to a number
    const quantity = parseInt(quantityInput.value);

    // Calculate the total price
    const totalPrice = quantity * productPrice;

    // Update the cart popup with the new total price
    cartPopup.innerHTML = `
        <h4>Cart</h4>
        <hr>
        <div style="display:flex;flex-direction:row;    align-items: center;" class="cartItem">
        <img style="width: 50px; border-radius: 5px; padding-right:10px" src="images/image-product-1-thumbnail.jpg" alt="Sneakers">
        <p>
        Fall Limited Edition Sneakers<br>
        $125*${quantity} $${totalPrice}.00
        </p>
        <button class="delete-btn">Delete</button>
        </div>
    `;

    const deleteBtn = document.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        cartPopup.innerHTML = `
        <h4>Cart</h4>
        <hr>
        <p>Your cart is empty</p>
        `;
    })
});

// Get all imgContainer elements
const imgContainers = document.querySelectorAll('.imgContainer');

// Get the popup element
const popup = document.querySelector('.Thumbnilpopup');

// Get the BigPic element inside the popup
const popupBigPic = popup.querySelector('.BigPic');

// Function to open the popup with the clicked image
function openPopup(imageSrc) {
    imageSrc = imageSrc.replace('-thumbnail', '');
    popupBigPic.src = imageSrc; // Update the source of BigPic with the clicked image
    popup.style.display = 'flex'; // Display the popup
}

// Function to close the popup
function closePopup() {
    popup.style.display = 'none';
}

// Add click event listener to each imgContainer
imgContainers.forEach((imgContainer) => {
    const img = imgContainer.querySelector('img');
    imgContainer.addEventListener('click', () => {
        const imageSrc = img.src;
        openPopup(imageSrc); // Call the openPopup function with the clicked image source
    });
});

// Get the close icon element
const closeIcon = document.querySelector('.icon-close');

// Add click event listener to the close icon to hide the popup
closeIcon.addEventListener('click', () => {
    closePopup(); // Call the closePopup function to hide the popup
});



document.addEventListener("DOMContentLoaded", function() {
    const bigPic = document.querySelector(".bigCustom");
    const thumbnails = document.querySelectorAll(".Custom img");
    const prevBtn = document.querySelector(".btnNavigation.previous");
    const nextBtn = document.querySelector(".btnNavigation.next");
    let currentImageIndex = 0;

    function showImage(index) {
        if (index >= 0 && index < thumbnails.length) {
            let imageSrc1 = thumbnails[index].src;
            imageSrc1 = imageSrc1.replace("-thumbnail", "");
            bigPic.src = imageSrc1;
            currentImageIndex = index;
        }
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % thumbnails.length;
        showImage(currentImageIndex);
    }

    function showPreviousImage() {
        currentImageIndex = (currentImageIndex - 1 + thumbnails.length) % thumbnails.length;
        showImage(currentImageIndex);
    }

    prevBtn.addEventListener("click", showPreviousImage);
    nextBtn.addEventListener("click", showNextImage);
});


// Get references to the burger menu and side menu elements
const burgerMenu = document.querySelector('.burger-menu');
const sideMenu = document.querySelector('.side-menu');
const closeBtn = document.querySelector('.close-btn');

// Function to toggle the active class for the side menu
function toggleSideMenu() {
    sideMenu.classList.toggle('active');
}

// Event listener to open the side menu when the burger menu is clicked
burgerMenu.addEventListener('click', toggleSideMenu);

// Event listener to close the side menu when the close button is clicked
closeBtn.addEventListener('click', toggleSideMenu);