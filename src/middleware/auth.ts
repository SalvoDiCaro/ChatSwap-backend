import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { typeCryptographyJwt } from "../configurations/config";
export const auth = (
  { headers: { authorization } }: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if(authorization && typeof authorization === "string" ){
    res.locals.token = jwt.verify(authorization.split(' ')[1] , typeCryptographyJwt);
    } else {
      return res.status(401).json({ message: "Invalid token" });
    }
    next();
  } catch (err) {
   return res.status(401).json({ message: "Invalid token" });
  }
};