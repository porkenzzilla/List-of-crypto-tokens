import {Component, OnInit} from '@angular/core';
import {EthplorerService} from '../../../core/api-services/ethplorer.service';
import {Observable} from 'rxjs';
import {Token} from '../../../core/interfaces/ethplorer.interface';
import {tap} from 'rxjs/operators';

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
  url: string = "https://ethplorer.io"; // should be remove after created image pipe
  dataLength = 0;
  data$: Observable<Token[]> = this.ethplorerService.getData('cap').pipe(tap(x => this.dataLength = x.length));
  limit = 10;
  buttonText = BUTTON_STATE.normal;

  constructor(public ethplorerService: EthplorerService) {
  }

  getTokenImageUrl(tokenName: any): any {
    if (tokenName === "Holo") {
      return './../../assets/holo.png';
    } else if (tokenName === "Wrapped ROSE (Wormhole)") {
      return './../../assets/rose.png';
    } else {
      return './../../assets/ETHEREUM.png';
    }
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
