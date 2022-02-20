import express from "express";
import { usersController } from "../controllers/users";
import { auth } from "../middleware/auth";

const router = express.Router();
const { getUsers, getUser, deleteUser } = usersController;

// router.get("/", auth, getUsers);
// router.get("/:id", auth, getUser);
// router.delete("/:id", auth, deleteUser);

router.get("/", getUsers);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);

export default router;
