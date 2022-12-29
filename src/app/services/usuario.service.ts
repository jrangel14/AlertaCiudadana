import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { environment } from '../../environments/environment';
import { Http } from '@status/codes';
import axios from 'axios';

const URL = environment.url;

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  token: string = '';

  constructor(private http: HttpClient, private storage: Storage) {
    this.storage.create();
  }

  /*login(email: string, password: string) {
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
  }*/

  async login(email: string, password: string) {
    const data = { email, password };

    const response = await axios.post(`${URL}/auth/login`, data);
    console.log(response);

    if (response.data.code == Http.Ok) {
      this.guardarToken(response.data.data.token);
      return true;
    } else {
      this.token = '';
      return false;
    }
  }

  async guardarToken(token: string) {
    this.token = token;
    await this.storage.set('token', token);
    
  }
}
