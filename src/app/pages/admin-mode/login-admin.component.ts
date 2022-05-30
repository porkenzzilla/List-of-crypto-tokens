import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {SnackBarService} from 'src/app/core/common-services/snack-bar.service';
import {AuthService} from 'src/app/core/guards/auth.service';
import {AuthApiService} from '../../core/api-services/auth-api.service';
import {AdminUser} from '../../core/constants/fake-user.constant';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
  form!: FormGroup;
  retUrl: string = "";

  constructor(private authService: AuthService, private authApiService: AuthApiService,
              private router: Router, private _snackBar: SnackBarService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, this.userValidatorName]),
      password: new FormControl('', [Validators.required, this.userValidatorPass])
    });
  }

  userValidatorName(control: FormControl) {
    if (control.value !== AdminUser.name) {
      return {
        'userNameError': true
      }
    }
    return null;
  }
  userValidatorPass(control: FormControl) {
    if (control.value !== '0000') {
      return {
        'userNameError': true
      }
    }
    return null;
  }

  submitForm() {
    const formData: { username: string, password: string } = this.form.value;
    this.authApiService.login({login: formData.username, password: formData.password}).subscribe(data => {
      if (this.authService.currentUserValue) {
        this.router.navigate(['add/token-capitalization']);
        return;
      }
      this._snackBar.openSnackBar('You not allowed to enter this page', 'okey', 5000);
      return;
    });
  }

}
