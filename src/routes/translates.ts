import express from "express";
import { translatesController } from "../controllers/translates";
import { auth } from "../middleware/auth";

const router = express.Router();
const { translate } = translatesController;

router.post("/", translate);

export default router;
