const clear = document.querySelector('.clear');
const search = document.querySelector('.search input');

clear.addEventListener('click', function() {
    search.value = '';
});