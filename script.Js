// script.js

// Modal control
const modal = document.getElementById('modal');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const modalTitle = document.getElementById('modalTitle');

loginBtn.onclick = function () {
  modalTitle.textContent = 'Login';
  modal.classList.remove('hidden');
};

signupBtn.onclick = function () {
  modalTitle.textContent = 'Signup';
  modal.classList.remove('hidden');
};

function closeModal() {
  modal.classList.add('hidden');
}

// Basic search functionality
function searchProduct() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const products = document.querySelectorAll('.product');

  products.forEach(product => {
    const productName = product.querySelector('h3').textContent.toLowerCase();
    if (productName.includes(searchInput)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}
