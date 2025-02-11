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

document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});