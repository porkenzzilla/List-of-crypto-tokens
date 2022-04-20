import { Component} from '@angular/core';
//import { Event, Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent{
  // showLoadingIndicator!: boolean;

  // constructor(private router: Router){
    
  //   this.router.events.subscribe((event: Event) => {
  //     if(event instanceof RouteConfigLoadStart){
  //       this.showLoadingIndicator = true;
  //     }
  //     else if(event instanceof RouteConfigLoadEnd){
  //       this.showLoadingIndicator = false;
  //     }
  //   })
  // }
}
