var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 3000);

function changeimg(url) {
    document.getElementById('section2c__container').style.background = url;
    document.getElementById('elt1').style.backgroundImage = 'none';
    document.getElementById('elt2').style.backgroundImage = 'none';
    document.getElementById('elt3').style.backgroundImage = 'none';
    document.getElementById('elt4').style.backgroundImage = 'none';
}
function closeimg() {
    document.getElementById('section2c__container').style.background = 'none';
    document.getElementById('elt1').style.backgroundImage =
        'url(/images/img_index/design-banner.webp)';
    document.getElementById('elt2').style.backgroundImage =
        'url(/images/img_index/development-banner.webp)';
    document.getElementById('elt3').style.backgroundImage =
        'url(/images/img_index/digital-banner.webp)';
    document.getElementById('elt4').style.backgroundImage =
        'url(/images/img_index/technical-banner.webp)';
}
