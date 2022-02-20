import { messageMock } from "../mocks/messages";
import { Message } from "../models/message";

export let messages: Message[] = messageMock;

export const pushMessage = (message: Message) =>  messages.push(message);

export const setMessages  = (newMessages: Message[]) => newMessages = messages;