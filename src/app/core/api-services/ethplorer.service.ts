import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = "api.ethplorer.io";

@Injectable({
  providedIn: 'root'
})
export class EthplorerService {

  constructor(private http: HttpClient) { }

  getData(criteria: string): Observable<any> {
    return this.http.get(`https://${API_URL}/getTop?apiKey=EK-rTqxQ-KXDHUff-AGmfo&criteria=${criteria}`);
  }
}
