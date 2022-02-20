import express from "express";
import translates from "./routes/translates";
import users from "./routes/users";
import auth from "./routes/auth";

import cors from "cors";
import messages from "./routes/messages";
import chats from "./routes/chats";

const port = process.env.PORT || 3001;


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.options("*", cors() as any);

app.use("/translates", translates);
app.use("/users", users);
app.use("/auth", auth);
app.use("/messages", messages);
app.use("/chats", chats);

app.listen(port ,() => console.log("Server is running"));



   export default app;

