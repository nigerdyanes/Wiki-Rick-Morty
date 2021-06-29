import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Character } from "../models/character.model";

import { environment } from "../../../environments/environment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  characters:Character[];
  pathCharacter = 'character/'

  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<any>(`${environment.url_api}${this.pathCharacter}`)
  }
}
