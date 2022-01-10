import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-dog-tile',
  templateUrl: './dog-tile.component.html'
})
export class DogTileComponent implements OnInit {

  @Input() imageSrc: string = '';
  @Input() type: 'favorites' | 'home' = 'home';

  width: string = '300px';
  isFavorite: boolean = false;

  constructor(private storage: LocalStorageService) { }

  ngOnInit(): void {
  }

  addToFavorites() {
    const favorites = this.storage.getFavorites();

    favorites.push(this.imageSrc);
    this.storage.saveFavorites(favorites);

    this.isFavorite = true;
  }

}
