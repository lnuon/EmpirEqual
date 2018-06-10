import * as express from 'express';

import { mvc, metadata, reader } from "core/server/decorators"
import { Log, AppLog } from "core/server/log"
import { inject, injectable } from "inversify";
import { Response, NextFunction, Request } from "express"
import { basename } from 'path';
import { HttpController } from 'core/interfaces/http.controller';
import { User } from  'data/user'
import { v4 } from 'uuid'


@mvc.controller("/users", __dirname)
export class UsersController extends HttpController {
    private instanceId: Number = Math.random() 

    public constructor(@inject(AppLog) log: Log) {
        super(log)
    }

    @mvc.http.get("/")
    public getusers(req: Request, res: Response, next: NextFunction) {
        let userEmail: string = req.params.email || req.query.email;

        if (!userEmail) {
            return User.LoadAll()
                .then((users) => users.map(x => {
                    x.password = null;
                    return x
                }))
                .then((users) => res.json(users))
                .catch((err) => {
                    this._log.error(err)
                    res.sendStatus(500)
                });
        } else {
            return User.Load(userEmail)
                .then(x => {
                    x.password = null;
                    return x;
                })
                .then(x => res.json(x))
                .catch((err) => {
                    this._log.error(err)
                    res.sendStatus(500)
                })
        }
    }

    @mvc.http.post("/")
    public createUsers(req: Request, res: Response, next: NextFunction) {
        var temp: any = req.body;

        var userId = v4()
        var user = new User(userId, temp.email, temp.fullname, temp.password, temp.age, temp.description)
        
        var result = User.Save(user)
            .then(() => res.json(user))
            .catch((err) => {
                this._log.error(err)
                res.sendStatus(500)
            });
    }


}
