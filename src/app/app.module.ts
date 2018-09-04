import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { OverlayModule } from "@angular/cdk/overlay";
import { BsModalService } from "ngx-bootstrap/modal";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ButtonsModule } from "ngx-bootstrap/buttons";

import { MatButtonModule } from "@angular/material/button";
import { AppComponent } from "./app.component";

import { NavbarComponent } from "./components/navbar/navbar.component";
import { TopBannerComponent } from "./components/banners/top-banner/top-banner.component";
import { OverlayInfoComponent } from "./pages/overlay-info/overlay-info.component";

import { NavbarService } from "./components/navbar/navbar.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopBannerComponent,
    OverlayInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ButtonsModule.forRoot(),
    MatButtonModule,
    OverlayModule
  ],
  providers: [NavbarService],
  bootstrap: [AppComponent],
  entryComponents: [ OverlayInfoComponent]
})
export class AppModule {}
