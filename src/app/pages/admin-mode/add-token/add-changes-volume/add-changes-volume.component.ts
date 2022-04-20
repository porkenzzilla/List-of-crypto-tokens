import {Component, Input} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-changes-volume',
  templateUrl: './add-changes-volume.component.html',
  styleUrls: ['./add-changes-volume.component.scss']
})
export class AddChangesVolumeComponent {
  tokenImgSrc: string = '';
  @Input() tokenName: string = '';
  @Input() tokenRate: string = '';
  @Input() tokenMarketCapUsd: string = '';
  @Input() tokenVolDiff1: string = '';
  @Input() tokenVolDiff7: string = '';
  @Input() tokenvolDiff30: string = '';
  storageData = [JSON.parse(localStorage.getItem('tokenVol')!)];
  storageImage = localStorage.getItem('imageVol');

  submitForm(form: NgForm) {
    localStorage.setItem("tokenVol", JSON.stringify(form.value));
    localStorage.setItem("imageVol", this.tokenImgSrc);
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
