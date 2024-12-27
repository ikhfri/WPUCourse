import { Types } from "mongoose";
import { User } from "../models/user.model";
import jwt from "jsonwebtoken";
import { SECRET } from "./env";
export interface IuserToken
  extends Omit<
    User,
    | "password"
    | "ativationCode"
    | "isActive"
    | "email"
    | "fullName"
    | "profilePicture"
    | "username"
  > {
  id?: Types.ObjectId;
}

export const generateToken = (user: IuserToken) : string => {
  const token = jwt.sign(user, SECRET, {
     expiresIn: "1h" 
    });
  return token; 
};


export const getUserData = (token: string) => {
    const user = jwt.verify(token, SECRET) as IuserToken;
    return user
};
