import { Component, Output, EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html'
})
export class FormComponent {
   @Output() formCreated = new EventEmitter<{userID: number, userName: string, userEmail: string, userContact: string}>();
   @ViewChild('form') userForm: NgForm; 

    onSubmit() {
        this.formCreated.emit({
                userID: this.userForm.value.id,
                userName: this.userForm.value.name,
                userEmail: this.userForm.value.email,
                userContact: this.userForm.value.phone
        });
        this.userForm.reset();
    }
 }