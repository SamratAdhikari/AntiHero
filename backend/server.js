import express from "express";
import dotenv from "dotenv";
import router from "./routes/route.controller.js";

// initialization
const app = express();
app.use(express.json());

// register routes
app.use(router);

// network port and server
dotenv.config();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}...`);
});
