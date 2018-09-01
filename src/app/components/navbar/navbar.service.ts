import { Injectable } from "@angular/core";

@Injectable()
export class NavbarService {
  menuOpened = false;
  bannerShow = false;
  bannerAction(action) {
    if (action) {
      this.bannerShow = true;
    } else {
      setTimeout(() => {
        this.bannerShow = false;
      }, 1000);
    }
  }
}
