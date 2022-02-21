import axios from "axios";
import { Request, Response } from "express";
import QueryString from "qs";
import { Error, ObjectReduce } from "../models/types";
import { Chat, CompleteChat } from "../models/chat";
import { setChats, chats, pushChat } from '../resources/chats';
import jwt from "jsonwebtoken";
import { typeCryptographyJwt } from "../configurations/config";
import { v4 as uuidv4 } from "uuid";
import { LastMessage, Message } from "../models/message";
import { messages } from "../resources/messages";
import { users } from "../resources/users";

export const chatsController = {
  getChats:  (
    req: Request,res: Response) => { 
        res.json(chats);
  },

  getChatsByUser: ({params: {id}}: Request<{id: string}>,res: Response<Chat[] | {error: string}>) => { 
    const user = users.find(({id: idUser}) => idUser === id);
    if(!user) return res.status(404).json({error: 'User not found.'});
    const chatsFiltered = chats.filter(({user1, user2}) => (user1.id === user.id || user2.id === user.id));
    res.json(chatsFiltered);
  },

  getChat: ({params: {id}}: Request,res: Response<CompleteChat | {error: string | unknown}>) => { 
    try{
      const chat = chats.find(({id: idChat}) => id === idChat);
      if(!chat) return res.status(404).json({error: 'Chat not found.'}); 
      let partialChat =  {...chat};
      const arrayMessages: Message[] = messages.filter(({chatId}) => chatId === id  ).sort((a,b) => {
        return a.dateTime.getTime() - b.dateTime.getTime();  
      });
        res.json({...partialChat, messages: arrayMessages});
    }catch(err){
      res.json({error: err});
    }
  },

  addChat: (
    { body }: Request<{},{},{user1: {id: string, nickname: string}, user2: {id: string, nickname: string}}>,res: Response) => {
      if(!body.user1 || !body.user2 ) return res.status(404).json({error: 'user is invalid!!'})
      const {user1, user2} = body;
      if(!user1 || !user1.nickname || !user1.id) return res.status(400).json({error: 'user1 is invalid.'})
      if(!user2 || !user2.nickname || !user2.id) return res.status(400).json({error: 'user2 is invalid.'})

      const u_1 = { id: user1.id, nickname: user1.nickname};
      const u_2 = { id: user2.id, nickname: user2.nickname};

      if(chats.some(({user1: u1, user2: u2}) => 
        (u1.id === u_1.id && u2.id === u_2.id) ||
        (u2.id === u_1.id && u1.id === u_2.id))) 
      return res.status(409).json({error: 'chat already exists.'})

      const data = { id: uuidv4(),user1:{...u_1}, user2:{...u_2}};
      pushChat(data);
      res.json(data);
  },

  deleteChat:  (
    {params: {id}}: Request,res: Response) => { 
      const indexChat = chats.findIndex(({id: idChat}) => id === idChat);
      if(indexChat < 0) return res.status(404).json({error: 'Chat not found!'}); 
      const deleteChat = chats[indexChat]; 
      setChats(chats.splice(indexChat, 1));
        res.json(deleteChat);
  },
};
