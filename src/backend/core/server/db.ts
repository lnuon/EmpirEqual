import { MongoClient } from 'mongodb'
import { provide } from 'inversify-binding-decorators';

@provide("Mongo")
export class Mongo {
    constructor() {
        console.log('hi')
    }

    test() {
        console.log('yo');
    }
}
