import { Component, OnInit } from '@angular/core';
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
    else if(tokenName === "Wrapped ROSE (Wormhole)"){
      return './../../assets/rose.png';
    }
    else if(tokenName === "Multichain"){
      return './../../assets/Multichain.webp';
    }
    else if(tokenName === "Stronger"){
      return './../../assets/stronger.png';
    }
    else if(tokenName === "Zynga Metaverse"){
      return './../../assets/Metaverse.png';
    }
    else if(tokenName === "Webb-DAO.io" || tokenName === "PudgyDAO.io"){
      return './../../assets/web-dao.jpg.webp';
    }
    else if(tokenName === "SaitaRealty"){
      return './../../assets/saita-realty.jpg';
    }
    else if(tokenName === "KOK Coin"){
      return './../../assets/kok.webp';
    }
    else if(tokenName === "Atari Metaverse"){
      return './../../assets/atari.png';
    }
    else if(tokenName === "Gnosis Safe"){
      return './../../assets/gnosis.png';
    }
    else if(tokenName === "Terraform DAO"){
      return './../../assets/terraform-dao.jpg';
    }
    else if(tokenName === "Optimistic Thales Token"){
      return './../../assets/optimistic.png';
    }
    else if(tokenName === "PandaDAO"){
      return './../../assets/panda.jpeg';
    }
    else if(tokenName === "Read The Manifesto"){
      return './../../assets/read-the-manifesto.png';
    }
    else if(tokenName === "WeAreSatoshi"){
      return './../../assets/we-are-satoshi.png';
    }
    else if(tokenName === "RETURN TO SPACE"){
      return './../../assets/return-to-space.png';
    }
    else if(tokenName === "Guarded Ether"){
      return './../../assets/guarded-ether.png';
    }
    else{
      return `https://tokens.1inch.exchange/${tokenAddress}.png`;
    }
}

showMoreTokens(){
  this.displayBoolean = !this.displayBoolean;
}

}
