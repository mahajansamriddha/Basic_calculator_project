// Select all the buttons
const buttons = document.querySelectorAll('input[type="button"]');
const result = document.getElementById('result');

// Event listener for button clicks
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const value = e.target.value;
        
        if (value === 'C') {
            // Clear the result
            result.value = '';
        } else if (value === '=') {
            // Evaluate the expression and display the result
            try {
                result.value = eval(result.value);
            } catch (error) {
                result.value = 'Error';
            }
        } else {
            // Append the clicked value to the result input field
            result.value += value;
        }
    });
});
