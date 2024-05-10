// Set initial value to zero
let count = 0;

// Select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// Iterate over each button element
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;

        if (styles.contains('decrease')) {
            // If the button has class 'decrease', decrement the count
            count--;
        } else if (styles.contains('increase')) {
            // If the button has class 'increase', increment the count
            count++;
        } else {
            // If the button has neither 'increase' nor 'decrease', reset count
            count = 0;
        }

        // Change the color of the counter value based on its state
        if (count > 0) {
            // If count is positive, set text color to green
            value.style.color = 'green';
        }
        if (count < 0) {
            // If count is negative, set text color to red
            value.style.color = 'red';
        }
        if ( count === 0) {
            // If count is zero, set text color to a neutral grey
            value.style.color = '#222';
        }
        // Update the display with the new count
        value.textContent = count;
    })
})