# 🌾 Farmer Weather & Advisory Tool  
A MERN-based web application that provides weather insights and farmer-friendly advisories using OpenWeatherMap API.  
This project is created as part of the **GramIQ – Web Developer Intern (MERN) Assignment**.

---

## 🚀 Features

### 🌤 Weather Data  
User can search any city and get:
- Temperature  
- Humidity  
- Wind Speed (km/h)  
- Rain Probability (POP)  
- 5-day forecast (3-hour interval)

### 🌱 Smart Farmer Advisory System  
Rule-based advisories generated from forecast data:
- 🌧 Rain Probability > 60% → Avoid irrigation & pesticide spraying  
- 🔥 Temperature > 35°C → Increase irrigation  
- 💨 Wind > 15 km/h → Avoid pesticide spray  
- 💦 Humidity > 80% → Fungal risk  
- ✅ Good Spraying Window: Wind < 10 km/h & no rain in next 6 hours  

### 📊 Visualization  
- Temperature & rain trend chart using **Recharts**  
- Clean & modern UI  
- Blur-glass cards  
- Background farmer-themed image for great UI/UX

---

## 🛠 Tech Stack (MERN)

### **Frontend**
- React (Vite)
- Axios
- Recharts
- HTML2Canvas + jsPDF (optional for export PDF)
- Custom CSS (glass theme)

### **Backend**
- Node.js
- Express.js
- Axios
- CORS

### **Database (Optional)**
- MongoDB (Not required but can be added for search history)

---

## 📁 Project Folder Structure

<img width="651" height="577" alt="strcture" src="https://github.com/user-attachments/assets/2318e025-6d4b-493f-9a7b-8aaecd790f0a" />


---

## ⚙️ Setup Instructions (Very Simple)

### ✅ 1. Clone the project
git clone https://github.com/yourusername/farmer-weather.git

cd farmer-weather


---

## ⚙️ Backend Setup



cd BACKEND
npm install


### Create `.env` file



PORT=5000
OWM_API_KEY=YOUR_OPENWEATHER_API_KEY


### Start backend



npm run dev


Backend will run at:



http://localhost:5000


---

## 🎨 Frontend Setup



cd ../FRONTEND
npm install
npm run dev


App runs at:



http://localhost:5173


---

## 🔌 Test Weather API (Manual Test)

Open in browser:



http://localhost:5000/api/weather?location=Nagpur


If JSON appears → backend OK.



🚀 How to Run the Project
✔ 1. Clone or Download Project

Just extract the ZIP or clone the GitHub repo.

✔ 2. Setup BACKEND
Navigate to backend folder
cd BACKEND

Install dependencies
npm install

Create .env file inside BACKEND/
PORT=5000
OWM_API_KEY=YOUR_OPENWEATHER_API_KEY

Start backend
npm run dev

Backend runs on:

👉 http://localhost:5000/api/weather?location=Nagpur

✔ 3. Setup FRONTEND
Navigate to frontend
cd FRONTEND

Install
npm install

Run frontend
npm run dev

Frontend runs on:

👉 http://localhost:5173/
----
---

## 📷 Screenshots

<img width="1890" height="979" alt="frontend Page Photo" src="https://github.com/user-attachments/assets/d06d96b0-0a7d-4a19-b481-c995e04a6981" />


---

## 🧑‍💻 Developer

**Ishant Tiwari**  
B.Tech CSE (Specialization: AIML)  
Shri Ramdeobaba College of Engineering, Nagpur  

---

## ⭐ Conclusion

This project demonstrates:
- MERN stack fundamentals  
- API integration  
- Weather data processing  
- Rule-based advisory engine  
- Clean & modern UI/UX  
- End-to-end full-stack development  

---

