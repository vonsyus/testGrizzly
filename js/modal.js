const modal = document.getElementById('modal');
const btn = document.getElementById('consultation');
const close = document.querySelector('div.close');

btn.addEventListener('click', function() {
    modal.style.display = 'block';
});

close.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});