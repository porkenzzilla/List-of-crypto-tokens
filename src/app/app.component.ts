import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpService]
})
export class AppComponent {
  title = 'List-of-crypto-tokens';
  currentData: any;

  constructor(private httpService: HttpService){}

  ngOnInit(){
    this.httpService.getData().subscribe((data: any) => {
      this.currentData = data.tokens
      console.log(data.tokens) })
  }
  
}
