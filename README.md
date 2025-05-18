Sure — here’s a clean, organized, professional `README.md` draft you can use for your project:

---

# 🧠 Minimal AI Customer Support Agent

A full-stack AI-powered customer support chat application that allows users to sign up, log in, chat with an AI assistant (powered by Gemini API), and view their chat history. The app is built with **React** for the frontend, **Node.js + Express** for the backend, and **MongoDB Atlas** for chat history storage. Authentication is handled with **JWT** and **bcrypt** for secure password hashing.

---

## 📸 Demo

 [Live on Vercel](https://minimal-assist.vercel.app)

---

## 🚀 Features

✅ User Authentication (Signup / Login / Logout)
✅ JWT-based protected routes
✅ Password hashing with bcrypt
✅ AI-powered chat using **Gemini API**
✅ Save and display user-scoped chat history
✅ Clean and minimal React chat UI
✅ Dockerized for easy local deployment
✅ Deployed frontend and backend on free-tier platforms

---

## 🛠️ Tech Stack

| Layer                | Tech                                |
| :------------------- | :---------------------------------- |
| **Frontend**         | React (Vite)                        |
| **Backend**          | Node.js + Express                   |
| **Database**         | MongoDB Atlas (Free Tier)           |
| **Auth**             | JWT + bcrypt                        |
| **AI**               | Gemini API                          |
| **Hosting**          | Vercel (Frontend), Render (Backend) |
| **Containerization** | Docker, Docker Compose              |

---

## 📂 Project Structure

```
├── frontend/           # React frontend
├── server/           # Node.js + Express backend
├── README.md
```

---

## 📖 API Endpoints

### 🔐 Auth Routes (`/auth`)

* `POST /signup` – Register a new user
* `POST /login` – Authenticate user and return JWT

### 💬 Chat Routes (`/chat`)

* `POST /send` – Send a message, receive AI response
* `GET /history` – Fetch user's chat history

---

## 📦 Environment Variables

Create `.env` files in both `client/` and `server/` directories based on the provided `.env.example` files.

**Example for server/.env**

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```
```

The frontend will be accessible at `http://localhost:3000`
The backend will be running at `http://localhost:5000`

---

## 🌍 Deployment

* **Frontend** deployed on **Vercel**
* **Backend** deployed on **Render**

---

## ✨ Bonus (Optional Improvements)

* [ ] Typing indicator
* [ ] Rate limiting via `express-rate-limit`
* [ ] Environment switching for dev/prod configs

---

## 📑 Setup Instructions

### 📦 Install Dependencies

**Backend**

```bash
cd server
npm install
```

**Frontend**

```bash
cd frontend
npm install
```

### 🔑 Add Environment Variables

Copy `.env.example` files and fill them out.

### ▶️ Run Locally

**Backend**

```bash
npm run dev
```

**Frontend**

```bash
npm run dev
```

---

## 📜 License

MIT License

---

## 🤝 Acknowledgments

* [Gemini API](https://ai.google.dev/)
* [Vercel](https://vercel.com/)
* [Render](https://render.com/)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

## 📧 Contact

For any questions or feedback, feel free to reach out at [rishuraj2401sinha@gmail.com](rishuraj2401sinha@gmail.com)

---