import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html'
})
export class FavoritesComponent implements OnInit {

  imageUrls: string[] = [];

  constructor(private storage: LocalStorageService) { }

  ngOnInit(): void {
    this.imageUrls = this.storage.getFavorites();
  }

}
