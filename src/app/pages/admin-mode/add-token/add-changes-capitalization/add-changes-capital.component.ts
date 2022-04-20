import {Component, Input} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-changes-capital',
  templateUrl: './add-changes-capital.component.html',
  styleUrls: ['./add-changes-capital.component.scss']
})
export class AddChangesCapitalComponent {
  tokenImgSrc: string = '';
  @Input() tokenName: string = '';
  @Input() tokenRate!: number;
  @Input() tokenMarketCapUsd!: number;
  @Input() tokenDiff!: number;
  @Input() tokenDiff7d!: number;
  @Input() tokenDiff30d!: number;
  storageData = [JSON.parse(localStorage.getItem('tokenCap')!)];
  storageImage = localStorage.getItem('imageCap');

  submitForm(form: NgForm) {
    localStorage.setItem("tokenCap", JSON.stringify(form.value));
    localStorage.setItem("imageCap", this.tokenImgSrc);
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
