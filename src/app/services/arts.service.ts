import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Art } from '../models/art';

@Injectable({
    providedIn: 'root'
})
export class ArtsService {
    private url = 'http://192.168.1.90:3000/arts/';

    constructor(private http: HttpClient) {

    }
    getAll() {
        return this.http.get<Array<any>>(this.url);
    }
    getOneById(id: number) {
        return this.http.get<object>(this.url + id);
    }
    add(art: Art) {
        return this.http.post(this.url, art);
    }
}
