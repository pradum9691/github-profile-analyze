import express from "express";
import { analyzeProfile, getProfile, getProfiles,} from "../controllers/profile.controller.js";

const router = express.Router();

router.get("/find/:username", analyzeProfile);
router.get("/", getProfiles);
router.get("/:id", getProfile);
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Route Working"
  });
});

export default router;