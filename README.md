# 🍽️ Food Price Comparison App

A full-stack web application that helps users compare food prices across platforms like **Swiggy** and **Zomato** to find the best deal instantly.

---

## 🚀 Live Demo

🔗 https://your-app.vercel.app

---

## 📌 Features

* 🔍 Search food items (e.g., *Thali, Biryani*)
* 💰 Compare prices across multiple platforms
* ⚡ Automatically detects the **cheapest option**
* 📊 Detailed price breakdown (base price, discount, delivery)
* 🔥 Highlights **Best Deal**
* 🌐 Responsive modern UI

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB (MongoDB Atlas)

### Deployment

* Frontend: Vercel
* Backend: Render

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/food-price-comparison.git
cd food-price-comparison
```

---

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
```

Create `.env` file:

```env
VITE_API_URL=http://localhost:5000
```

Run frontend:

```bash
npm run dev
```

---

## 🌐 API Endpoint

```http
GET /search?item=thali
```

---

## 📸 Screenshots

* Search Results Page
* Price Comparison Modal
  *(Add screenshots here later)*

---

## 💡 Future Improvements

* 🔐 Admin panel for updating prices
* 📱 Mobile app version
* ⭐ User favorites & history
* ⏱️ Delivery time comparison
* 📊 Price trend analytics

---

## 📄 Resume Description

Developed a full-stack food price comparison web application using React, Node.js, and MongoDB that enables users to compare real-time prices across platforms like Swiggy and Zomato. Implemented dynamic pricing logic, REST APIs, and deployed the application using Vercel and Render.

---

## 👨‍💻 Author

**Your Name**
GitHub: https://github.com/yourusername

---

## ⭐ Show your support

If you like this project, give it a ⭐ on GitHub!
