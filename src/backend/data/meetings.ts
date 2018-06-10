'use strict';

import { Mongo } from '../core/server/mongo'
import { MongoClient } from 'mongodb';
import { create } from 'handlebars';

class QuestionResponse {
    questionId: string;
    responseValue: string;
}

export class Meeting {
    public _id: string;

    public userId: string;

    public questionResponses: QuestionResponse[];


    constructor(meetingId: string, userId: string, questionResponses: QuestionResponse[]) {
        this._id = meetingId;
        this.userId = userId;
        this.questionResponses = questionResponses;
    }

    static Load(userId: string) {
        return Mongo.Client.then(x => x.collection('meetings').findOne({userId: userId }))
            .then((x) => new Meeting(x._id, x.userId, x.questionResponses))
    }

    static LoadAll() {
        return Mongo.Client.then(x => x.collection('meetings'))
            .then(questions => {
                var t = questions.find().toArray();
                return t;
            })
            .then(docs => {
                var questions = docs.map((x: any) => new Meeting(x._id, x.userId, x.questionResponses))

                return questions;
            })
    }

    static Save(meeting: Meeting) {
        
        var createIfNotExists = Mongo.Client.then(handle => handle.listCollections().toArray())
            .then((collections) => collections.find(name => name == 'meetings'))
            .then((result) => {
                if (!result) {
                    return Mongo.Client.then(x => x.createCollection('meetings'));
                }
            })
        
        return createIfNotExists
            .then(() => Mongo.Client.then(x => x.collection('meetings').save(meeting)))
    }
}