
# 🚀 TaskFlow — MERN Team Task Manager

🔗 Live Demo: https://taskflow-vercel-frontend.vercel.app

TaskFlow is a modern full-stack team collaboration and task management platform built using the MERN Stack.
It helps teams organize projects, assign tasks, monitor progress, and improve productivity through an intuitive and responsive interface.

The application is inspired by productivity tools like Trello and Asana, providing seamless project management with authentication, dashboards, analytics, and role-based access control.

---

# ✨ Features

## 🔐 Authentication & Security

* User Signup & Login
* JWT Authentication
* Protected Routes
* Password Encryption using bcrypt
* Persistent User Sessions

---

# 👥 Team & Project Management

* Create and Manage Projects
* Invite Team Members
* Role-Based Permissions
* Admin & Member Access Levels
* Collaborative Workflow Management

---

# ✅ Task Management

* Create Tasks
* Assign Tasks to Team Members
* Task Priority Levels
* Task Deadlines
* Update Task Status

  * To Do
  * In Progress
  * Completed

---

# 📊 Dashboard & Analytics

* Total Tasks Overview
* Tasks by Status
* Overdue Task Tracking
* User Productivity Insights
* Real-Time Project Monitoring

---

# 🎨 Modern UI/UX

* Responsive Design
* Clean Dashboard Interface
* Mobile-Friendly Layout
* Interactive Components
* Smooth Navigation Experience

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router DOM

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

## Deployment

* Frontend: Vercel
* Backend: Railway
* Database: MongoDB Atlas

---

# 📂 Folder Structure

```bash
taskflow/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   └── App.jsx
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone <your-github-repository-url>
cd taskflow
```

---

# 🔧 Backend Setup

## Navigate to Backend

```bash
cd backend
```

## Install Dependencies

```bash
npm install
```

## Create `.env` File

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Start Backend Server

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# 💻 Frontend Setup

## Navigate to Frontend

```bash
cd frontend
```

## Install Dependencies

```bash
npm install
```

## Start Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🔗 API Endpoints

## Authentication

| Method | Endpoint             | Description   |
| ------ | -------------------- | ------------- |
| POST   | `/api/auth/register` | Register User |
| POST   | `/api/auth/login`    | Login User    |

---

## Projects

| Method | Endpoint                    | Description    |
| ------ | --------------------------- | -------------- |
| POST   | `/api/projects`             | Create Project |
| GET    | `/api/projects`             | Get Projects   |
| PUT    | `/api/projects/:id/members` | Add Members    |

---

## Tasks

| Method | Endpoint                | Description        |
| ------ | ----------------------- | ------------------ |
| POST   | `/api/tasks`            | Create Task        |
| GET    | `/api/tasks/:projectId` | Get Tasks          |
| PUT    | `/api/tasks/:id/status` | Update Task Status |

---

# 🔐 Role-Based Access

## 👑 Admin

* Manage Team Members
* Create/Edit/Delete Tasks
* Manage Projects
* Assign Tasks

## 👤 Member

* View Assigned Tasks
* Update Task Progress
* Collaborate within Projects

---

# 🚀 Deployment

## Frontend Deployment

* Vercel

## Backend Deployment

* Railway

## Database Hosting

* MongoDB Atlas

---

# 🌐 Live Project

👉 https://taskflow-vercel-frontend.vercel.app

---

# 📈 Future Improvements

* Real-Time Notifications
* Drag & Drop Kanban Board
* Socket.io Integration
* File Upload Support
* Email Notifications
* Dark Mode
* Team Chat System

---

# 🧪 Testing Tools

* Postman
* Thunder Client

---

# 👨‍💻 Author

Developed by **Your Name**

---

# 📄 License

This project is licensed under the MIT License.

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.
