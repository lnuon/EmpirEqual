import * as express from 'express';

import { mvc, metadata, reader } from "core/server/decorators"
import { Log, AppLog } from "core/server/log"
import { inject, injectable } from "inversify";
import { Response, NextFunction, Request } from "express"
import { basename } from 'path';
import { HttpController } from 'core/interfaces/http.controller';
import { MeetingQuestion } from  'data/meeting.question'
import { v4 } from 'uuid'


@mvc.controller("/meetingquestions", __dirname)
export class UsersController extends HttpController {
    private instanceId: Number = Math.random() 

    public constructor(@inject(AppLog) log: Log) {
        super(log)
    }

    @mvc.http.get("/")
    public getquestions(req: Request, res: Response, next: NextFunction) {
        let id: string = req.params.id || req.query.id;

        if (!id) {
            return MeetingQuestion.LoadAll()
                .then((users) => res.json(users))
                .catch((err) => {
                    this._log.error(err)
                    res.sendStatus(500)
                });
        } else {
            return MeetingQuestion.Load(id)
                .then(x => res.json(x))
                .catch((err) => {
                    this._log.error(err)
                    res.sendStatus(500)
                })
        }
    }

    @mvc.http.post("/")
    public createquestion(req: Request, res: Response, next: NextFunction) {
        var temp: any = req.body;

        var q = new MeetingQuestion(v4(), temp.question)
        
        var result = MeetingQuestion.Save(q)
            .then(() => res.sendStatus(200))
            .catch((err) => {
                this._log.error(err)
                res.sendStatus(500)
            });
    }


}
