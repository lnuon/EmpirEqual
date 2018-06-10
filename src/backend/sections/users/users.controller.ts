import * as express from 'express';

import { mvc, metadata, reader } from "core/server/decorators"
import { Log, AppLog } from "core/server/log"
import { inject, injectable } from "inversify";
import { Response, NextFunction, Request } from "express"
import { basename } from 'path';
import { HttpController } from 'core/interfaces/http.controller';
import { Mongo } from 'core/server/db'


@mvc.controller("/users", __dirname)
export class UsersController extends HttpController {
    private instanceId: Number = Math.random() 
    private _mongo: Mongo = null;

    public constructor(@inject(AppLog) log: Log, @inject("Mongo") mongo: Mongo) {
        super(log)
        this._mongo = mongo;
    }

    @mvc.http.get("/")
    public getusers(req: Request, res: Response, next: NextFunction) {
        var userId = req.param('userId', null)


    }

    @mvc.http.post("/")
    public createUsers(req: Request, res: Response, next: NextFunction) {
        var user = {
            name: req.params('name'),
            password: req.params('password')
        }
    }
}
