import app from "./server.js"

const PORT = 8080;
const httpServer = app.listen(PORT, ()  => {
    console.log(`Express server running on local host : ${PORT}.`);
}); 