import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  getTokenImageUrl(tokenName: any): any {
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
}
