# Simple Counter Application

This repository contains a simple web-based counter application that allows users to increase, decrease, or reset a numeric counter through a user-friendly interface. The application dynamically updates the displayed count and changes the color of the number based on its value.

## Features

- **Increment the counter**: Increases the count by one.
- **Decrement the counter**: Decreases the count by one.
- **Reset the counter**: Resets the count to zero.
- **Dynamic color updates**: 
  - Positive numbers are displayed in green.
  - Negative numbers are displayed in red.
  - Zero is displayed in a neutral gray.

## How It Works

The application uses plain JavaScript to manage user interactions and DOM manipulations. Here's a brief rundown of its structure:

1. **Counter Initialization**:
   - The counter starts at zero.

2. **DOM Selection**:
   - The counter value is displayed in an HTML element with the ID `value`.
   - Buttons are classified with a class `btn` and respond to click events.

3. **Event Handling**:
   - Clicking on the buttons triggers event handlers that update the counter based on the button's class (`increase`, `decrease`, or a default class for reset).
   - The display color and text content are updated in real-time to reflect changes in the counter.

## Setup

To run this project locally:

1. Clone this repository.
2. Open the `index.html` file in a web browser.

## HTML Structure

The necessary HTML to use this script effectively would look something like this:

```html
<div id="counter">
  <span id="value">0</span>
  <button class="btn increase">Increase</button>
  <button class="btn decrease">Decrease</button>
  <button class="btn">Reset</button>
</div>
```
![image](https://github.com/chavez62/Counter-app-JS/assets/67764701/b1e3a316-6c15-4734-8eef-f0dc8639997d)
