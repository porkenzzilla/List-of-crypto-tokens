import {Component} from '@angular/core';
import { LoadingService } from 'src/app/core/common-services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
// loading$ = this.loader.loading$;
title = 'List-of-crypto-tokens';

constructor(public loadingService: LoadingService){}

}
