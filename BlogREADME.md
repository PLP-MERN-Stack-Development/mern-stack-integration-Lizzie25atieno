# MERN Blog Application

## Project Overview
This is a full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** blog application that allows users to create, view, edit, and delete blog posts. Users can also view categories, and registered users can create posts after logging in. The application demonstrates:

- RESTful API with Express.js and MongoDB
- React front-end with component architecture
- Full CRUD functionality for posts
- User authentication and protected routes
- Form validation and error handling
- Advanced features like comments (basic implementation)

---

## Setup Instructions

### Prerequisites
- Node.js v18+  
- MongoDB (local installation or Atlas account)  
- npm (or yarn)  

### Clone the Repository

```
git clone <YOUR_REPO_URL>
cd mern-blog
```

## Server setup
```
cd server
npm install
```
1. Create a .env file based on .env.example with:
```
PORT=5000
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT secret>
```
2. Start the server:
```
npm run dev
```
Server runs on http://localhost:5000

## Client Setup
```
cd client
npm install
```
1. Create a .env file based on .env.example with:
```
VITE_API_URL=http://localhost:5000/api
```
2. Start the client:
```
npm run dev
```
Client runs on http://localhost:5173

## API Documentation
1. Posts
```
| Method | Endpoint         | Description                   |
| ------ | ---------------- | ----------------------------- |
| GET    | `/api/posts`     | Get all posts                 |
| GET    | `/api/posts/:id` | Get a single post by ID       |
| POST   | `/api/posts`     | Create a new post (protected) |
| PUT    | `/api/posts/:id` | Update a post (protected)     |
| DELETE | `/api/posts/:id` | Delete a post (protected)     |
```
2. Categories
```
| Method | Endpoint          | Description                       |
| ------ | ----------------- | --------------------------------- |
| GET    | `/api/categories` | Get all categories                |
| POST   | `/api/categories` | Create a new category (protected) |
```
3. Auth
```
| Method | Endpoint             | Description                    |
| ------ | -------------------- | ------------------------------ |
| POST   | `/api/auth/register` | Register a new user            |
| POST   | `/api/auth/login`    | Login a user and receive token |
```

## Features Implemented

- User Authentication: Users can register and login.
- CRUD Posts: Create, read, update, delete blog posts.
- Categories: View all categories and assign categories to posts.
- Protected Routes: Only logged-in users can create, update, or delete posts.
- Validation: Form validation using express-validator.
- Error Handling: Backend API returns proper error messages.
- Comments (Basic): Users can add comments to posts.
- Slug URLs: Each post has a URL-friendly slug.
- Frontend Hooks: Custom hooks for authentication and fetching posts.
- Responsive UI: Clean and minimal React layout.

## Screenshots of the Application

1. Login Page
2. New Posts Page
3. Categories Page
4. Post List Page

