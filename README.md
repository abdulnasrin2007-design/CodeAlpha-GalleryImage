# PixelVault Gallery

A responsive image gallery website built using **HTML, CSS, and JavaScript**. PixelVault Gallery allows users to explore images across different categories, filter images, and view them in an interactive lightbox.

## About the Project

**PixelVault Gallery** is a simple and responsive image gallery designed to organize and display images in four categories:

* Nature
* Flowers
* Animals
* Cartoons

The project focuses on creating a clean visual experience with category filtering, hover effects, responsive layouts, and an interactive image viewer.

## Features

* Responsive image gallery
* Four image categories
* All images view
* Category-based filtering
* Masonry-style gallery layout
* Image hover zoom effect
* Category overlay on images
* Interactive lightbox
* Next and previous image navigation
* Image counter in the lightbox
* Keyboard navigation

  * `Arrow Right` – Next image
  * `Arrow Left` – Previous image
  * `Escape` – Close lightbox
* Lazy loading for gallery images
* Responsive design for desktop, tablet, and mobile screens

## Technologies Used

* **HTML5** – Structure of the website
* **CSS3** – Styling, responsive design, animations, and gallery layout
* **JavaScript** – Image rendering, filtering, lightbox functionality, and navigation

## Project Structure

```text
PixelVault-Gallery/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── Images/
    ├── nature1.jpg
    ├── nature2.jpg
    ├── ...
    ├── nature8.jpg
    ├── flower1.jpg
    ├── flower2.jpg
    ├── ...
    ├── flower8.jpg
    ├── animal1.jpg
    ├── animal2.jpg
    ├── ...
    ├── animal8.jpg
    ├── cartoon1.jpg
    ├── cartoon2.jpg
    ├── ...
    └── cartoon8.jpg
```

## How It Works

### 1. Image Categories

The JavaScript program stores the available image categories and the number of images in each category.

Each image follows a naming pattern such as:

```text
nature1.jpg
flower1.jpg
animal1.jpg
cartoon1.jpg
```

The images are loaded from the `Images` folder.

### 2. Gallery Rendering

JavaScript dynamically creates the gallery cards instead of manually writing every image in the HTML file.

The gallery displays all images when the page is first opened.

### 3. Category Filtering

Users can select:

```text
All
Nature
Flowers
Animals
Cartoons
```

When a category is selected, JavaScript filters the images and displays only the selected category.

### 4. Lightbox

Clicking an image opens it in a full-screen lightbox.

The lightbox provides:

* Previous image
* Next image
* Image counter
* Close button

The navigation works according to the currently selected category.

### 5. Keyboard Navigation

The lightbox also supports keyboard controls.

| Key           | Action         |
| ------------- | -------------- |
| `Arrow Right` | Next image     |
| `Arrow Left`  | Previous image |
| `Escape`      | Close lightbox |

## Responsive Design

The gallery automatically adjusts the number of columns based on screen size.

* Large screens: 4 columns
* Medium screens: 3 columns
* Smaller screens: 2 columns
* Mobile screens: 1 column

This makes the gallery usable across different devices.

## How to Run

1. Download or clone the project.
2. Open the project folder.
3. Make sure the `Images` folder is present.
4. Make sure the image names match the names used in `script.js`.
5. Open `index.html` in a web browser.

No backend or database is required.

## Future Improvements

Some possible improvements for future versions include:

* Search functionality
* Image download option
* Image captions
* Favorite images
* Uploading custom images
* Additional image categories
* More advanced animations
* Image sorting options

## Project Goal

The goal of PixelVault Gallery is to create a visually appealing and responsive gallery while practicing **HTML structure, CSS styling, responsive layouts, JavaScript DOM manipulation, filtering, arrays, event handling, and interactive UI functionality**.

## Author

**Abdul Nasrin**

© 2026 Abdul Nasrin • PixelVault Gallery
