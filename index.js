import express from "express";
import path from "path";
import http from "http";
import socketio from "socket.io";

const app = express();
const server = http.createServer(app);
const ip = socketio(server);

const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();
//set Static folder
app.use(express.static(path.join(__dirname, 'public')));

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));