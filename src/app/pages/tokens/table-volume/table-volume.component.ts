import {Component, OnInit} from '@angular/core';
import {EthplorerService} from '../../../core/api-services/ethplorer.service';

@Component({
  selector: 'app-table-volume',
  templateUrl: './table-volume.component.html',
  styleUrls: ['./table-volume.component.scss']
})
export class TableVolumeComponent implements OnInit {
  currentDataVolume: any;
  displayBoolean: boolean = false;
  url: string = "https://ethplorer.io";

  constructor(private ethplorerService: EthplorerService) {
  }

  ngOnInit(): void {
    this.ethplorerService.getData('trade').subscribe((data: any) => {
      this.currentDataVolume = data.tokens
    })
  }

  getTokenImageUrl(tokenName: any): any {
    console.log('getTokenImageUrl');
    if (tokenName === "Wrapped ROSE (Wormhole)") {
      return './../../assets/rose.png';
    } else if (tokenName === "FLEX Coin") {
      return './../../assets/flex-coin.png';
    } else if (tokenName === "Multichain") {
      return './../../assets/Multichain.webp';
    } else if (tokenName === "PYR Token") {
      return './../../assets/PYR-Token.png';
    } else if (tokenName === "Dalarnia") {
      return './../../assets/Dalarnia.png';
    } else if (tokenName === "Kava.io") {
      return './../../assets/Kava-io.webp';
    } else {
      return './../../assets/ETHEREUM.png';
    }
  }

  showMoreTokens() {
    this.displayBoolean = !this.displayBoolean;
  }

}
