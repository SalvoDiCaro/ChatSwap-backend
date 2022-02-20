import axios from "axios";
import { Request, Response } from "express";
import QueryString from "qs";
import { Error, ObjectReduce } from "../models/types";
import { User } from "../models/user";
import { pushUser, users } from "../resources/users";
import jwt from "jsonwebtoken";
import { typeCryptographyJwt } from "../configurations/config";
// const [users, dispatch] = usersSelector();
import { v4 as uuidv4 } from "uuid";


export const authController = {
  signup:  (
    { body }: Request<{},{},{nickname: string, phone: string, password: string, language: string}>,res: Response) => {
      
     if(users.some(({nickname}) => nickname === body.nickname)) return res.status(409).json({error: 'User already exists!'});
      pushUser({...body, id: uuidv4(), });
        res.json(body);
  },

  signin:  (
    { body }: Request<{},{},{nickname: string, password: string}>,res: Response) => {
       const user = users.find(({nickname, password}) => nickname === body.nickname && password === body.password)
     if(user){
      res.json({accessToken: jwt.sign(body, typeCryptographyJwt), id: user.id});
     } else {
       res.status(403).json({error: 'Wrong credentials!'})
     }
  },
};
