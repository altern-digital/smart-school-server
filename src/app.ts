import http from 'http';
import express, { Express } from 'express';
import socketIo from 'socket.io';
import dotenv from 'dotenv';
import morgan from 'morgan';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('short'));

app.use(express.static('./src/public'));

const io = new socketIo.Server(server);

io.on('connection', (socket: socketIo.Socket) => {
  console.log(`A user connected ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`User disconnected ${socket.id}`);
  });

  socket.on('chat message', (message) => {
    io.emit('chat message', message);
  });
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
