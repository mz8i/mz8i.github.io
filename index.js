var a10n = new Abbreviation('logo-a10n', false, "ziarkowski", 100);

setTimeout(function() {
    a10n.collapse();
}, 1000);

var logo = document.getElementById('main-logo');

logo.onmouseenter = function() {
    a10n.expand();
};

logo.onmouseleave = function() {
    a10n.collapse();
};