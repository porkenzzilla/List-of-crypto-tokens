import {Component} from '@angular/core';
import {EthplorerService} from '../../../core/api-services/ethplorer.service';
import {Observable} from 'rxjs';
import {Token} from '../../../core/interfaces/ethplorer.interface';
import {tap} from 'rxjs/operators';
import { LocalStorageService } from 'src/app/core/common-services/local-storage.service';

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
  data$: Observable<Token[]> = this.ethplorerService.getData('count').pipe(tap(x => this.dataLength = x.length));
  limit = 10;
  buttonText = BUTTON_STATE.normal;
  storageData = [this.localStorageService.getInfo('tokenOper')];
  storageImage = this.localStorageService.getInfo('imageOper');

  constructor(public ethplorerService: EthplorerService, private localStorageService: LocalStorageService) {
  }

  showMoreTokens() {
    if (this.buttonText === BUTTON_STATE.normal) {
      this.limit = this.dataLength;
      this.buttonText = BUTTON_STATE.expanded;
      return;
    }

    if (this.buttonText === BUTTON_STATE.expanded) {
      this.limit = 10;
      this.buttonText = BUTTON_STATE.normal;
      return;
    }
  }
}
