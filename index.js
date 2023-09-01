document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const heightInput = document.querySelector('#height');
    const weightInput = document.querySelector('#weight');
    const results = document.querySelector('.results');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            results.innerHTML = 'Please enter valid height and weight.';
        } else {
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);
            results.innerHTML = `Your BMI: <span>${bmi}</span>`;
        }
    });
});
