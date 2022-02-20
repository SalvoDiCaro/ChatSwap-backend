import axios from "axios";
import { Request, Response } from "express";
import QueryString from "qs";
import { Translation } from "../models/tranlations";
import { Error, ObjectReduce } from "../models/types";
import { User } from "../models/user";


export const translatesController = {
  translate: async (
    { body: {q, target, source} }: Request,res: Response) => {
      const options = {
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'accept-encoding': 'application/gzip',
          'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
          'x-rapidapi-key': '1208329bc9mshc83bd5340359644p151601jsne31520a9c5cd'
        },
        data: QueryString.stringify({q, target, source})
      };
      try{
        const { data:{data:{translations}} } = await axios.request<Translation>(options as any)
        res.json(translations[0].translatedText);

      } catch (e) {
        res.status(404).json(e);
      }
  },
};
