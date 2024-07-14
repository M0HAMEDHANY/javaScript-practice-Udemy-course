
function calculateBMI(weight, height) {
    return (weight / (height * height)).toFixed(2);
}


function displayResult() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meter

    if (isNaN(weight) || isNaN(height)) {
        alert('Please enter valid numbers for weight and height.');
        return;
    }

    const bmi = calculateBMI(weight, height);
    document.getElementById('result').innerText = `Your BMI is ${bmi}`;
}

// Event listener for the button
document.getElementById('calculateBtn').addEventListener('click', displayResult);