# Show Contents

**Show Contents** is a web application that features a dynamic image masking effect. The application reveals portions of an underlying image when the cursor moves over it, creating an interactive and engaging user experience.

## Overview

The application consists of an HTML page that displays an image with a mask that moves according to the cursor's position. The mask reveals parts of the image as the cursor moves around, providing a unique way to interact with the content.

## Features

- **Dynamic Masking**: Reveal portions of the image based on cursor movement.
- **Interactive Design**: Enhances user engagement with real-time visual effects.

## Installation

### Prerequisites

- A modern web browser

### Setup

1. **Clone the Repository**

    ```bash
    git clone https://github.com/MadhouseTwenty6/UnhideWhenNear.git
    cd UnhideWhenNear
    ```

2. **Project Structure**

    Ensure the following files are in the project directory:
    - `Index.html` (the HTML file)
    - `Style.css` (the CSS stylesheet)
    - `Script.js` (the JavaScript file)
    - `Censor.png` (the image to be masked)
    - `Uncensor.png` (the image used for the mask)

3. **Run the Application**

    Open the `Index.html` file in a web browser to view and interact with the application.

## Usage

1. **Interactive Masking**

    Move the cursor over the image to see the masking effect in action. The mask will follow the cursor and reveal parts of the underlying image.

## Files

- **`Index.html`**: Contains the HTML structure and links to the CSS and JavaScript files.
- **`Style.css`**: Defines the styles for the image, mask, and other elements.
- **`Script.js`**: Contains the JavaScript code that handles the cursor movement and mask positioning.
- **`Censor.png`**: The image that is blurred and masked.
- **`Uncensor.png`**: The image used for the mask effect.

## Code Explanation

- **HTML (`Index.html`)**:
  - Displays a blurred image with a mask overlay that reveals parts of the image based on cursor position.

- **CSS (`Style.css`)**:
  - Styles the image and mask elements.
  - Positions the mask absolutely and sets up the size and appearance.

- **JavaScript (`Script.js`)**:
  - Handles the cursor movement to update the position of the mask.
  - Uses a debounce function to optimize performance by limiting the rate of updates.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a Pull Request for review.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [MDN Web Docs](https://developer.mozilla.org/) - For documentation and resources on web technologies.
- [GitHub](https://github.com/) - For hosting the repository.

---

Feel free to customize the sections to better fit your project's specifics. Ensure all paths and URLs are correct, and adjust instructions based on your development environment.
