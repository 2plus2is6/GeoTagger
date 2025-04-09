var map = L.map('map').setView([48.8566, 2.3522], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([48.8566, 2.3522]).addTo(map)
    .bindPopup('Paris, France')
    .openPopup();


// Function to toggle the visibility of the dropdown content
function toggleDropdown(id) {
    const dropdownContent = document.getElementById(id);
    const arrow = dropdownContent.previousElementSibling.querySelector('.arrow');

    // Toggle visibility
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
        arrow.innerHTML = '&#9660;';
    } else {
        dropdownContent.style.display = 'block';
        arrow.innerHTML = '&#9650;';
    }
}
