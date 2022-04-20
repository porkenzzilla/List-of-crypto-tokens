import {Component} from '@angular/core';
import {EthplorerService} from '../../../core/api-services/ethplorer.service';
import {Observable} from 'rxjs';
import {Token} from '../../../core/interfaces/ethplorer.interface';
import {tap} from 'rxjs/operators';

enum BUTTON_STATE {
  normal = 'Show top-50',
  expanded = 'Hide tokens'
}

@Component({
  selector: 'app-table-volume',
  templateUrl: './table-volume.component.html',
  styleUrls: ['./table-volume.component.scss']
})
export class TableVolumeComponent{
  dataLength = 0;
  data$: Observable<Token[]> = this.ethplorerService.getData('trade').pipe(tap(x => this.dataLength = x.length));
  limit = 10;
  buttonText = BUTTON_STATE.normal;
  storageData = [JSON.parse(localStorage.getItem('tokenVol')!)];
  storageImage = localStorage.getItem('imageVol');

  constructor(public ethplorerService: EthplorerService) {
    console.log('Volume of Trade localStorage', localStorage);
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
