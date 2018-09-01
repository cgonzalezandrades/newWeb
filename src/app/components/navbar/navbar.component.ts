import { Component } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent {
  menuOpened = false;
  animateIcon() {
    const element = document.getElementById("container");
    if (this.menuOpened) {
      element.classList.remove("change");
      this.menuOpened = false;
    } else {
      element.classList.add("change");
      this.menuOpened = true;
    }
  }
}
