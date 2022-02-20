import { v4 as uuidv4 } from "uuid";
import { LastMessage, Message } from "../models/message";

export const messageMock: Message[] = [
    {
        id: '1',
        creatorId: '1',
        receiverId: '2',
        chatId: '1',
        text: 'ciao',
        state: 'read',
        dateTime: new Date(1999, 10, 1),
        language: 'it'
    },
    {
        id: '2',
        creatorId: '2',
        receiverId: '1',
        chatId: '1',
        text: 'how are you?',
        state: 'read',
        dateTime: new Date(2020,12,1),
        language: 'en'
    },
    {
        id: '3',
        creatorId: '1',
        receiverId: '2',
        chatId: '1',
        text: 'tutto bene',
        state: 'read',
        dateTime: new Date(1400,8,10),
        language: 'it'
    },

    {
        id: '7',
        creatorId: '1',
        receiverId: '2',
        chatId: '1',
        text: 'tutto bene',
        state: 'read',
        dateTime: new Date(2021,8,10),
        language: 'it'
    },
    {
        id: '4',
        creatorId: '2',
        receiverId: '3',
        chatId: '2',
        text: 'what are you doing?',
        state: 'read',
        dateTime: new Date(1982,8,9),
        language: 'en'
    },
    {
        id: '5',
        creatorId: '3',
        receiverId: '2',
        chatId: '2',
        text: 'hola come estas questa es la mejor pageta dela muerte e soi so ecitado',
        state: 'read',
        dateTime: new Date(1666,7,9),
        language: 'es'
    },
    {
        id: '6',
        creatorId: '3',
        receiverId: '1',
        chatId: '3',
        text: 'cómo estás?',
        state: 'read',
        dateTime: new Date(1500, 10, 4),
        language: 'es'
    },
];