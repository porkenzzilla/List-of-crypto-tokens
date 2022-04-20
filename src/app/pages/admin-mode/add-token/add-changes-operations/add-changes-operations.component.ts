import {Component, Input} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-changes-trade',
  templateUrl: './add-changes-operations.component.html',
  styleUrls: ['./add-changes-operations.component.scss']
})
export class AddChangesOperationsComponent {
  tokenImgSrc: string = '';
  @Input() tokenName: string = '';
  @Input() tokenTxsCount24: string = '';
  @Input() tokenTxsCountCurrent1D: string = '';
  @Input() tokenTxsCountCurrent7D: string = '';
  @Input() tokenTxsCountCurrent30D: string = '';
  storageData = [JSON.parse(localStorage.getItem('tokenOper')!)];
  storageImage = localStorage.getItem('imageOper');

  submitForm(form: NgForm) {
    localStorage.setItem("tokenOper", JSON.stringify(form.value));
    localStorage.setItem("imageOper", this.tokenImgSrc);
  }

  onImageSelected(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.tokenImgSrc = e.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  success() {
    this.storageData !== [null] && this.storageImage !== null ? alert("Data has been updated") : alert(
      'Error: something went wrong please try again');
  }
}
