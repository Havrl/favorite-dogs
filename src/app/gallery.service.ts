import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private refreshSubject = new BehaviorSubject<boolean>(false);
  $refresh = this.refreshSubject.asObservable();

  doRefresh() {
    this.refreshSubject.next(true);
  }
}
