# paperjs-spring-effect

## Overview
This project utilizes Paper.js to create an interactive visual effect using an SVG file (`spring.svg`). The canvas dynamically adjusts to the full width of the screen, providing a responsive experience.

## Project Structure
```
paperjs-spring-effect
├── assets
│   └── spring.svg          # SVG input for the Paper.js sketch
├── css
│   └── style.css          # Styles for the HTML page
├── js
│   └── sketch.js          # Paper.js sketch code
├── index.html             # Main HTML page
└── README.md              # Project documentation
```

## Setup Instructions
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd paperjs-spring-effect
   ```

2. **Open `index.html`** in your web browser to view the Paper.js sketch in action.

3. **Modify the SVG**:
   - You can replace `assets/spring.svg` with your own SVG file to see different effects.

## How It Works
- The `index.html` file sets up the canvas and includes the necessary Paper.js library along with custom scripts and styles.
- The `style.css` file ensures that the canvas takes the full width of the screen and applies any additional styling.
- The `sketch.js` file contains the logic for loading the SVG, applying effects, and handling user interactions such as mouse movements and window resizing.

## Dependencies
- [Paper.js](http://paperjs.org/) - A vector graphics scripting framework that runs on top of the HTML5 Canvas. Make sure to include the Paper.js library in your `index.html`.

## License
This project is licensed under the MIT License. Feel free to use and modify it as you wish.