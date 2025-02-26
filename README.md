# Goal Grid 🎯💤🏆🥋🥬🌿

Goal Grid is a task management system built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to sign up, create and manage accounts, add, update, delete, search for notes, and pin them for easy access. The application is designed with JWT-based authentication for secure user access, making it a full-stack solution for managing daily tasks.

## Features

- **Account Management**: Users can sign up, log in, and manage their accounts.
- **Note Management**: Add, update, delete, and search notes.
- **Pinning Notes**: Pin important notes for easy access.
- **JWT Authentication**: Secure authentication using JWT tokens.
- **Search Notes**: Quickly search for notes with a user-friendly interface.
- **Responsive UI**: Designed with Tailwind CSS to be responsive and easy to use.

## Technologies Used

- **Frontend**:
    - React with TypeScript
    - Axios
    - React-Router
    - React-Modal
    - Tailwind CSS
    - Moment.js
    - Vite

- **Backend**:
    - Node.js with Express.js
    - MongoDB with Mongoose
    - JWT-based Authentication

## Setup Instructions

### Prerequisites

- Node.js installed on your system.
- MongoDB Atlas account for database hosting.

### Frontend Setup

1. Clone the repository.

   ```bash
   git clone https://github.com/ShenanVindinu/mern-task-manager.git
   cd mern-task-manager
   ```

2. Navigate to the frontend folder and install the dependencies.

   ```bash
   cd frontend
   cd mern-task-app
   npm install
   ```

5. Run the frontend.

   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend folder and install the dependencies.

   ```bash
   cd backend
   npm install
   ```

2. Create a `.env` file in the backend folder with the following:

   ```plaintext
   ACCESS_TOKEN_SECRET=your-secret-key
   ```

3. Create a `config.json` file in the backend folder with the MongoDB connection string:

   ```json
   {
     "connectionString": "your connection string to MongoDB Atlas DB"
   }
   ```

4. Run the backend server.

   ```bash
   npm run start
   ```

### Running the Application

Once both frontend and backend servers are running, the application should be accessible in your browser at:

```plaintext
http://localhost:5173
```

## Usage

- **Sign up**: Register a new account by providing your details.
- **Log in**: Use your credentials to access the dashboard.
- **Manage Notes**: Create, edit, delete, and pin your notes as required.

## License

This project is licensed under the MIT License. 📃

---