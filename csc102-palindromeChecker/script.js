function checkPalindrome() {
    let userInput = document.getElementById('userInput').value;
    let normalizedString = userInput.replace(/\s+/g, '').toLowerCase();
    let isPalindrome = normalizedString === normalizedString.split('').reverse().join('');
    let messageDisplay = document.getElementById('messageDisplay');

    if (isPalindrome) {
        messageDisplay.innerHTML = `"${userInput}" is a palindrome!`;
    } else {
        messageDisplay.innerHTML = `"${userInput}" is not a palindrome.`;
    }

    document.getElementById('userInput').value = '';
}


    

