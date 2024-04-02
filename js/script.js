// Toggle Class Active Untuk Hamburger Menu
const navbarNav = document.querySelector
('.navbar-nav');
// Ketika Hamburger Menu Di Klik
document.querySelector('#hamburger-menu').
onclick = () => {
    navbarNav.classList.toggle('active');
};

// Toggle Class Active Untuk Search From
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box')

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle ('active');
    searchBox.focus();
    e.preventDefault();
};

// Toggle Class Active Untuk Shopping Cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle ('active');
    e.preventDefault();
};

// Klik Di Luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function(e) {
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    if(!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});


// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const ItemDetailButtons = document.querySelectorAll('.item-detail-button');

ItemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
    };
});


// Klik Tombol Close
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
};

// Klik Di Luar Modal
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    };
};

alpine.store ('cart', {
    items: cappucino, latte, americano,
    total: 0,
    quantity: 0,
    add(newItem) {
        this.items.push(newItem);
        console.log(this.items);
    }
});
