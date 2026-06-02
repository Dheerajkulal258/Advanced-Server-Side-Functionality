##  Project Overview

This project  demonstrates advanced server-side development concepts using **Node.js**, **Express.js**, and **MongoDB** while implementing middleware, caching, background job processing, and CRUD operations through a modern full-stack web application.

---

## 📌 Features

### Backend Features

* RESTful API Development
* Express.js Server
* MongoDB Database Integration
* Mongoose ODM
* Custom Logging Middleware
* JSON Request Processing Middleware
* Background Job Scheduling using Node-Cron
* Server-Side Caching using Node-Cache

### Frontend Features

* Modern Responsive UI
* Product Management Dashboard
* Add New Products
* View Products
* Delete Products
* Real-Time Product Count
* Interactive Product Cards

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Additional Packages

* Cors
* Node-Cron
* Node-Cache
* Nodemon

---

## 📂 Project Structure

```text
Cognifyz-Task8-Advanced-Server-Side-Functionality
│
├── config
│   └── db.js
│
├── jobs
│   └── backgroundJob.js
│
├── middleware
│   └── logger.js
│
├── models
│   └── Product.js
│
├── public
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── routes
│   └── productRoutes.js
│
├── server.js
├── package.json
└──  package-lock.json
```

---

## ⚙️ Installation & Setup

### Install Dependencies

```bash
npm install
```

### Start MongoDB

```bash
mongod
```

### Run Application

```bash
npm run dev
```

Server will start on:

```text
http://localhost:5000
```

---

## 🔥 API Endpoints

### Create Product

```http
POST /api/products
```

Request Body:

```json
{
  "name": "Laptop",
  "price": 50000
}
```

---

### Get All Products

```http
GET /api/products
```

---

### Delete Product

```http
DELETE /api/products/:id
```

---

## 📊 Advanced Functionalities Implemented

### Middleware

* Request Logging Middleware
* JSON Parsing Middleware

### Server-Side Caching

* Node-Cache implementation
* Reduced database queries
* Improved response performance

### Background Jobs

* Automated scheduled tasks using Node-Cron
* Runs periodically in the background

### Database Integration

* MongoDB with Mongoose
* Product data persistence

### CRUD Operations

* Create Product
* Read Products
* Delete Product

---

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

* Building REST APIs with Express.js
* Working with MongoDB and Mongoose
* Implementing middleware in Node.js
* Scheduling background tasks using Node-Cron
* Optimizing applications using caching
* Developing full-stack applications
* Managing server-side functionality efficiently

---

## 👨‍💻 Author

**Dheeraj**
