import {HttpClient, HttpResponse} from "@angular/common/http";
import {IUsers} from "./users.model";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import { FormGroup, FormControl } from '@angular/forms';
 
 @Injectable()
 export class ApiService {
    
    userObj: {};

     private _postsURL = "https://jsonplaceholder.typicode.com/users";
 
     constructor(private http: HttpClient) { }
 
     getPosts() {
         return this.http.get<IUsers[]>(this._postsURL);     
     }
 
     private handleError(error: Response) {
         return Observable.throw(error.statusText);
     } 

     addUser(user) {
        this.userObj = {
            'id': user.id,
            'name': user.name,
            'email': user.email,
            'phone': user.phone
        }
        return this.http.post(this._postsURL, this.userObj).subscribe(
            (response: Response) => {
                console.log(response); 
            }
        );
    }

 }