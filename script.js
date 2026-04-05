//Cursor animation
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');

let rx = 0, ry = 0, cx = 0, cy = 0;
document.addEventListener('mousemove', e => {
    cx = e.clientX; cy = e.clientY;
    cursor.style.left = cx + 'px';
    cursor.style.top = cy + 'px';
});

function animRing() {
    rx += (cx - rx) * 0.12;
    ry += (cy - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
}
animRing();
