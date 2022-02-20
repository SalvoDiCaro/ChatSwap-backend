import express from "express";
import { messagesController } from "../controllers/messages";
import { auth } from "../middleware/auth";

const router = express.Router();
const { getMessages, getMessage, deleteMessage, addMessage, getChatMessages } = messagesController;

router.get("/",getMessages);
router.get("/:id", getMessage);
router.get("/chat/:id", getChatMessages);
router.post("/", addMessage);
router.delete("/:id", deleteMessage);

// router.get("/", auth ,getMessages);
// router.get("/:id", auth, getMessage);
// router.get("/chat/:id", auth, getChatMessages);
// router.post("/", auth, addMessage);
// router.delete("/:id", auth, deleteMessage);


export default router;