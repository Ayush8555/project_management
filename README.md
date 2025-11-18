# Full Stack JWT Authentication System

A complete JWT authentication system with React frontend, Node.js/Express backend, and PostgreSQL database integration.

## Features

- User registration and login
- JWT token-based authentication
- Protected routes
- PostgreSQL database storage
- Password encryption with bcrypt
- Responsive UI with Bootstrap

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL database (Neon.tech recommended)
- npm or yarn

## Setup Instructions

### 1. Backend Setup

1. Navigate to the project root directory
2. Install backend dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:

   ```
   NODE_ENV=development
   PORT=5001
   DATABASE_URL=your_neon_postgres_connection_string_here
   JWT_SECRET=your_jwt_secret_here
   JWT_EXPIRE=30d
   ```

4. Update the DATABASE_URL with your Neon PostgreSQL connection string:
   - Go to [Neon.tech](https://neon.tech/) and create a free account
   - Create a new project and copy the connection string
   - Replace `your_neon_postgres_connection_string_here` with your actual connection string
5. Set a strong JWT_SECRET for token generation

### 2. Frontend Setup

1. Navigate to the frontend directory:

   ```
   cd frontend
   ```

2. Install frontend dependencies:
   ```
   npm install
   ```

### 3. Database Setup

The application will automatically create the required tables on first run. Make sure your database connection is properly configured in the `.env` file.

## Running the Application

### Start the Backend Server

From the project root directory:

```
npm run dev
```

This will start the backend server on http://localhost:5000

### Start the Frontend Server

In a new terminal, navigate to the frontend directory:

```
cd frontend
npm start
```

This will start the React development server on http://localhost:3000

## Project Structure

```
.
├── backend/
│   ├── config/
│   │   └── db.js              # Database configuration
│   ├── controllers/
│   │   ├── authController.js   # Authentication logic
│   │   └── userController.js   # User-related logic
│   ├── middleware/
│   │   └── authMiddleware.js   # Authentication middleware
│   ├── models/
│   │   └── User.js             # User model
│   ├── routes/
│   │   ├── authRoutes.js       # Authentication routes
│   │   └── userRoutes.js       # User routes
│   ├── utils/
│   │   └── initDb.js           # Database initialization
│   └── server.js               # Entry point
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── Dashboard.js    # Protected dashboard
│       │   ├── Home.js         # Homepage
│       │   ├── Login.js        # Login form
│       │   └── Register.js     # Registration form
│       ├── contexts/
│       │   └── AuthContext.js  # Authentication context
│       ├── services/
│       │   ├── authService.js  # Authentication API calls
│       │   └── userService.js  # User API calls
│       └── App.js              # Main app component
└── .env                        # Environment variables
```

## API Endpoints

### Authentication Routes

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### User Routes

- `GET /api/users/profile` - Get user profile (protected)

## Security Features

- Passwords are encrypted using bcrypt
- JWT tokens for secure authentication
- Protected routes middleware
- Environment variables for sensitive data

## Technologies Used

- **Frontend**: React, React Router, Axios, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL (Neon)
- **Authentication**: JWT, bcryptjs
- **Other**: dotenv, cors

## Testing the Application

1. Open your browser and navigate to http://localhost:3000
2. Register a new user account
3. Login with your credentials
4. Access the protected dashboard
5. Logout when finished

## Deployment

For production deployment:

1. Update the `.env` file with production values
2. Build the React frontend:
   ```
   cd frontend
   npm run build
   ```
3. Serve the built files from the backend server

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License

This project is licensed under the MIT License.
# project_management
