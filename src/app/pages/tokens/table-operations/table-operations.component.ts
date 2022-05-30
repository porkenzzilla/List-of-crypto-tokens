import {Component} from '@angular/core';
import {EthplorerService} from '../../../core/api-services/ethplorer.service';
import {Observable} from 'rxjs';
import {Token} from '../../../core/interfaces/ethplorer.interface';
import {tap} from 'rxjs/operators';
import {Details2Component} from "../../modals/details-2/details-2.component";
import {Details4Component} from "../../modals/details-4-custom-token/details-4.component";
import {MatDialog} from "@angular/material/dialog";
import {CustomDataService} from "../../../core/client-services/custom-data.service";
import {CustomData} from "../../../core/interfaces/custom-data.interface";

enum BUTTON_STATE {
  normal = 'Show top-50',
  expanded = 'Hide tokens'
}

@Component({
  selector: 'app-table-operations',
  templateUrl: './table-operations.component.html',
  styleUrls: ['./table-operations.component.scss']
})
export class TableOperationsComponent{
  dataLength = 0;
  limit = 10;
  buttonText = BUTTON_STATE.normal;
  storageData: CustomData[] = [];
  data$: Observable<Token[]> = this.ethplorerService.getData('count')
    .pipe(tap(x => this.dataLength = x.length));

  constructor(public ethplorerService: EthplorerService,
              private _dialog: MatDialog, private _CDService: CustomDataService) {
    this._CDService.getData().subscribe((json: CustomData[]) => {
      for(let i = json.length - 1; i >= 0; i--){
        if (json[i].id.includes('tokenOpr')) {
          this.storageData.push(json[i]);
        }
      }
    });
  }

  showMoreTokens(): void {
    if (this.buttonText === BUTTON_STATE.normal) {
      this.limit = this.dataLength;
      this.buttonText = BUTTON_STATE.expanded;
      return;
    }

    else if (this.buttonText === BUTTON_STATE.expanded) {
      this.limit = 10;
      this.buttonText = BUTTON_STATE.normal;
      return;
    }
  };

  showDetails(item: Token): void {
    this._dialog.open(Details2Component, {
      width: '450px',
      data: item,
    });
  }

  showDetailsForCustomToken(item: CustomData): void {
    this._dialog.open(Details4Component, {
      width: '450px',
      data: item,
    });
  }

}
