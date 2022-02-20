import { v4 as uuidv4 } from "uuid";
import { User } from "../models/user";

export const usersMock: User[] = [
    {id: '1', nickname: 'Salvo', password: '123', phone: '3335435398',language: 'it'},
    {id: '2', nickname: 'Federico', password: '123', phone: '3332457654', language: 'en'},
    {id: '3', nickname: 'Giovanni', password: '123', phone: '3332457654', language: 'es'},
    {id: '4', nickname: 'Andrea', password: '123', phone: '3332457654', language: 'en'},
    {id: '5', nickname: 'Giusy', password: '123', phone: '3332457654', language: 'it'},
    {id: '6', nickname: 'Maria', password: '123', phone: '3332457654', language: 'es'},
    {id: '7', nickname: 'Giuseppe', password: '123', phone: '3332457654', language: 'de'},
    {id: '8', nickname: 'Marco', password: '123', phone: '3332457654', language: 'es'},
    {id: '9', nickname: 'Mario', password: '123', phone: '3332457654', language: 'it'},
    {id: '10', nickname: 'Paolo', password: '123', phone: '3332457654', language: 'en'}
]