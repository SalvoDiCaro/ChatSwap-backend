import axios from "axios";
import { Request, Response } from "express";
import QueryString from "qs";
import { Error, ObjectReduce } from "../models/types";
import { User } from "../models/user";
import { setUsers, users } from "../resources/users";
import jwt from "jsonwebtoken";
import { typeCryptographyJwt } from "../configurations/config";
// const [users, dispatch] = usersSelector();
import { v4 as uuidv4 } from "uuid";

export const usersController = {
  getUsers:  (
    req: Request,res: Response) => { 
        res.json(users);
  },

  getUser: (
    {params: {id}}: Request,res: Response) => { 
      const user = users.find(({id: idUser}) => id === idUser);
      if(!user) return res.status(404).json({error: 'User not found!'});  
      let sendedUser: Partial<User> = {...user};
      delete sendedUser.password;
        res.json(sendedUser);
  },

  deleteUser:  (
    {params: {id}}: Request,res: Response) => { 
      const indexUser = users.findIndex(({id: idUser}) => id === idUser);
      if(indexUser < 0) return res.status(404).json({error: 'User not found!'}); 
      const deleteUser = users[indexUser]; 
      setUsers(users.splice(indexUser, 1));
        res.json(deleteUser);
  },
};
