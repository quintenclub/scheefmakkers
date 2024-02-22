document.querySelectorAll('a[href^="#"]').forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(e.target.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
        window.trigger('scroll');
    });
});
let nodes = document.querySelectorAll('.footernavfixed');
if (window.scrollY < 128 && document.body.offsetHeight > window.innerHeight) {
    nodes.forEach(node => {
        node.classList.add('footernavfixed--hidden');
    });
}
let whenScrolling = () => {
    nodes.forEach(node => {
        if (window.scrollY < 128) {
            node.classList.add('footernavfixed--hidden');
        } else {
            node.classList.remove('footernavfixed--hidden');
        }
    });
};
window.addEventListener('scroll', whenScrolling);
