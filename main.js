const mobileMenuContainer = document.querySelector('.mobile-menu-container');
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const menuCloseIcon = document.querySelector('.menu-close-icon');


mobileMenuIcon .addEventListener('click', function() {
    mobileMenuContainer.classList.add('active');
});

menuCloseIcon .addEventListener('click', function() {
    mobileMenuContainer.classList.remove('active');
});


document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    const message = document.getElementById('no-right-click-message');
    if (message) {
        message.style.display = 'block';
        setTimeout(() => {
            message.style.display = 'none';
        }, 2000); // Hide the message after 2 seconds
    }
});


