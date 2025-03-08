const circle = document.querySelector ('#circle');

circle.addEventListener('mouseover', function ()
{
    if ( !circle.classList.contains('hover')) {
        circle.classList.add('hover');
    }
});

circle.addEventListener ('mouseleave', function ()
{
    if (circle.classList.contains ('hover')) {
        circle.classList.remove ('hover');
    }
});
