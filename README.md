# Video-Upload-Sensitivity-Processing-Streaming-Backend
🎥 Video Upload, Sensitivity Processing & Streaming Backend
A production-ready Node.js + Express + MongoDB backend that enables secure video uploads, performs automated sensitivity analysis, streams videos efficiently, and provides real-time processing updates using Socket.io.
Built as part of the Pulsegen Technologies Backend Assignment.
🚀 Features
Core Functionality
🔐 JWT Authentication
👥 Role-Based Access Control (RBAC)
Viewer – view & stream videos
Editor – upload & manage videos
Admin – full access
📤 Video Upload System (Multer)
🧠 Automated Sensitivity Analysis Pipeline (simulated, extensible)
📊 Real-Time Processing Progress using Socket.io
🎬 Video Streaming API
🏢 Multi-Tenant Architecture (user-isolated data)
🏗️ Tech Stack
Backend
Node.js (Latest LTS)
Express.js
MongoDB + Mongoose
Socket.io
JWT Authentication
Multer (file uploads)
📁 Project Structure
src/
├── config/         # Database & JWT configuration
├── controllers/    # Request handling logic
├── services/       # Video processing pipeline
├── sockets/        # Socket.io setup
├── routes/         # API routes
├── middleware/     # Auth & RBAC middleware
├── models/         # MongoDB schemas
├── uploads/        # Uploaded video storage
└── server.js       # Application entry point
