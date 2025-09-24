# 🚀 Employee Management System (EMS)

An **Employee Management System** with CRUD automation and secure backend integration.  
Built with **Spring Boot + React.js**, this project demonstrates full-stack application development, RESTful APIs, and backend–frontend communication.

---

## 📖 Project Overview
- ✅ Built an Employee Management System with **CRUD automation** and enhanced backend security using **DTOs** and **mappers**.  
- ✅ Implemented **RESTful APIs** in Spring Boot and connected them with a **React frontend**.  
- ✅ Strengthened understanding of **backend–frontend data flow** and overall **application architecture**.  

---

## 🛠️ Tech Stack
### Backend
- **Spring Boot** (Spring Web, JPA, Lombok)  
- **PostgreSQL** (Neon Database)  
- **Maven** (build tool)  
- **Docker** (containerization)  

### Frontend
- **React.js**  
- **Bootstrap** (UI styling)  
- **Axios** (API calls)  

### Deployment
- **Backend** → Render  
- **Database** → Neon (PostgreSQL cloud)  
- **Frontend** → Vercel  

---

## ⚡ Features
- 👨‍💼 Add, update, delete, and view employees.  
- 🔒 Backend security with DTOs and mappers.  
- 🌍 Cross-origin resource sharing (CORS) handling.  
- ⚡ Real-time frontend–backend communication.  
- 📦 Deployed with **Render + Vercel + NeonDB**.  

---

---

## 🐞 Problems Faced & Solutions
1. **`/api/employees` issue**  
   - Problem: Update API was creating a new employee instead of updating.  
   - Solution: Used `findById()` → set new values → `save()` to update instead of re-inserting.

2. **CORS Errors**  
   - Problem: React frontend (`localhost:5173`) couldn’t access backend API (`render.com`).  
   - Solution: Configured `CorsConfig` with `.allowedOrigins(frontendUrl)` and tested using `.env`.

3. **Handling `.env` files**  
   - Problem: Hardcoded URLs caused errors in deployment.  
   - Solution: Moved API base URL into `.env`:
     

4. **JAR generation**  

5. **Dockerizing**  
   - Created `Dockerfile` for containerized deployment:
     ```dockerfile
     FROM openjdk:17-jdk-slim
     COPY target/ems-backend-0.0.1-SNAPSHOT.jar app.jar
     ENTRYPOINT ["java", "-jar", "/app.jar"]
     ```

6. **Building & Deploying Backend**
    - Problem: Packaging Spring Boot JAR and creating a Docker image.
    - Solution: Wrote a proper Dockerfile, built and pushed the image, then configured Render to pull it.
     
---

## 🚀 Deployment
🔗 **Live Project**: [Employee Management System](https://ems-frontend-rho-rouge.vercel.app/)  

---

## 📌 Future Improvements
- 🔑 Authentication & Authorization (JWT-based login).  
- 📊 Advanced dashboards (charts, analytics).  
- ☁️ CI/CD pipeline with GitHub Actions.  

