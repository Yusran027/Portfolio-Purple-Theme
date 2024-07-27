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



// animasi ombak project section

document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.project .row .container .item');
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show'); // Remove class if out of view
        }
      });
    },
    { threshold: 0.1 } // Trigger animation when 10% of the element is visible
  );

  items.forEach((item) => {
    observer.observe(item);
  });
});

// animasi ombak  serviecess section
document.addEventListener('DOMContentLoaded', function () {
  const col1Items = document.querySelectorAll('.services .row .col-1 .card');
  const col2Items = document.querySelectorAll('.services .row .col-2 .card');
  
  // Menggabungkan NodeList menjadi satu array
  const allItems = [...col1Items, ...col2Items];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    },
    { threshold: 0.1 }
  );

  allItems.forEach((card) => {
    observer.observe(card);
  });
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal with animation
btn.onclick = function() {
  modal.style.display = "block";
  setTimeout(function() {
    modal.querySelector('.modal-content').classList.add('show');
  }, 10);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.querySelector('.modal-content').classList.remove('show');
  setTimeout(function() {
    modal.style.display = "none";
  }, 500);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.querySelector('.modal-content').classList.remove('show');
    setTimeout(function() {
      modal.style.display = "none";
    }, 500);
  }
}


// animasi skill muncul dari kiri ke kanan 
document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.skills .row .tools .isi-tool');
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show'); // Remove the class if not in view
        }
      });
    },
    { threshold: 0.1 }
  );

  items.forEach((item) => {
    observer.observe(item);
  });
});
