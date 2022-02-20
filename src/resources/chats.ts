import { chatsMock } from '../mocks/chats';
import { Chat } from "../models/chat";
import { LastMessage } from "../models/message";

export let chats: Chat[] = chatsMock;

export const pushChat = (chat: Chat) => chats.push(chat);

export const setChats = (newChats: Chat[]) => newChats = chats;

export const updateLastMessage = (id: string, newMessage: LastMessage) => {
    const chat = chats.findIndex(({id: chatId}) => chatId === id);
    (chat || chat === 0)  && (chats[chat].lastMessage = newMessage);
}