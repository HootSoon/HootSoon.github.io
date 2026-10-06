// Preserve fragments and query strings when following an old project URL.
const destination = document.querySelector('a[href]').getAttribute('href');
window.location.replace(destination + window.location.search + window.location.hash);
