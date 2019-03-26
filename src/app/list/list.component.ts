import {Component, OnInit} from "@angular/core";
 import {ApiService} from "../api.service";
 import {IUsers} from "../users.model";
 
 @Component({
     selector: 'app-list',
     templateUrl: './list.component.html'
 })
 export class ListComponent implements OnInit {
     _usersArray: IUsers[];
 
     constructor(private apiSerivce: ApiService) { }
 
     getPosts(): void {
         this.apiSerivce.getPosts()
             .subscribe(
                 resultArray => this._usersArray = resultArray,
                 error => console.log("Error :: " + error)
             )
     }
 
     ngOnInit(): void {
         this.getPosts();
     }

     onDelete(index: number) {
        this._usersArray.splice(index, 1);
    } 
 }