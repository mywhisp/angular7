import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import { Observable} from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class UserService {

    usersRef: AngularFireList<any>;
    users: Observable<any[]>;
    user: Observable<any>;

    constructor(private db: AngularFireDatabase){
        this.usersRef = this.db.list('users');
         // Use snapshotChanges().map() to store the key
         // Link auf GitHub
         // https://github.com/angular/angularfire2/blob/master/docs/rtdb/lists.md
        this.users = this.usersRef.snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });
    }

    // Get Observable
    getUsers(){
        return this.users;
    }

}