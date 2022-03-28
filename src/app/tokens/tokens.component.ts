import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.scss'],
  providers: [HttpService]
})
export class TokensComponent implements OnInit {
  currentData: any;
  url: string = "https://ethplorer.io";

  constructor(private httpService: HttpService){}

  ngOnInit(): void {
    this.httpService.getData().subscribe((data: any) => {
      this.currentData = data.tokens
      console.log(data.tokens) })
  }

}
