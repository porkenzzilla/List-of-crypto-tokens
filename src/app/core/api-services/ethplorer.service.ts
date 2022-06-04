import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {IEthplorerResponse, Token} from '../interfaces/ethplorer.interface';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EthplorerService {
  constructor(private http: HttpClient) {
  }

  getData(criteria: string): Observable<Token[]> {
    return this.http.get<IEthplorerResponse>(`https://${environment.API_URL}/getTop?apiKey=EK-rTqxQ-KXDHUff-AGmfo&criteria=${criteria}`)
    .pipe(map(x => x.tokens));
  }
}
