import express from "express";
import cors from "cors";
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// rouers
import userRoute from "./routes/user.routes.js";
app.use("/api/user", userRoute);

export { app };
