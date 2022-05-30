import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators';
import {Data} from '../interfaces/custom-data.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomDataService {

  constructor(private http: HttpClient) {
  }

  createId(): string {
    let id = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let i = 0; i < 24; i++) {
      id += characters.charAt(Math.floor(Math.random() * 36));
    }
    return id;
  }

  getData() {
    return this.http.get("http://localhost:3000/customData").pipe(
      map((response) => {
        return Object(response)
      })
    );
  }

  postData(customData: Data, customId: string, imageName: string) {
    const data = {
      id: customId,
      image: imageName,
      data: customData,
    }
    return this.http.post("http://localhost:3000/customData", data).pipe(
      map((response) => {
        return Object(response)
      })
    )
  }

}
