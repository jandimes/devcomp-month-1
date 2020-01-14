const http = require("http");

const app = require("./app");
const serverConfig = require("./config/server");

const server = http.createServer(app);
server.listen(serverConfig.port, serverConfig.ip, function() {
    console.log(`Server started on ${serverConfig.ip}:${serverConfig.port}`);
});
