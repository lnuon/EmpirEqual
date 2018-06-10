import { MongoClient } from 'mongodb'
import { provide } from 'inversify-binding-decorators';

@provide("Mongo")
export class Mongo {
    static Client = MongoClient.connect('mongodb://localhost:27017/empirequal').then(x => x.db())
}
