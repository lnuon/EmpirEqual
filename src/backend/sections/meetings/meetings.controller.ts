import * as express from 'express';

import { mvc, metadata, reader } from "core/server/decorators"
import { Log, AppLog } from "core/server/log"
import { inject, injectable } from "inversify";
import { Response, NextFunction, Request } from "express"
import { basename } from 'path';
import { HttpController } from 'core/interfaces/http.controller';
import { Meeting } from  'data/meetings'
import { v4 } from 'uuid'


@mvc.controller("/meetings", __dirname)
export class UsersController extends HttpController {
    private instanceId: Number = Math.random() 

    public constructor(@inject(AppLog) log: Log) {
        super(log)
    }

    @mvc.http.get("/")
    public getmeetings(req: Request, res: Response, next: NextFunction) {
        let userId: string = req.params.userId || req.query.userId;

        if (!userId) {
            return Meeting.LoadAll()
                .then((meetings) => res.json(meetings))
                .catch((err) => {
                    this._log.error(err)
                    res.sendStatus(500)
                });
        } else {
            return Meeting.Load(userId)
                .then(x => res.json(x))
                .catch((err) => {
                    this._log.error(err)
                    res.sendStatus(500)
                })
        }
    }

    @mvc.http.post("/")
    public createmeeting(req: Request, res: Response, next: NextFunction) {
        var temp: any = req.body;

        var q = new Meeting(v4(), temp.userId, temp.questionResponses)
        
        var result = Meeting.Save(q)
            .then(() => res.sendStatus(200))
            .catch((err) => {
                this._log.error(err)
                res.sendStatus(500)
            });
    }


}
