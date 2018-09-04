import { Injectable } from "@angular/core";

@Injectable()
export class NavbarService {
  overlayStatus: boolean;

  getOverlayInfoStatus() {
    return this.overlayStatus;
  }

  setOverlayInfoStatus(overlayStatus) {
    this.overlayStatus = overlayStatus;
  }
}
