import { Component, ViewChild } from "@angular/core";
import { NavbarService } from "./navbar.service";
import { OverlayInfoService } from "../../pages/overlay-info/overlay-info.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent {
  constructor(
    public navbarService: NavbarService,
    public overlayInfoService: OverlayInfoService
  ) {}

  menuclicked = false;
  animateIcon() {
    const element = document.getElementById("container");
    if (this.menuclicked) {
      this.navbarService.setOverlayInfoStatus(false);
      setTimeout(() => {
        this.overlayInfoService.close();
      }, 1000);
      element.classList.remove("change");
      this.menuclicked = false;
    } else {
      this.navbarService.setOverlayInfoStatus(true);

      this.overlayInfoService.open();
      element.classList.add("change");
      this.menuclicked = true;
    }
  }
}
