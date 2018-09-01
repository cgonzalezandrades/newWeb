import { BottomBannerComponent } from "../banners/bottom-banner/bottom-banner.component";
import { Component, ViewChild } from "@angular/core";
import { NavbarService } from "./navbar.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent {
  constructor(public navbarService: NavbarService) {}

  menuclicked = false;
  animateIcon() {
    const element = document.getElementById("container");
    if (this.menuclicked) {
      element.classList.remove("change");
      this.menuclicked = false;
      this.navbarService.menuOpened = false;
      this.navbarService.bannerAction(false);
    } else {
      element.classList.add("change");
      this.menuclicked = true;
      this.navbarService.menuOpened = true;
      this.navbarService.bannerAction(true);
    }
  }
}
