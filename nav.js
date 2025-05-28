// Navbar functionality
function toggleSearch() {
  const searchBar = document.getElementById('searchBar');
  if (searchBar.style.display === 'block') {
    searchBar.style.display = 'none';
  } else {
    searchBar.style.display = 'block';
    // Close menu if open
    document.getElementById('mobileMenu').style.right = '-300px';
  }
}

function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu.style.left === '0px') {
    menu.style.left = '-300px';
  } else {
    menu.style.left = '0px';
    // Close search if open
    document.getElementById('searchBar').style.display = 'none';
  }
}

// Close search/menu when clicking outside
document.addEventListener('click', function(e) {
  const searchBar = document.getElementById('searchBar');
  const menu = document.getElementById('mobileMenu');
  const searchButton = document.querySelector('.search-button');
  const menuButton = document.querySelector('.menu-button');
  
  if (!searchBar.contains(e.target) && e.target !== searchButton) {
    searchBar.style.display = 'none';
  }
  
  if (!menu.contains(e.target) && e.target !== menuButton) {
    menu.style.left = '-300px';
  }
});

// Adjust body padding to account for fixed navbar
document.body.style.paddingTop = '60px';