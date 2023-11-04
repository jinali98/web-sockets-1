const ws = require("ws");

const server = new ws.Server({ port: "3000" });

server.on("connection", (socket) => {
  socket.on("message", (message) => {
    console.log(message);
    const buffer = Buffer.from(message);
    console.log(buffer.toString());
    socket.send(`${message}`);
  });
});
