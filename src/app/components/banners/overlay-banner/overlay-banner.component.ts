import { Component } from "@angular/core";

@Component({
  selector: "app-overlay-banner",
  templateUrl: "./overlay-banner.component.html",
  styleUrls: ["./overlay-banner.component.scss"]
})
export class OverlayBannerComponent {
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
}
