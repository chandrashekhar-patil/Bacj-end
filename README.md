# Language-Selection ⭐
The application can be accessed at the following URLs:
- **Website**: **[https://language-selection-fr-git-ee7c81-chandrashekhar-patils-projects.vercel.app/](https://language-selection-fr-git-ee7c81-chandrashekhar-patils-projects.vercel.app/)**

## Description
**Language-Selection** is a full-stack web application built with **Node.js**, **Express.js**, and **static HTML/CSS/JS**. The project includes:
- **Back-End API**: An Express.js API that handles language-based greetings and serves static files.
- **Front-End**: A static web page that interacts with the API to display greeting messages.

This project demonstrates a simple yet effective full-stack setup.

## Features
- **Back-End API**: Provides greetings in multiple languages such as English, French, and Hindi.
- **Front-End**: A simple static web page to interact with the API and display the greetings.
- **CORS Enabled**: Cross-Origin Resource Sharing (CORS) is enabled for client-side interaction.

## Technologies Used
- **Back-End**: Node.js, Express.js
- **Front-End**: HTML, CSS, JavaScript
- **Data Storage**: JSON file (`languages.json`) for language data
- **Deployment**: Render.com for full-stack deployment
## Project Structure

- `front-end/`:
  - Contains the static files for the front-end application (`main.html`, `script.js`, `main.css`).
  
- `back-end/`:
  - Contains the server-side code (`main.js`), language data (`languages.json`), and other necessary files for handling API requests.

## API Endpoints

### **GET /hello**
This endpoint returns a greeting message based on the specified language.

#### Query Parameters:
- `language`: The language of the greeting message (e.g., `English`, `French`, `Hindi`).

#### Request:
```http
GET http://localhost:5000/hello?language=English
Response:
{
  "message": {
    "ID": "EN101",
    "msgText": "Hello world"
  }
}
```
## Error Handling

This section describes how errors are managed in the project and outlines the potential errors that can occur when interacting with the API.

### Error Responses

1. **Missing `language` Query Parameter**
   - **Description**: If the `language` query parameter is not provided in the request, the server will return a `400 Bad Request` response with an error message indicating that the `language` query parameter is required.

   **Example Request**:
   ```http
   GET http://localhost:5000/hello
   {
   "error_message": "The 'language' query parameter is required"
   }
   ```
   **Example Request**:
   ```http
   GET http://localhost:5000/hello?language=Garman
   {
   "error_message": "The requested language is not supported"
   }
   ```
## Deployment ✨

### Deployment to Render.com

- The project is deployed on **Render** for both front-end and back-end services.
- **Back-End** is deployed using **Node.js** with `main.js` as the entry point.
- **Front-End** is hosted as static files in the `/front-end/public` directory.

The application can be accessed at the following URLs:
- **Project URL**: **[https://language-selection-fr-git-ee7c81-chandrashekhar-patils-projects.vercel.app/](https://language-selection-fr-git-ee7c81-chandrashekhar-patils-projects.vercel.app/)**

## Postman Collection

You can use the following Postman collection to test the API:

- **[Download the Postman Collection JSON](https://github.com/chandrashekhar-patil/Language-Section/blob/main/back-end/Postman_Request_Collection.json)**

---

