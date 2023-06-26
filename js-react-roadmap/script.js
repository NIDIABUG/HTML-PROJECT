
// Function that handle the dropdown option
const dropdown = document.getElementById('myDropdown');
dropdown.addEventListener('change', function () {
    const selectedOption = dropdown.options[dropdown.selectedIndex].value;

    if (selectedOption !== '') {
        window.location.href = selectedOption;
    }
});

// Function that handle the go back button
function goBack() {
    window.history.back();
}