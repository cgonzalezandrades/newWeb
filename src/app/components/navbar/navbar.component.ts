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
      this.navbarService.close();
      element.classList.remove("change");
      this.menuclicked = false;
    } else {
      this.navbarService.open();
      element.classList.add("change");
      this.menuclicked = true;
    }
  }
}
