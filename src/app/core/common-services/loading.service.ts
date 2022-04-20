import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private status = new BehaviorSubject<boolean>(false);
  public isLoading = this.status.pipe(delay(0));
  public requestCounter = 0;

  constructor() {
  }

  show() {
    if (!this.requestCounter) {
      this.status.next(true);
    }

    this.requestCounter++;
  }

  hide() {
    this.requestCounter--;

    if (!this.requestCounter) {
      this.status.next(false);
    }
  }

}
