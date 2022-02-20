import { chatsController } from './../controllers/chats';
import express from "express";
import { auth } from "../middleware/auth";

const router = express.Router();
const { getChats, getChat, deleteChat, addChat, getChatsByUser } = chatsController;

// router.get("/", auth ,getChats);
// router.post("/", auth , addChat);
// router.get("/:id", auth, getChat);
// router.delete("/:id", auth, deleteChat);

router.get("/",getChats);
router.post("/", addChat);
router.get("/:id",getChat);
router.get("/user/:id",getChatsByUser);
router.delete("/:id",deleteChat);


export default router;