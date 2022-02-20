import { LastMessage, Message } from "./message";

export interface Chat {
    id: string,
    user1: {id: string, nickname: string},
    user2: {id: string, nickname: string},
    lastMessage?: LastMessage
}

export interface CompleteChat {
    id: string,
    user1: {id: string, nickname: string},
    user2: {id: string, nickname: string},
    messages: Message[]
}