document.querySelectorAll('.service-box').forEach(box => {
    box.addEventListener('click', () => {
        const dropdown = box.querySelector('.dropdown-content');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });
});

document.querySelectorAll('.learn-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById('dialog-overlay').style.display = 'block';
        document.getElementById('dialog-box').style.display = 'block';
    });
});

document.getElementById('close-btn').addEventListener('click', () => {
    document.getElementById('dialog-overlay').style.display = 'none';
    document.getElementById('dialog-box').style.display = 'none';
});
document.getElementById('close-btn').addEventListener('click', () => {
    window.location.href = 'index.html'; // Navigate back to the home page
});
