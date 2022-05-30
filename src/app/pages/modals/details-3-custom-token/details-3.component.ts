import {Component, Inject} from '@angular/core';
import {CustomData} from "../../../core/interfaces/custom-data.interface";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-details3',
  templateUrl: './details-3.component.html',
  styleUrls: ['./details-3.component.scss']
})
export class Details3Component {
  constructor(public dialogRef: MatDialogRef<Details3Component>,
              @Inject(MAT_DIALOG_DATA) public customData: CustomData) {
  }
}
