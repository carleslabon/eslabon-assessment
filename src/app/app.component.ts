import { Component } from "@angular/core";
import {IUsers} from "./users.model";
import { ApiService } from './api.service';
 
 @Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.css']
 })
 export class AppComponent {
    
     userElements: IUsers[] = [];

     constructor(private apiService: ApiService) { }

     onFormCreated(userData: {userID: number, userName: string, userEmail: string, userContact: string}) {
        this.apiService.addUser(
            this.userElements.push({
                id: userData.userID,
                name: userData.userName,
                email: userData.userEmail,
                phone: userData.userContact
            }));
     } 
  }