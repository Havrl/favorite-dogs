import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { take } from 'rxjs/operators'
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-dog-gallery',
  templateUrl: './dog-gallery.component.html'
})
export class DogGalleryComponent implements OnInit, OnDestroy {

  tilesCount = 6;
  randomImageUrls: string[] = [];
  sub: Subscription;

  constructor(private http: HttpClient, private galleryService: GalleryService) {
    this.sub = this.galleryService.$refresh.pipe().subscribe(
      () => this.loadRandomImages()
    );
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {
    this.loadRandomImages();
  }

  loadRandomImages() {
    const requestList = [];

    for (let i = 0; i < this.tilesCount; i++) {
      requestList.push(this.getRandomImage());
    }

    forkJoin(requestList).pipe(
      take(1)
     ).subscribe(
      (data) => {
        this.randomImageUrls = data.map((item: any) => item.url);
      }
    );
  }

  getRandomImage() {
    return this.http.get('https://random.dog/woof.json');
  }

}
