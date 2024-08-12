let cart = [];

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    displayCart();
}

function displayCart() {
    const cartList = document.querySelector('.cart-list');
    const totalAmount = document.getElementById('totalAmount');
    cartList.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartList.innerHTML += `
            <div>
                <h4>${item.name} - $${item.price} x ${item.quantity}</h4>
                <p>Subtotal: $${itemTotal.toFixed(2)}</p>
                <button onclick="removeFromCart('${item.name}')">Remove</button>
            </div>
        `;
    });

    if (cart.length === 0) {
        cartList.innerHTML = '<p>Your cart is empty.</p>';
    }

    totalAmount.innerText = total.toFixed(2);
}

function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    displayCart();
}
function SaveLater() {
    alert(`Your Product is Added Save Later for${document.getElementById('totalAmount').innerText}.`);
    cart = [];
    displayCart();
}
function applyPromoCode() {
    const promoCode = document.getElementById('promoCode').value;
    // Implement promo code logic here
    alert(`Promo code ${promoCode} applied!`);
}

function checkout() {
    alert(`Thank you for your purchase! Your total is $${document.getElementById('totalAmount').innerText}.`);
    cart = [];
    displayCart();
}

// Navigation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) target.classList.add('active');
    });
});

// Activate the Home section by default
document.querySelector('#home').classList.add('active');
