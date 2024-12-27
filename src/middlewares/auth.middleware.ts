import { NextFunction, Request, Response } from "express";
import { getUserData, IuserToken } from "../utils/jwt";


export interface IReqUser extends Request {
    user? : IuserToken
}

export default (req : Request, res : Response, next : NextFunction) => {
    const auththorzation = req.headers?.authorization;


    if(!auththorzation) {
        return res.status(403).json({message : "unauthorized", data : null});   
    }



    const [prefix, accessToken] = auththorzation.split(" ");
    if(!(prefix == "Bearer" && accessToken)) {
        return res.status(403).json({message : "unauthorized", data : null});
    }



    const user = getUserData(accessToken);
    if(!user) { 
        return res.status(403).json({message : "unauthorized", data : null});
    }

    (req as IReqUser).user = user


    next();
}