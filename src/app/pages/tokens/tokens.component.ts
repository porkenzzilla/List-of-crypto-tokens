import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {EthplorerService} from '../../core/api-services/ethplorer.service';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.scss'],
})
export class TokensComponent implements OnInit{
  currentData: any;
  url: string = "https://ethplorer.io";
  displayBoolean: boolean = false;

  constructor(private ethplorerService: EthplorerService) {
  }

  ngOnInit(): void {
    this.ethplorerService.getData().subscribe((data: any) => {
      this.currentData = data.tokens
      console.log(data.tokens)
    })
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
