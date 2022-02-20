import express from "express";
import { authController } from "../controllers/auth";

const router = express.Router();
const { signin, signup } = authController;

router.post("/signin" ,signin);
router.post("/signup",signup);

export default router;
