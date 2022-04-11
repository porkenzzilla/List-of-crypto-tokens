import { Component, OnInit } from '@angular/core';
import {EthplorerService} from '../../../core/api-services/ethplorer.service';

@Component({
  selector: 'app-table-capital',
  templateUrl: './table-capital.component.html',
  styleUrls: ['./table-capital.component.scss']
})
export class TableCapitalComponent implements OnInit {
  currentDataCapital: any;
  displayBoolean: boolean = false;
  url: string = "https://ethplorer.io";
  
  constructor(private ethplorerService: EthplorerService) {
  }

  ngOnInit(): void {
    this.ethplorerService.getData('cap').subscribe((data: any) => {
      this.currentDataCapital = data.tokens
    })
  }

  getTokenImageUrl(tokenName: any): any {
    if(tokenName === "Holo"){
      return './../../assets/holo.png';
    }
    else if(tokenName === "Wrapped ROSE (Wormhole)"){
      return './../../assets/rose.png';
    }
    else{
      return './../../assets/ETHEREUM.png';
    }
}

showMoreTokens(){
  this.displayBoolean = !this.displayBoolean;
}

}
