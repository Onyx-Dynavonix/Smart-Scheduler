# Smart Scheduler

## Overview
The **Smart Scheduler** is a web application designed to optimize task scheduling and time management. It utilizes advanced algorithms and intuitive user interfaces to streamline the process of managing personal or professional schedules effectively.

## Features
- **Task Management**: Add, update, and delete tasks with ease.
- **Drag-and-Drop Interface**: Intuitive scheduling using drag-and-drop functionality.
- **Real-Time Notifications**: Receive alerts for upcoming tasks or conflicts.
- **Integration with Calendars**: Sync tasks with Google Calendar and other third-party calendars.
- **AI-Based Suggestions**: Get recommendations for optimal scheduling based on your preferences.
- **Customizable Views**: Toggle between daily, weekly, and monthly views.

## Tech Stack
- **Frontend**: ReactJS, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT), OAuth2 for Google Calendar integration
- **Notifications**: Firebase Cloud Messaging (FCM)
- **AI**: TensorFlow.js for predictive analytics

## Installation

### Prerequisites
- Node.js (v14 or above)
- MongoDB (local or cloud instance)
- npm or yarn

### Steps to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/username/smart-scheduler.git
   cd smart-scheduler
   ```

2. Install dependencies for the frontend and backend:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the `server` directory with the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

4. Start the development servers:
   ```bash
   # Start backend server
   cd server
   npm run dev

   # Start frontend server
   cd ../client
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to access the app.

## Folder Structure
```
smart-scheduler/
├── client/               # ReactJS frontend
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Application pages
│   │   ├── hooks/        # Custom hooks
│   │   └── utils/        # Utility functions
│   ├── public/           # Public assets
│   └── package.json      # Frontend dependencies
├── server/               # Node.js backend
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── controllers/      # Business logic
│   ├── middleware/       # Express middleware
│   └── package.json      # Backend dependencies
├── README.md             # Project documentation
└── .gitignore            # Ignored files and folders
```

## API Endpoints

### Authentication
- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Login user
- **GET** `/api/auth/google` - Google OAuth login

### Tasks
- **GET** `/api/tasks` - Get all tasks
- **POST** `/api/tasks` - Add a new task
- **PUT** `/api/tasks/:id` - Update a task
- **DELETE** `/api/tasks/:id` - Delete a task

### Notifications
- **GET** `/api/notifications` - Get user notifications

## Contribution

1. Fork the repository and create your branch:
   ```bash
   git checkout -b feature/your-feature
   ```

2. Commit your changes:
   ```bash
   git commit -m "Add your message"
   ```

3. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```

4. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For queries or issues, please contact:
- **Md Jasim Ansari**  
