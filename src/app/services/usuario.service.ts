import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { environment } from '../../environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  // token: string = null;

  constructor(private http: HttpClient, private storage: Storage) {}

  login(email: string, password: string) {
    const data = { email, password };

    this.http.post(`${URL}/login`, data).subscribe((resp) => {
      console.log(resp);
      
    });
  }
}
