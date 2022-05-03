import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/core/common-services/snack-bar.service';
import { AuthService } from 'src/app/core/guards/auth.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit{
  form!: FormGroup;
  formData: object = {};
  retUrl: string = "";

 constructor(private authService: AuthService, 
  private router: Router, private _snackBar: SnackBarService){}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, this.userValidator]),
      password: new FormControl('', [Validators.required, this.userValidator])
    });
  }

  userValidator(control: FormControl){
     if(control.value !== 'admin'){
      return {
         'userNameError': true
         }
      }
      return null;
   }

  submitForm(){
    this.formData = this.form.value;
    this.authService.isAdminUser(this.form.value.username, this.form.value.password).subscribe(data => {
      if (data) {
           this.router.navigate(['add/token-capitalization']);
      } else {
           this._snackBar.openSnackBar('You not allowed to enter this page', 'ok', 5000);
           this.router.navigate(['']);
      }
  });
  }

}
