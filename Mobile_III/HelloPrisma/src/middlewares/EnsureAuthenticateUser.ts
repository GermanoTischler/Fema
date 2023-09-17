import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
   sub: string
}

export async function EnsureAuthenticateUser(
   req:Request,
   res: Response,
   next: NextFunction
) {
   const authHeader = req.headers.authorization;

   if (!authHeader) return res.status(401).json({
      message: 'Token missing.'
   })

   const [_, token] = authHeader.split(" ")

   try {
      const { sub } = verify(
         token,
         'SenhaSecreta') as IPayLoad
      
      req.userId = sub

      return next()

   } catch {
      return res.status(401).json({
         message: 'Invalid Token'})
   }
}
