import axios from "axios";
import { Request, Response } from "express";
import QueryString from "qs";
import { Error, ObjectReduce } from "../models/types";
import { Message } from "../models/message";
import { setMessages, messages, pushMessage } from '../resources/messages';
import jwt from "jsonwebtoken";
import { typeCryptographyJwt } from "../configurations/config";
// const [messages, dispatch] = messagesSelector();
import { v4 as uuidv4 } from "uuid";
import { chats, pushChat, updateLastMessage } from '../resources/chats';
import { users } from "../resources/users";

export const messagesController = {
  getMessages:  (
    req: Request,res: Response) => { 
        res.json(messages);
  },

  getMessage: ({params: {id}}: Request,res: Response) => { 
      const message = messages.find(({id: idMessage}) => id === idMessage);
      if(!message) return res.status(404).json({error: 'Message not found!'});  
        res.json(message);
  },

  getChatMessages: ({params: {id}}: Request,res: Response) => { 
    const chatMessages = messages.filter(({chatId}) => id === chatId);

    if(!chatMessages.length) return res.status(404).json({error: 'No message in this chat'});  
      res.json(chatMessages);
  },

  addMessage: (
    { body }: Request<{},{},{creatorId: string, receiverId: string, state: string, text: string, dateTime: Date, language: string}>,res: Response) => {
      const {creatorId, receiverId, text, language} = body;
      const lastMessage = {text, creatorId,language}
      const user1 = users.find(({id}) => id === creatorId );
      const user2 = users.find(({id}) => id === receiverId );
      if(!user1 || !user2) return res.status(404).json({error: 'user not found!'})
      const indexChat = chats.findIndex(({user1, user2}) => (
        user1.id === creatorId || user1.id === receiverId) &&
        (user2.id === creatorId || user2.id === receiverId)
      );
      const newMessage = indexChat || indexChat === 0 ? {...body, id: uuidv4() ,chatId: chats[indexChat].id, } : 
      {...body, id: uuidv4(), chatId: uuidv4() };

      if(indexChat || indexChat === 0) {
        pushMessage(newMessage);
        updateLastMessage(chats[indexChat].id,lastMessage);
      } else {
        pushMessage(newMessage);
        pushChat({user1: {id: user1.id, nickname: user1.nickname }, user2: {id: user2.id, nickname: user2.nickname }, id: uuidv4(), lastMessage});
      }

      res.json(newMessage);
  },

  deleteMessage:  (
    {params: {id}}: Request,res: Response) => { 
      const indexMessage = messages.findIndex(({id: idMessage}) => id === idMessage);
      if(indexMessage < 0) return res.status(404).json({error: 'Message not found!'}); 
      const deleteMessage = messages[indexMessage]; 
      setMessages(messages.splice(indexMessage, 1));
        res.json(deleteMessage);
  },
};
