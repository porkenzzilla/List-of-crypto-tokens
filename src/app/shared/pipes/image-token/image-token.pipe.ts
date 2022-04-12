import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appImageToken'
})
export class ImageTokenPipe implements PipeTransform {

  transform(imageUrl: string, name: string): string {
    const nameLowerCase = name.toLowerCase();
    if(imageUrl && nameLowerCase !== 'Holo'.toLowerCase()){
      return `https://ethplorer.io${imageUrl}`;
    }
    switch(nameLowerCase){
      case "Holo".toLowerCase():
        return './../../assets/holo.png';
      case "Wrapped ROSE (Wormhole)".toLowerCase():
        return './../../assets/rose.png';
      case "Multichain".toLowerCase():  
        return './../../assets/Multichain.webp';
      case "Stronger".toLowerCase():
       return './../../assets/stronger.png';
      case "Zynga Metaverse".toLowerCase():  
        return './../../assets/Metaverse.png'; 
      case "Webb-DAO.io".toLowerCase():  
        return './../../assets/web-dao.jpg.webp';
      case "PudgyDAO.io".toLowerCase():  
        return './../../assets/web-dao.jpg.webp';
      case "SaitaRealty".toLowerCase():  
        return './../../assets/saita-realty.jpg';
      case "KOK Coin".toLowerCase():  
        return './../../assets/kok.webp'; 
      case "Atari Metaverse".toLowerCase():  
        return './../../assets/atari.png';
      case "Gnosis Safe".toLowerCase():  
        return './../../assets/gnosis.png';
      case "Terraform DAO".toLowerCase():  
        return './../../assets/terraform-dao.jpg';
      case "Optimistic Thales Token".toLowerCase():                return './../../assets/optimistic.png';
      case "PandaDAO".toLowerCase():
        return './../../assets/panda.jpeg';
      case "Read The Manifesto".toLowerCase():
        return './../../assets/read-the-manifesto.png';
      case "WeAreSatoshi".toLowerCase():
        return './../../assets/we-are-satoshi.png';
      case "RETURN TO SPACE".toLowerCase():
        return './../../assets/return-to-space.png';
      case "Guarded Ether".toLowerCase():
        return './../../assets/guarded-ether.png';
      case "FLEX Coin".toLowerCase():
        return './../../assets/flex-coin.png';
      case "PYR Token".toLowerCase():
        return './../../assets/PYR-Token.png';
      case "Dalarnia".toLowerCase():
        return './../../assets/Dalarnia.png';
      case "Kava.io".toLowerCase():
        return './../../assets/Kava-io.webp';  
        
      default:
        return './../../assets/ETHEREUM.png';
    }
  }

}
