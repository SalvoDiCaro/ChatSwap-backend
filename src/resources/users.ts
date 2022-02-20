import { usersMock } from "../mocks/users";
import { User } from "../models/user";

export let users: User[] = usersMock;

export const pushUser = (user: User) =>  users.push(user);

export const setUsers  = (newUsers: User[]) => newUsers = users;