import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../../../../core/common-services/local-storage.service';
import { SnackBarService } from '../../../../core/common-services/snack-bar.service';

@Component({
  selector: 'app-add-changes-capital',
  templateUrl: './add-changes-capital.component.html',
  styleUrls: ['./add-changes-capital.component.scss']
})
export class AddChangesCapitalComponent implements OnInit {
  form!: FormGroup;
  tokenImgSrc: string = '';
  allControls: any;

  constructor(public _localStorageService: LocalStorageService, private _snackBar: SnackBarService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      rate: new FormControl('', Validators.required),
      marketCapUsd: new FormControl('', Validators.required),
      diff: new FormControl('', Validators.required),
      diff7d: new FormControl('', Validators.required),
      diff30d: new FormControl('', Validators.required)
    });
    // запитати як ось це зробити краще пробував через функцію багато раз викликається
    // пробував через ngFor він чогось не бачить
    this.allControls = Object.values(this.form.controls);
  }

  submitForm() {
    this._localStorageService.setInfo('tokenCap', this.form.value);
  }

  onImageSelected(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.tokenImgSrc = e.target.result;
      this._localStorageService.setInfo('imageCap', this.tokenImgSrc);
    };

    try {
      const maxSizeOfImage = 1300000;
      if (event.target.files[0].size > maxSizeOfImage) {
        throw new Error;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
    catch (error) {
      this._snackBar.openSnackBar(`${error}: the image size cannot exceed 1,3Mb`, 'ok', 5000);
    }
  }

  success() {
    try {
      if (this._localStorageService.getInfo('imageCap') === null) {
        throw new Error('please select an image!');
      }
      this._snackBar.openSnackBar('Data has been updated', 'ok');
    }
    catch (error) {
      this._snackBar.openSnackBar(`${error}`, 'ok', 4000);
    }
  }
}
