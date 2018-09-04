import { Component } from "@angular/core";
import { NavbarService } from "../../components/navbar/navbar.service";
@Component({
  selector: "app-overlay-info",
  templateUrl: "./overlay-info.component.html",
  styleUrls: ["./overlay-info.component.scss"]
})
export class OverlayInfoComponent {
  constructor(private navbarService: NavbarService) {}
}
