document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('mouseup', function(event) {
        if (event.button === 3) {
            window.location.href = 'pagina1.html';
        }
    });
});