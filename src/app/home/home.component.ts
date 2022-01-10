import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
  }

  refresh() {
    this.galleryService.doRefresh();
  }

}
