import { Component } from '@angular/core';

interface Choose {
  routing: string;
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-token',
  templateUrl: './add-token.component.html',
  styleUrls: ['./add-token.component.scss']
})
export class AddTokenComponent{
  chooseBy: Choose[] = [
    {routing: '/add/token-capitalization', value: 'token-capitalization', viewValue: 'Capitalization'},
    {routing: '/add/token-volume', value: 'token-volume', viewValue: 'Volume of Trade'},
    {routing: '/add/token-operations', value: 'token-operations', viewValue: 'Operations'},
  ];
}
