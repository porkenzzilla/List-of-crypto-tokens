import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {EthplorerService} from '../../../core/api-services/ethplorer.service';

@Component({
  selector: 'app-table-operations',
  templateUrl: './table-operations.component.html',
  styleUrls: ['./table-operations.component.scss']
})
export class TableOperationsComponent implements OnInit {
  currentDataOperations: any;
  displayBoolean: boolean = false;
  url: string = "https://ethplorer.io";
  
  constructor(private ethplorerService: EthplorerService) {
  }

  ngOnInit(): void {
    this.ethplorerService.getData('count').subscribe((data: any) => {
      this.currentDataOperations = data.tokens
      console.log('Operations');
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

@ViewChild('tokensButton') tokensButton!: ElementRef;

showMoreTokens(){
  this.displayBoolean = !this.displayBoolean;
  this.tokensButton.nativeElement.textContent === 'Show top-50' ?
  this.tokensButton.nativeElement.textContent = 'Hide tokens' :
  this.tokensButton.nativeElement.textContent = 'Show top-50';
  ;
}

}
