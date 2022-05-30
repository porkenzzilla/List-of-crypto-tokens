import {Component, Inject} from '@angular/core';
import {Token} from "../../../core/interfaces/ethplorer.interface";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-details1',
  templateUrl: './details-1.component.html',
  styleUrls: ['./details-1.component.scss']
})
export class Details1Component {

  constructor(public dialogRef: MatDialogRef<Details1Component>,
              @Inject(MAT_DIALOG_DATA) public data: Token) {
  }

}
