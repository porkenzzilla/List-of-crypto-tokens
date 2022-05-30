import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Token} from "../../../core/interfaces/ethplorer.interface";

@Component({
  selector: 'app-details2',
  templateUrl: './details-2.component.html',
  styleUrls: ['./details-2.component.scss']
})
export class Details2Component {

  constructor(public dialogRef: MatDialogRef<Details2Component>,
              @Inject(MAT_DIALOG_DATA) public data: Token) {
  }

}
