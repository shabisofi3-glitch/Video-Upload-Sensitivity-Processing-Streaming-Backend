require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const connectDB = require('./config/db');
const socketInit = require('./sockets/socket');

const app = express();
const server = http.createServer(app);
const io = new Server(server,{cors:{origin:'*'}});

connectDB();
socketInit(io);

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('src/uploads'));

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/videos', require('./routes/video.routes')(io));

server.listen(process.env.PORT, () =>
  console.log('Server running on port', process.env.PORT)
);