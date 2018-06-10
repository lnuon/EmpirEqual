'use strict';

import { Mongo } from '../core/server/mongo'
import { MongoClient } from 'mongodb';
import { create } from 'handlebars';

export class MeetingQuestion {
    public _id: string;

    // useful for the system
    public question: string;

    // free form field to describe yourself
    public description: string;

    constructor(id: string, question: string) {
        this._id = id;
        this.question = question;
    }

    static Load(id: string) {
        return Mongo.Client.then(x => x.collection('meeting.questions').findOne({_id: id }))
            .then((x) => new MeetingQuestion(x._id, x.question))
    }

    static LoadAll() {
        return Mongo.Client.then(x => x.collection('meeting.questions'))
            .then(questions => {
                var t = questions.find().toArray();
                return t;
            })
            .then(docs => {
                var questions = docs.map((x: any) => new MeetingQuestion(x._id, x.question))

                return questions;
            })
    }

    static Save(question: MeetingQuestion) {
        
        var createIfNotExists = Mongo.Client.then(handle => handle.listCollections().toArray())
            .then((collections) => collections.find(name => name == 'meeting.questions'))
            .then((result) => {
                if (!result) {
                    return Mongo.Client.then(x => x.createCollection('meeting.questions'));
                }
            })
        
        return createIfNotExists
            .then(() => Mongo.Client.then(x => x.collection('meeting.questions').save(question)))
    }
}