import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { environment } from '../../environments/environment';
import { Http } from '@status/codes';

const URL = environment.url;

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  // token: string = null;4

  constructor(private http: HttpClient, private storage: Storage) {}

  login(email: string, password: string) {
    const data = { email, password };

    return new Promise((resolve) => {
      this.http.post(`${URL}/auth/login`, data).subscribe((resp: any) => {
        console.log(resp);
        if (resp.code == Http.Ok) {
          resolve(true);
        } else {
          //this.storage.clear();
          resolve(false);
        }
      });
    });
  }
}
