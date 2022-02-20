import { v4 as uuidv4 } from "uuid";
import { Chat } from "../models/chat";
import { Message, LastMessage } from "../models/message";
import { messageMock } from "./messages";
import { users } from "../resources/users";
const getLastM = ({language, creatorId, text}: Message): LastMessage => ({language, text, creatorId })

export const chatsMock: Chat[] = [
    {
        id: '1',
        user1: {id: users[0].id, nickname: users[0].nickname},
        user2: {id: users[1].id, nickname: users[1].nickname},
        lastMessage: getLastM(messageMock[2]),
    },
    {
        id: '2',
        user1: {id: users[1].id, nickname: users[1].nickname},
        user2: {id: users[2].id, nickname: users[2].nickname},
        lastMessage: getLastM(messageMock[4]),
    },
    {
        id: '3',
        user1: {id: users[0].id, nickname: users[0].nickname},
        user2: {id: users[2].id, nickname: users[2].nickname},
        lastMessage: getLastM(messageMock[5]),
    },
]