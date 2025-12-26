# Video-Upload-Sensitivity-Processing-Streaming-Backend


A backend application built using Node.js, Express, and MongoDB that allows users to upload videos, processes them for content sensitivity, provides real-time progress updates, and enables secure video streaming.  
This project was developed as part of the Pulsegen Technologies backend assignment.

---

## Features

- JWT-based Authentication
- Role-Based Access Control (Viewer, Editor, Admin)
- Secure Video Upload
- Automated Video Sensitivity Processing (Simulated)
- Real-Time Processing Updates using Socket.io
- Video Streaming API
- Multi-Tenant User Isolation
- Modular and Scalable Architecture

---

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- Socket.io
- JWT
- Multer

---

## Project Structure
src/
├── config/ # Database and JWT configuration
├── controllers/ # Business logic
├── services/ # Video processing logic
├── sockets/ # Socket.io setup
├── routes/ # API routes
├── middleware/ # Authentication & RBAC
├── models/ # MongoDB schemas
├── uploads/ # Uploaded video files
└── server.js # Application entry point

