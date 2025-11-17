# 📝 MERN Note-Taking App

## 📖 Detailed Description

This is a full-stack MERN Note-Taking Application that lets users create, edit, and delete notes through a simple and responsive 
React interface. The backend uses Node.js, Express, and MongoDB with an MVC structure for efficient CRUD operations, 
while Upstash Redis Rate Limiting helps prevent excessive requests and keeps the API stable. With environment-based configuration 
for both development and production, the project provides a secure, scalable, and practical example of a MERN application.

## 🚀 Features

### 📝 App Features

| Feature | Description |
|---------|-------------|
| ✏️ **Note Management (CRUD)** | Create, update, and delete notes seamlessly |
| 🎨 **Modern Responsive UI** | Clean and mobile-friendly interface built with React |
| ⚡ **Fast MongoDB Operations** | Efficient CRUD performance using Mongoose |
| 🛠 **Structured REST API** | Organized routes, controllers, and service logic |
| 🌐 **Environment-Based Config** | Separate dev & production setups using dotenv |

---

### 🔐 Security & Optimization

| Feature | Description |
|---------|-------------|
| ⚡ **Upstash Redis Rate Limiting** | Prevents spam, abuse, and excessive API requests |
| 🔒 **CORS Enabled** | Controlled cross-origin access for secure API usage |
| 🧰 **Centralized Error Handling** | Unified middleware ensures stability and clean responses |




## 📸 Screenshots

### 🏠 Home Page
<img src="https://raw.githubusercontent.com/Aniketpalve02/MERN-Note-Taking-App/refs/heads/main/Note-App-Screenshot/Home-Page.png" width="700"/>

### 📝 Create First Note
<img src="https://raw.githubusercontent.com/Aniketpalve02/MERN-Note-Taking-App/refs/heads/main/Note-App-Screenshot/Create-First-Note.png" width="700"/>

### ✏️ Update Note
<img src="https://raw.githubusercontent.com/Aniketpalve02/MERN-Note-Taking-App/refs/heads/main/Note-App-Screenshot/Update-Note.png" width="700"/>

### ❌ Delete Note
<img src="https://raw.githubusercontent.com/Aniketpalve02/MERN-Note-Taking-App/refs/heads/main/Note-App-Screenshot/Delete-Note.png" width="700"/>

### ⚡ Rate Limiting (Upstash)
<img src="https://raw.githubusercontent.com/Aniketpalve02/MERN-Note-Taking-App/refs/heads/main/Note-App-Screenshot/Rate-Limiting.png" width="700"/>





## 🎨 Frontend

| Technology | Badge | Description |
|-----------|--------|-------------|
| ⚛️ **React** | ![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB) | Component-based UI development |
| ⚡ **Vite** | ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white) | Lightning-fast frontend build tool |
| 🔗 **Axios** | ![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white) | HTTP client for API communication |
| 🎨 **Tailwind CSS** | ![Tailwind](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white) | Utility-first responsive styling |
| 🌼 **DaisyUI** | ![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?logo=daisyui&logoColor=white) | Tailwind-based UI component library |

---

## ⚙️ Backend

| Technology | Badge | Description |
|-----------|--------|-------------|
| 🟢 **Node.js** | ![Node](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white) | JavaScript runtime for backend |
| 🚏 **Express.js** | ![Express](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white) | Minimal & flexible backend framework |
| 🍃 **MongoDB + Mongoose** | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white) ![Mongoose](https://img.shields.io/badge/Mongoose-880000?logo=mongoose&logoColor=white) | NoSQL database + ODM for schemas |
| 🔐 **dotenv** | ![dotenv](https://img.shields.io/badge/dotenv-ECD53F?logo=dotenv&logoColor=black) | Environment variable management |
| ⚡ **Upstash Redis (Rate Limiting)** | ![Upstash](https://img.shields.io/badge/Upstash-04AD8F?logo=upstash&logoColor=white) | Serverless Redis for API rate limiting |



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```bash
PORT=5001
MONGO_URI=<your_mongo_uri>
UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>
NODE_ENV=development
```


## Installation

### 🔧 Run the Backend

```bash
  cd backend
  npm install
  npm run dev
```
### 💻 Run the Frontend

```bash
  cd frontend
  npm install
  npm run dev
```
    
