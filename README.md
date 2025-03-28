# Style Loom - Online Clothing Store

[Live Demo](https://style-loom.netlify.app/)

## Overview

Style Loom is an e-commerce platform offering a variety of clothing for men, women, and unisex categories. Users can browse, purchase, and manage their orders seamlessly.

## Features

1. Browse a wide collection of clothing items.
2. Filter products by category (Men, Women, Unisex).
3. Add items to cart and checkout securely.
4. User authentication (Sign up, Login, Logout).
5. Order tracking and history.
<!-- 6. Admin panel for managing products and orders.   -->

## Tech Stack

### Frontend

- React
- Redux Toolkit
- React Router
- Styled Components
- Tailwind CSS
- Framer Motion
- React Query
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication & Security

- JSON Web Tokens (JWT)
- bcryptjs
- Helmet
- Express Rate Limit
- Express Validator
- Express Mongo Sanitize

### Other Dependencies

- Cloudinary (Image Hosting)
- Multer (File Uploads)
- SendGrid (Email Service)
- Day.js (Date Formatting)
- Nanoid (Unique ID Generation)
- Cookie Parser

## Setup Instructions

### 1. Clone the Repository

Clone the repository to your local machine.

### 2. Install Dependencies

npm install

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the necessary environment variables:

MONGO_URI=your_mongodb_uri  
JWT_SECRET=your_jwt_secret  
CLOUDINARY_CLOUD_NAME=your_cloudinary_name  
CLOUDINARY_API_KEY=your_cloudinary_api_key  
CLOUDINARY_API_SECRET=your_cloudinary_api_secret  
SENDGRID_API_KEY=your_sendgrid_api_key

### 4. Start the Development Server

#### Backend

npm run dev

#### Frontend

cd client  
npm run dev

## Project Scripts

| Command                      | Description                                   |
| ---------------------------- | --------------------------------------------- |
| npm run setup-production-app | Installs dependencies and builds the frontend |
| npm run start                | Starts the backend server                     |
| npm run dev                  | Runs the backend in development mode          |
| npm run build                | Builds the project for production             |
| npm run preview              | Serves the production build locally           |

## License

This project is licensed under the **ISC License**.
