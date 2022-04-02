import {Component, OnInit} from '@angular/core';
import {EthplorerService} from '../../core/api-services/ethplorer.service';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.scss'],
})
export class TokensComponent implements OnInit {
  currentData: any;
  url: string = "https://ethplorer.io";

  constructor(private ethplorerService: EthplorerService) {
  }

  ngOnInit(): void {
    this.ethplorerService.getData().subscribe((data: any) => {
      this.currentData = data.tokens
      console.log(data.tokens)
    })
  }

}
