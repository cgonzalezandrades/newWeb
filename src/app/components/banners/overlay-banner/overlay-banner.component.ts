import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-overlay-banner",
  templateUrl: "./overlay-banner.component.html",
  styleUrls: ["./overlay-banner.component.scss"]
})
export class OverlayBannerComponent {
  constructor(public snackBar: MatSnackBar) {}
  experienceTab = false;
  experienceSlide = false;
  seeExperience() {
    this.experienceSlide = !this.experienceSlide;
    setTimeout(() => {
      this.experienceTab = !this.experienceTab;
    }, 900);
    setTimeout(() => {
      this.experienceSlide = !this.experienceSlide;
    }, 900);
  }

  openSnackBar() {
    this.snackBar.open("Yay !", "Undo", {
      duration: 1000
    });
  }
}
