import { Injectable, EventEmitter } from '@angular/core';
import PouchDB  from 'pouchdb';

@Injectable()
export class PouchPerson{


    private isInstantiated: boolean;
    private database: any;
    private listener: EventEmitter<any> = new EventEmitter();
    public serverRemote:string = "http://macuna.tecfinanzas.com:5984/tschool";

    public constructor() {
        if(!this.isInstantiated) {
            this.database = new PouchDB("TSchool");
            this.isInstantiated = true;
            this.sync(this.serverRemote);
        }
    }

    public fetch() {
        return this.database.allDocs({include_docs: true});
    }

    public get(id: string) {
        return this.database.get(id);
    }

    public put(id: string, document: any) {
        document._id = id;
        console.log("Entro PUT")
        return this.get(id).then(result => {
            document._rev = result._rev;
            return this.database.put(document);
        }, error => {
            console.log(error);
            if(error.status == "404") {
                return this.database.put(document);
            } else {
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            }
        });
    }


    public sync(remote: string) {
        let remoteDatabase = new PouchDB(remote);
        //this.autenticacionServer(remoteDatabase);
        this.database.sync(remoteDatabase, {
            live: true,
            retry: true
        }).on('change', change => {
            this.listener.emit(change);
        }).on('error', error => {
            console.error(JSON.stringify(error));
        });
    }

    public getChangeListener() {
        return this.listener;
    }
}