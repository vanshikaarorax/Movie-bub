import express from "express";
import cors from "cors";
import path from "path";
import { ENV_VARS } from "./config/env.js";
import { connectDB } from "./config/db.js";
const __dirname = path.resolve();

import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.js";
import movieRouter from "./routes/movie.js";
import tvRouter from "./routes/tv.js";
import { protectedRoute } from "./Middlewares/protectedRoute.js";
import searchRouter from "./routes/searchRoute.js";

const app = express();
const PORT = ENV_VARS.PORT;

// Apply middleware
app.use(cors({ 
    origin: 'http://localhost:5173', 
    credentials: true // Allow cookies to be sent
}));
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/movie", protectedRoute, movieRouter);
app.use("/api/v1/tv", protectedRoute, tvRouter);
app.use("/api/v1/search", protectedRoute, searchRouter);

if (ENV_VARS.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));//converting the app into static so both fron and back can be deployed together

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));//this is so tha if any other host other than the 5173 is hit then it is defined to show them the react project
	});
}
// Start server
app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
    connectDB();
});
