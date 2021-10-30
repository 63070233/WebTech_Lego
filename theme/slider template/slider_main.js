let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.items');

const end = () => {
    isDown = false;
    slider.classList.remove('active');
}

const start = (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
}

const move = (e) => {
    if (!isDown) return;

    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    const dist = (x - startX);
    slider.scrollLeft = scrollLeft - dist;

    if (slider.scrollLeft != 30) {
        document.getElementById("left").disabled = false;
    }
    if (slider.scrollLeft < 40) {
        document.getElementById("left").disabled = true;
    }
    if (slider.scrollLeft != 250) {
        document.getElementById("right").disabled = false;
    }
    if (slider.scrollLeft > 250) {
        document.getElementById("right").disabled = true;
    }
}


(() => {
    slider.addEventListener('mousedown', start);
    slider.addEventListener('touchstart', start);

    slider.addEventListener('mousemove', move);
    slider.addEventListener('touchmove', move);

    slider.addEventListener('mouseleave', end);
    slider.addEventListener('mouseup', end);
    slider.addEventListener('touchend', end);
})();

function slideLeft() {
    document.getElementById("left").disabled = true;
    document.getElementById("right").disabled = false;
    slider.scrollLeft = -200;
}

function slideRight() {
    document.getElementById("right").disabled = true;
    document.getElementById("left").disabled = false;
    slider.scrollLeft = 800;
}

function check() {
    if (slider.scrollLeft != 30) {
        document.getElementById("left").disabled = false;
    }
    if (slider.scrollLeft < 40) {
        document.getElementById("left").disabled = true;
    }
    if (slider.scrollLeft != 250) {
        document.getElementById("right").disabled = false;
    }
    if (slider.scrollLeft > 250) {
        document.getElementById("right").disabled = true;
    }
}
