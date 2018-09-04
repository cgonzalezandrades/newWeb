import { Component } from "@angular/core";
import { NavbarService } from "../../navbar/navbar.service";

@Component({
  selector: "app-top-banner",
  templateUrl: "./top-banner.component.html",
  styleUrls: ["./top-banner.component.scss"]
})
export class TopBannerComponent {
  constructor(public navbarService: NavbarService) {}
  show = false;
  test() {
    const test = document.getElementById("pic");
    this.show = true;
    test.classList.add("animated");
    test.classList.add("slideInUp");
  }
}
