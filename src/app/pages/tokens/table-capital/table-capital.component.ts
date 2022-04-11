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
      console.log('Capitalization');
      console.log(data.tokens)
    })
  }

  getTokenImageUrl(tokenAddress: string, tokenName: any): any {
    if(tokenName === "Ethereum"){
      return './../../assets/ETHEREUM.png';
    }
    else if(tokenName === "Holo"){
      return './../../assets/holo.png';
    }
    else if(tokenName === "Wrapped ROSE (Wormhole)"){
      return './../../assets/rose.png';
    }
    else{
      return `https://tokens.1inch.exchange/${tokenAddress}.png`;
    }
}

showMoreTokens(){
  this.displayBoolean = !this.displayBoolean;
}

}
