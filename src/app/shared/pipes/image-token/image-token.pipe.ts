import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appImageToken'
})
export class ImageTokenPipe implements PipeTransform {

  transform(imageUrl: string, name: string): string {
    const nameLowerCase = name.toLowerCase();
    if(imageUrl !== undefined) {
      if (imageUrl.length > 100) {
        return imageUrl;
      }
    }
    if(imageUrl && nameLowerCase !== 'Holo'.toLowerCase()){
        return `https://ethplorer.io${imageUrl}`;
      }
    switch(nameLowerCase){
      case "Holo".toLowerCase():
        return './../../assets/tokens/holo.png';
      case "Wrapped ROSE (Wormhole)".toLowerCase():
        return './../../assets/tokens/rose.png';
      case "Multichain".toLowerCase():
        return './../../assets/tokens/Multichain.webp';
      case "Stronger".toLowerCase():
       return './../../assets/tokens/stronger.png';
      case "Zynga Metaverse".toLowerCase():
        return './../../assets/tokens/Metaverse.png';
      case "Webb-DAO.io".toLowerCase():
        return './../../assets/tokens/web-dao.jpg.webp';
      case "PudgyDAO.io".toLowerCase():
        return './../../assets/tokens/web-dao.jpg.webp';
      case "SaitaRealty".toLowerCase():
        return './../../assets/tokens/saita-realty.jpg';
      case "KOK Coin".toLowerCase():
        return './../../assets/tokens/kok.webp';
      case "Atari Metaverse".toLowerCase():
        return './../../assets/tokens/atari.png';
      case "Gnosis Safe".toLowerCase():
        return './../../assets/tokens/gnosis.png';
      case "Terraform DAO".toLowerCase():
        return './../../assets/tokens/terraform-dao.jpg';
      case "Optimistic Thales Token".toLowerCase():
        return './../../assets/tokens/optimistic.png';
      case "PandaDAO".toLowerCase():
        return './../../assets/tokens/panda.jpeg';
      case "Read The Manifesto".toLowerCase():
        return './../../assets/tokens/read-the-manifesto.png';
      case "WeAreSatoshi".toLowerCase():
        return './../../assets/tokens/we-are-satoshi.png';
      case "RETURN TO SPACE".toLowerCase():
        return './../../assets/tokens/return-to-space.png';
      case "Guarded Ether".toLowerCase():
        return './../../assets/tokens/guarded-ether.png';
      case "FLEX Coin".toLowerCase():
        return './../../assets/tokens/flex-coin.png';
      case "PYR Token".toLowerCase():
        return './../../assets/tokens/PYR-Token.png';
      case "Dalarnia".toLowerCase():
        return './../../assets/tokens/Dalarnia.png';
      case "Kava.io".toLowerCase():
        return './../../assets/tokens/Kava-io.webp';
      case "ApeCoin".toLowerCase():
        return './../../assets/tokens/ApeCoin.png';
      case "Wrapped UST Token".toLowerCase():
        return './../../assets/tokens/Wrapped-UST-Token.webp';
      case "League of Kingdoms Arena".toLowerCase():
        return './../../assets/tokens/League-of-Kingdoms-Arena.png';
      case "Sandbox.claims".toLowerCase():
        return './../../assets/tokens/sandbox-claims.png';
      case "Nike RTFKT Metaverse".toLowerCase():
        return './../../assets/tokens/Nike-RTFKT-Metaverse.jpg';
      case "Pre Ocean Floor Music".toLowerCase():
        return './../../assets/tokens/Pre-Ocean-Floor-Music.jpeg';
      case "NCsoft Metaverse".toLowerCase():
        return './../../assets/tokens/NCsoft-Metaverse.png';
      case "Universal Pictures Metaverse".toLowerCase():
        return './../../assets/tokens/Universal-Pictures-Metaverse.jpg';
      case "Musk Metaverse".toLowerCase():
        return './../../assets/tokens/Musk-Metaverse.webp';
      case "Church DAO".toLowerCase():
        return './../../assets/tokens/Church-DAO.png.jpeg';
      case "Sanin Inu".toLowerCase():
        return './../../assets/tokens/Sanin-Inu.png';
      case "Katara Inu".toLowerCase():
        return './../../assets/tokens/Katara-Inu.png.webp';
      case "Ubisoft Metaverse".toLowerCase():
        return './../../assets/tokens/Ubisoft-Metaverse.jpeg';
      case "Musk 2178".toLowerCase():
        return './../../assets/tokens/Musk-2178.png';
      case "Heineken Metaverse".toLowerCase():
        return './../../assets/tokens/Heineken-Metaverse.png';
      case "Atlus Metaverse".toLowerCase():
        return './../../assets/tokens/Atlus-Metaverse.jpg';
      case "Project Spartan".toLowerCase():
        return './../../assets/tokens/Project-Spartan.png';
      case "Ethereum".toLowerCase():
        return './../../assets/tokens/ETHEREUM.png';
      default:
        return './../../assets/tokens/ETHEREUM.png';
    }
  }
}
