import {Component, Inject} from '@angular/core';
import {CustomData} from "../../../core/interfaces/custom-data.interface";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-details4',
  templateUrl: './details-4.component.html',
  styleUrls: ['./details-4.component.scss']
})
export class Details4Component {

  constructor(public dialogRef: MatDialogRef<Details4Component>,
              @Inject(MAT_DIALOG_DATA) public customData: CustomData) {
  }

}
