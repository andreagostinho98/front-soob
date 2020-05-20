import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { HomeModel } from 'app/home/home.model';

@Injectable({ providedIn: 'root' })
export class HomeService {
  constructor(private http: HttpClient) {}

  enviarEmail(home: HomeModel): Observable<{}> {
    return this.http.post(SERVER_API_URL + 'api/send-email-whatsapp', home);
  }
}
