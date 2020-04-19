import { Component } from '@angular/core';
import { Pokedex } from '../models/pokedex';
import { HttpClient } from '@angular/common/http';
import { Url } from 'url';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pokedex: Pokedex;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let url = 'https://pokeapi.co/api/v2/pokemon/';
    this.loadPokemons(url);
  }

  loadPokemons(url: string) {
    this.http.get<Pokedex>(url)
      .subscribe(response => {
        this.pokedex = response;
      });
  }

}
