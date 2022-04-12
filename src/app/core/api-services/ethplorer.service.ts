import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import {IEthplorerResponse, Token} from '../interfaces/ethplorer.interface';

const API_URL = "api.ethplorer.io";

@Injectable({
  providedIn: 'root'
})
export class EthplorerService {

  constructor(private http: HttpClient) {
  }

  getData(criteria: string): Observable<Token[]> {
    return this.http.get<IEthplorerResponse>(`https://${API_URL}/getTop?apiKey=EK-rTqxQ-KXDHUff-AGmfo&criteria=${criteria}`).pipe(
      map(x => x.tokens), delay(2000));
  }
}
