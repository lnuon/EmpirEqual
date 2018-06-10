'use strict';

import { Mongo } from '../core/server/mongo'
import { MongoClient } from 'mongodb';
import { create } from 'handlebars';

export class User {
    public _id: string;

    // useful for the system
    public email: string;
    public fullname: string;
    public password: string;

    // optional
    public age: string;

    // free form field to describe yourself
    public description: string;

    constructor(id: string, email: string, fullname: string, password: string, age: string, description: string) {
        this._id = id;
        this.email = email;
        this.age = age;
        this.fullname = fullname;
        this.password = password;
        this.description = description;
    }

    static Load(email: string) {
        return Mongo.Client.then(x => x.collection('users').findOne({email: email }))
            .then((x) => new User(x._id, x.email, x.fullname, x.password, x.age, x.description))
    }

    static LoadAll() {
        return Mongo.Client.then(x => x.collection('users'))
            .then(users => {
                var t = users.find().toArray();
                return t;
            })
            .then(docs => {
                var users = docs.map((user: any) => new User(user._id, user.email, user.fullname, 
                    user.password, user.age, user.description))

                return users;
            })
    }

    static Save(user: User) {
        
        var createIfNotExists = Mongo.Client.then(handle => handle.listCollections().toArray())
            .then((collections) => collections.find(name => name == 'users'))
            .then((result) => {
                if (!result) {
                    return Mongo.Client.then(x => x.createCollection('users'));
                }
            })
        
        return createIfNotExists
            .then(() => Mongo.Client.then(x => x.collection('users').save(user)))
    }
}