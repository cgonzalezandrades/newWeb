import { Component, TemplateRef } from "@angular/core";
import { NavbarService } from "./components/navbar/navbar.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(public navbarService: NavbarService) {}
}
