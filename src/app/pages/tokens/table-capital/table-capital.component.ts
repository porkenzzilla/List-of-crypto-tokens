import {Component} from '@angular/core';
import {EthplorerService} from '../../../core/api-services/ethplorer.service';
import {Observable} from 'rxjs';
import {Token} from '../../../core/interfaces/ethplorer.interface';
import {tap} from 'rxjs/operators';
import {Details1Component} from "../../modals/details-1/details-1.component";
import {Details3Component} from "../../modals/details-3-custom-token/details-3.component";
import {MatDialog} from "@angular/material/dialog";
import {CustomDataService} from "../../../core/client-services/custom-data.service";
import {CustomData} from "../../../core/interfaces/custom-data.interface";

enum BUTTON_STATE {
  normal = 'Show top-50',
  expanded = 'Hide tokens'
}

@Component({
  selector: 'app-table-capital',
  templateUrl: './table-capital.component.html',
  styleUrls: ['./table-capital.component.scss']
})
export class TableCapitalComponent {
  dataLength = 0;
  limit = 10;
  buttonText = BUTTON_STATE.normal;
  storageData: CustomData[] = [];
  data$: Observable<Token[]> = this.ethplorerService.getData('cap')
    .pipe(tap(x => this.dataLength = x.length));


  constructor(public ethplorerService: EthplorerService,
              private _dialog: MatDialog, private _CDService: CustomDataService) {
    this._CDService.getData().subscribe((json: CustomData[]) => {
      for(let i = json.length - 1; i >= 0; i--){
        if (json[i].id.includes('tokenCap')) {
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
    } else if (this.buttonText === BUTTON_STATE.expanded) {
      this.limit = 10;
      this.buttonText = BUTTON_STATE.normal;
      return;
    }
  }

  showDetails(item: Token): void {
    this._dialog.open(Details1Component, {
      width: '450px',
      data: item,
    });
  }

  showDetailsForCustomToken(item: CustomData): void {
    this._dialog.open(Details3Component, {
      width: '450px',
      data: item,
    });
  }

}
