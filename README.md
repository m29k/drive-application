# File Upload Application

A Node.js web application for user authentication and file uploading to Supabase storage.

## Features

- User authentication (register/login)
- JWT-based authentication with cookie storage
- File upload functionality with Supabase storage integration
- Responsive UI using Tailwind CSS and Flowbite

## Technology Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS templates, Tailwind CSS, Flowbite
- **Database**: MongoDB (for user data)
- **Storage**: Supabase (for file storage)
- **Authentication**: JWT, bcrypt

## Project Structure

```
├── config/
│   ├── db.js             # MongoDB connection
│   ├── multer.config.js  # File upload configuration
│   └── supabaseClient.js # Supabase connection
├── models/
│   └── user.models.js    # User schema definition
├── routes/
│   ├── index.routes.js   # Main application routes
│   └── user.routes.js    # User authentication routes
├── views/
│   ├── home.ejs          # Home page with file upload
│   ├── index.ejs         # Landing page
│   ├── login.ejs         # Login form
│   └── register.ejs      # Registration form
├── .env                  # Environment variables (not in repo)
├── .gitignore            # Git ignore file
├── app.js                # Application entry point
└── package.json          # Project dependencies
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB database
- Supabase account and project

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/file-upload-application.git
   cd file-upload-application
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   SUPABASE_URL=your_supabase_url
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```

4. Start the application:
   ```
   npm start
   ```

5. Access the application at `http://localhost:3000`

## API Endpoints

### Authentication

- `GET /user/register` - Render registration page
- `POST /user/register` - Create a new user
- `GET /user/login` - Render login page
- `POST /user/login` - Authenticate a user

### File Operations

- `GET /home` - Render home page with file upload functionality
- `POST /upload` - Upload a file to Supabase storage

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

