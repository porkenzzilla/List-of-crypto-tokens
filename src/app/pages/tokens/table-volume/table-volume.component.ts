import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
      console.log('Volume');
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

// getData(criteria: string){
//   this.ethplorerService.getData(criteria).subscribe((data: any) => {
//     this.currentDataVolume = data.tokens
//     console.log(data.tokens)
//   })
//   }

  @ViewChild('tokensButton') tokensButton!: ElementRef;

  showMoreTokens(){
    this.displayBoolean = !this.displayBoolean;
    this.tokensButton.nativeElement.textContent === 'Show top-50' ?
    this.tokensButton.nativeElement.textContent = 'Hide tokens' :
    this.tokensButton.nativeElement.textContent = 'Show top-50';
    ;
  }

}
