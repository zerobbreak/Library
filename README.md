# Library Management System

Welcome to the Library Management System! This web-based application allows users to organize and manage their personal library collection. Users can add books with details such as title, author, and the number of pages. They can also mark books as "Read" or "Not Read" to keep track of their reading progress.


## Features

- **Add Books:** Users can easily add new books to their library by providing the title, author, and number of pages. The application validates the input to ensure all required fields are filled before adding a book.

- **Read Status:** Each book in the library can be marked as "Read" or "Not Read" using a convenient checkbox. Users can update the status of any book at any time, making it effortless to keep track of their reading list.

- **Display Book Cards:** The application displays all the books as attractive cards. Each card shows essential information about the book, such as the title, author, number of pages, and the "Read" status. Users can easily scan through their library and identify the books they have read or plan to read.

- **Remove Books:** If users decide to remove a book from their library, they can do so with just a click. The system updates the library, removing the selected book and rearranging the cards accordingly.

## Technologies Used

- **HTML:** Provides the structure and layout for the Library Management System.

- **CSS:** Adds styling and responsiveness to create an appealing and user-friendly interface.

- **JavaScript:** Handles the application's logic, including adding books, displaying cards, updating read status, and removing books from the library.

## HTML Structure

The HTML structure is organized into sections, each serving a specific purpose:

- `header`: Displays the title of the Library Management System to provide context and branding.

- `button-popup`: Contains the "Add Book" button to open the book entry pop-up, inviting users to add new books.

- `popupContainer`: This pop-up form enables users to input details and add new books to the library.

- `display-grid__container`: This container displays all the book cards, providing an organized view of the entire library collection.

## CSS Styling

The CSS file (`style.css`) defines the styling for the Library Management System. It creates an engaging and visually appealing layout, enhances user experience with responsive design, and ensures that the application is accessible across various devices.

## JavaScript Logic

The JavaScript file (`script.js`) powers the interactivity and functionality of the Library Management System. It handles various events, such as adding books, displaying cards, updating the "Read" status of books, and removing books from the library. The core logic is centered around the `Book` constructor and its prototype method to toggle the "Read" status.

## Improvements

Although the current implementation works efficiently, there are potential improvements that can enhance the system further:

1. **Data Persistence:** Implement a data storage mechanism to save the library even after the page is refreshed, ensuring users' book collections are not lost.

2. **User Authentication:** Add user authentication features to enable multiple users to have separate libraries with personalized book collections.

3. **Search and Sorting:** Introduce search and sorting functionalities to help users find specific books or organize their library based on various criteria.

4. **Book Details Expansion:** Create an option to view detailed book information when clicking on a book card, providing a richer experience for users.

5. **Themes and Customization:** Allow users to choose from different themes or customize the appearance of the application to suit their preferences.

6. **Book Covers and Images:** Allow users to upload book covers or add images to visually enrich their library.

## License

**Note:** The implementation provided here assumes that the project is run locally and does not involve server-side logic or database storage. If you plan to deploy the project to a production environment, additional considerations and security measures might be necessary.