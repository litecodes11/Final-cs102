// Function to hightlight table rows on hover
function highlightRows() {
    const rows = document.querySelectorAll('table tr');
    rows.forEach(row => {
        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = '#fOfOfO'; // Change background color on hover
        });
        row.addEventListener('mouseout', () => {
            row.style.backgroundColor = ''; // Reset background color when mouse leaves
        });
    });
}

// Function to toggle navigation menu on small screens
function toggleNav() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show-nav'); // Toggle 'show nav class' class on nav element
}

// Event listener for toggling navigation menu on click
document.querySelector('.menu-toggle').addEventListener('click', toggleNav);

// Call the highlightRows function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    highlightRows();
});