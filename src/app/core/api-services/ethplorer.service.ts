import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {IEthplorerResponse, Token} from '../interfaces/ethplorer.interface';
import {environment} from 'src/environments/environment.prod';

// const API_URL = "api.ethplorer.io"; // @todo move to environments
// запитай чи в продакшен чи в розробку, я закинув в продакшен
// при зборці проекту вміст зміниться з dev на prod?

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
