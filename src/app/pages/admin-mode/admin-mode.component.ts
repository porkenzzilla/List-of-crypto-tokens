import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-mode',
  templateUrl: './admin-mode.component.html',
  styleUrls: ['./admin-mode.component.scss']
})
export class AdminModeComponent {
  @Input() userName!: string;
  @Input() userPassword!: string;

  users = {
    'admin': {
           username: "admin",
           pass: "admin"
          }
    }
  formData: object = {};

  submitForm(form: NgForm){
    this.formData = form.value;
  }

}
