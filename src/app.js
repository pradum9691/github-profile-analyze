import express from "express";
import profileRoutes from "./routes/profile.routes.js";

const app = express();
const router = express.Router();

app.use(express.json());

app.use("/api/profile", profileRoutes);
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "GitHub Profile Analyzer API is running"
  });
});
export default app;