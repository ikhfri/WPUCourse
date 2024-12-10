import { Request, Response } from "express"
export default {
    dummy(req : Request, res : Response){
        return res.status(200).json({
            message : "succes hit /dummy",
            data: "ok"
        })
    }
}