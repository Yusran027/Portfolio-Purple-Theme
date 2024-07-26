//Toggle Class Active untuk hamburger menu

const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger diklik

document.querySelector('#hamburger-menu').onclick = (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault(); // Hanya diperlukan jika Anda ingin menghentikan perilaku default dari tombol pencarian
};

// klik diluar sidebar untuk menghilangkan nav
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const scb = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
  if (!scb.contains(e.target) && !searchForm.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});