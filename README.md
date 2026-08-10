🍽️ FOOD VIEW

A Full-Stack Food Sharing & Discovery Platform

FOOD VIEW is a full-stack web application designed to connect food partners with users through a simple and modern food-sharing platform.

The application provides separate experiences for users and food partners, allowing food partners to create and manage food listings while users can discover and save available food.

Built using React, Vite, Node.js, Express.js, MongoDB, and Mongoose, the project demonstrates a complete frontend-backend architecture with authentication, REST APIs, database integration, and image management.

---

🚀 Features

👤 User Features

- User registration and login
- Secure authentication
- Browse available food
- View food-related content
- Save food for later
- User-focused navigation
- Responsive web interface

🏪 Food Partner Features

- Food partner registration
- Food partner login
- Create food listings
- Manage food-related information
- Food partner profile
- Upload food images
- Dedicated food-partner interface

🔐 Authentication

- Separate authentication flows for users and food partners
- Password hashing using "bcryptjs"
- JWT-based authentication
- Cookie-based authentication support
- Protected application routes

🖼️ Image Management

The backend integrates image-upload functionality using Multer and ImageKit, allowing food-related images to be uploaded and managed through the application.

⚡ Frontend

- React-based component architecture
- React Router for client-side routing
- Axios for API communication
- Reusable UI components
- Separate pages for authentication, users, and food partners
- Vite-powered development environment

---

🛠️ Tech Stack

Frontend

Technology| Purpose
React| User interface
Vite| Frontend build tool
React Router| Client-side routing
Axios| HTTP/API requests
JavaScript| Application logic
CSS| Styling

Backend

Technology| Purpose
Node.js| JavaScript runtime
Express.js| Backend framework
MongoDB| Database
Mongoose| MongoDB ODM
JWT| Authentication
bcryptjs| Password hashing
Multer| File uploads
ImageKit| Image management
Cookie Parser| Cookie handling
CORS| Cross-origin requests
dotenv| Environment configuration
UUID| Unique identifiers

---

🏗️ Project Architecture

FOOD-VIEW
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── BottomNav.jsx
│   │   │   └── ReelFeed.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── auth/
│   │   │   │   ├── ChooseRegister.jsx
│   │   │   │   ├── FoodPartnerLogin.jsx
│   │   │   │   ├── FoodPartnerRegister.jsx
│   │   │   │   ├── UserLogin.jsx
│   │   │   │   └── UserRegister.jsx
│   │   │   │
│   │   │   ├── food-partner/
│   │   │   │   ├── CreateFood.jsx
│   │   │   │   └── Profile.jsx
│   │   │   │
│   │   │   └── general/
│   │   │       ├── Home.jsx
│   │   │       └── Saved.jsx
│   │   │
│   │   ├── routes/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   │
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   └── food.controller.js
│   │   │
│   │   ├── db/
│   │   │
│   │   ├── middlewares/
│   │   │
│   │   ├── models/
│   │   │   ├── food.model.js
│   │   │   ├── foodPartner.model.js
│   │   │   └── user.model.js
│   │   │
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   └── food.routes.js
│   │   │
│   │   ├── services/
│   │   └── app.js
│   │
│   ├── server.js
│   └── package.json
│
└── README.md

---

🔄 Application Flow

                ┌──────────────────┐
                │      User        │
                └────────┬─────────┘
                         │
                         ▼
              ┌────────────────────┐
              │ React Frontend     │
              │      + Vite        │
              └─────────┬──────────┘
                        │
                     Axios
                        │
                        ▼
              ┌────────────────────┐
              │ Express.js API     │
              └─────────┬──────────┘
                        │
             ┌──────────┴──────────┐
             │                     │
             ▼                     ▼
      ┌──────────────┐      ┌──────────────┐
      │ JWT / Auth   │      │ Food APIs    │
      └──────────────┘      └──────┬───────┘
                                   │
                                   ▼
                            ┌──────────────┐
                            │   MongoDB    │
                            │  Mongoose    │
                            └──────────────┘

                         Image Upload
                              │
                              ▼
                         ┌──────────┐
                         │ ImageKit │
                         └──────────┘

---

📁 Main Modules

Authentication Module

Handles:

- User registration
- User login
- Food partner registration
- Food partner login
- Password hashing
- JWT authentication
- Authentication cookies

Food Module

Handles food-related operations through dedicated controllers, routes, and MongoDB models.

Food Partner Module

Provides food partners with their own registration, login, profile, and food creation functionality.

User Module

Provides users with authentication, food discovery, and saved-food functionality.

---

⚙️ Installation & Setup

1. Clone the Repository

git clone https://github.com/MOHAMMEDYOUNUSUDDIN/FOOD-VIEW.git

cd FOOD-VIEW

---

🖥️ Frontend Setup

Navigate to the frontend:

cd frontend

Install dependencies:

npm install

Start the development server:

npm run dev

The frontend is built with Vite and uses the development script:

npm run dev

---

⚙️ Backend Setup

Open another terminal and navigate to the backend:

cd backend

Install dependencies:

npm install

Start the backend:

npm start

Or:

npm run dev

---

🔑 Environment Variables

Create a ".env" file inside the "backend" directory.

Example:

PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint

«Do not commit your ".env" file or any API keys, database credentials, JWT secrets, or private keys to GitHub.»

---

🗄️ Database

FOOD VIEW uses MongoDB as its database with Mongoose for schema definition and database interaction.

The project contains separate models for:

User
Food
Food Partner

This separation keeps user, food, and food-partner data organized within the backend architecture.

---

🔐 Security

The application uses several mechanisms for handling authentication and application security:

- Password hashing with "bcryptjs"
- JWT authentication
- HTTP cookie handling
- Protected routes/middleware
- Environment variables for sensitive configuration
- CORS configuration

---

📡 API Architecture

The backend follows a modular REST API structure.

Routes
   │
   ▼
Controllers
   │
   ▼
Services
   │
   ▼
Models
   │
   ▼
MongoDB

Authentication routes:

/auth/...

Food-related routes:

/food/...

The exact endpoints can be found inside:

backend/src/routes/

---

🧩 Frontend Architecture

The frontend follows a modular React structure:

Pages
   │
   ├── Authentication
   ├── General
   └── Food Partner

Components
   │
   ├── Navigation
   └── Food/Reel Feed

API Layer
   │
   └── Axios Requests

Backend

This separation makes the application easier to maintain and extend.

---

📸 Screenshots

Add screenshots of your application here.

## Screenshots

### Home Page
![Home Page](./vdeos/home.png)

### Login
![Login](./vdeos/login.png)

### Food Partner Dashboard
![Food Partner](./vdeos/partner.png)

### Create Food
![Create Food](./vdeos/create-food.png)

Replace the image paths with the actual screenshot filenames available in your repository.

---

🎯 Project Goals

The main goals of FOOD VIEW are:

- Build a practical full-stack application
- Connect a React frontend with a Node.js backend
- Implement authentication from scratch
- Work with MongoDB and Mongoose
- Build REST APIs
- Implement image upload functionality
- Create separate user and food-partner workflows
- Practice scalable project organization

---

🧠 What I Learned

While building this project, I worked with:

- React component-based development
- React Router
- REST API integration
- Axios
- Node.js and Express.js
- MongoDB and Mongoose
- JWT authentication
- Password hashing
- Middleware
- File uploads
- Image hosting
- Environment variables
- Frontend/backend integration
- Full-stack application architecture

---

🔮 Future Improvements

Potential improvements for future versions include:

- ⭐ Food rating and review system
- 🔎 Advanced food search and filtering
- 📍 Location-based food discovery
- 🔔 Real-time notifications
- 💬 User and food-partner communication
- 📊 Food-partner analytics dashboard
- ❤️ Improved food recommendation system
- 📱 Progressive Web App support
- ☁️ Production deployment
- 🧪 Automated frontend and backend testing
- 🔒 Additional security and validation
- 📈 Better scalability and performance optimization

---

🛣️ Future Architecture

                 FOOD VIEW
                     │
        ┌────────────┴────────────┐
        │                         │
      Users                  Food Partners
        │                         │
        └────────────┬────────────┘
                     │
              React Frontend
                     │
                  REST API
                     │
              Express Backend
                     │
          ┌──────────┴──────────┐
          │                     │
       MongoDB              ImageKit
          │                     │
          └──────────┬──────────┘
                     │
                 FOOD VIEW

---

🤝 Contributing

Contributions are welcome.

If you want to improve the project:

1. Fork the repository
2. Create a new branch

git checkout -b feature/your-feature

3. Make your changes
4. Commit your changes

git commit -m "Add your feature"

5. Push the branch

git push origin feature/your-feature

6. Open a Pull Request

---

📄 License

This project is currently licensed under the ISC License as specified by the backend project configuration.

---

👨‍💻 Author

Mohammed Younus Uddin

B.Tech Computer Science Engineering Student
Full-Stack Developer

GitHub: "MOHAMMEDYOUNUSUDDIN" (https://github.com/MOHAMMEDYOUNUSUDDIN)

---

⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

Built with ❤️ using React, Node.js, Express.js and MongoDB.
