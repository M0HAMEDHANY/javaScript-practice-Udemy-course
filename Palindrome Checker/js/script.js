const check = document.getElementById('check');
const palindrome = document.getElementById('palindrome');
const result = document.getElementById('result');

function checkPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

check.addEventListener('click', () => {
    result.innerText = checkPalindrome(palindrome.value);
})