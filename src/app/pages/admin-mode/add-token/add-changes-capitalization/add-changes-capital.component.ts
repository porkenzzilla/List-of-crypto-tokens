import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SnackBarService } from '../../../../core/common-services/snack-bar.service';
import {CustomDataService} from '../../../../core/client-services/custom-data.service';

@Component({
  selector: 'app-add-changes-capital',
  templateUrl: './add-changes-capital.component.html',
  styleUrls: ['./add-changes-capital.component.scss']
})
export class AddChangesCapitalComponent implements OnInit {
  form!: FormGroup;
  tokenImgSrc: string = '';
  allControls: any;
  formId: string = `tokenCap-${this._CDService.createId()}`;

  constructor(private _snackBar: SnackBarService, private _CDService: CustomDataService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      rate: new FormControl('', Validators.required),
      cap: new FormControl('', Validators.required),
      diff: new FormControl('', Validators.required),
      diff7d: new FormControl('', Validators.required),
      diff30d: new FormControl('', Validators.required)
    });

    this.allControls = Object.values(this.form.controls);
  }

  submitForm() {
    this._CDService.postData(this.form.value, this.formId, this.tokenImgSrc)
      .subscribe((json)=>{});
  }

  onImageSelected(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.tokenImgSrc = e.target.result;
    };
    try {
      const maxSizeOfImage = 5000000;
      if (event.target.files[0].size > maxSizeOfImage) {
        throw new Error;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
    catch (error) {
      this._snackBar.openSnackBar(`${error}: the image size cannot exceed 5Mb`, 'ok', 5000);
    }
  }

  success() {
    try {
      this._snackBar.openSnackBar('Data has been updated', 'ok');
    }
    catch (error) {
      this._snackBar.openSnackBar(`${error}`, 'ok', 4000);
    }
  }
}
