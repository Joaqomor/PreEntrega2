import express from "express";
import __dirname from "./utils.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded( {extended : true}));

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");



export default app 
