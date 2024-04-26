// Function to validate user input
function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get user input values
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var zipCode = document.getElementById('zipCode').value.trim();

    // Combine first name and last name
    var fullName = firstName + ' ' + lastName;

    // Check if full name has more than 20 characters
    if (fullName.length > 20) {
        alert('Full name cannot exceed 20 characters.  Please enter a short name');
        return; // Stop further execution
    }

    // check if zip code contains 5 digits
    if (zipCode.length != 5 || isNaN(zipCode)){
        alert('Zip cpde must contain 5 digits.  Please enter a valid zip code');
        return; // Stop further execution
    } 
    alert("You're signed in!")
}




    

