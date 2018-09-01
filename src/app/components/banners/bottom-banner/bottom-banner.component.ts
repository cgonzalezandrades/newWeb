import { Component } from "@angular/core";
import { NavbarService } from "../../navbar/navbar.service";

@Component({
  selector: "app-bottom-banner",
  templateUrl: "./bottom-banner.component.html",
  styleUrls: ["./bottom-banner.component.scss"]
})
export class BottomBannerComponent {
  constructor(public navbarService: NavbarService) {}
}
