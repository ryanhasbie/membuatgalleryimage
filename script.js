const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumb = document.querySelectorAll('.thumbs');

container.addEventListener('click', function (e) {
    if (e.target.className == 'thumbs') {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');

        setTimeout(function () {
            jumbo.classList.remove('fade');
        }, 500);

        thumb.forEach(function (t) {
            t.className = 'thumbs';
        });

        e.target.classList.add('active');
    }
});