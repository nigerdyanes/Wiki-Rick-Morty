import { Component, OnInit } from '@angular/core';
import { map }  from  'rxjs/operators';

import { ApiService } from "../../../core/services/api.service";
import { Character } from '../../../core/models/character.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  characters:Character[];

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getAll().pipe(
      map(response => {
        return response.results
      })
    ).subscribe(res => {
      console.log(res);
      return this.characters = res
    })

    // console.log(this.character);

  }


}
