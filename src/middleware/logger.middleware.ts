import {
  BadRequestException,
  Injectable,
  NestMiddleware,
  NotFoundException,
} from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("Log middleware working");
    if (true) {
      throw new NotFoundException();
    }
    next();
  }
}
