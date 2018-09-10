import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { OverlayModule } from "@angular/cdk/overlay";
import { BsModalService } from "ngx-bootstrap/modal";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ButtonsModule } from "ngx-bootstrap/buttons";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { AppComponent } from "./app.component";

import { NavbarComponent } from "./components/navbar/navbar.component";
import { TopBannerComponent } from "./components/banners/top-banner/top-banner.component";
import { BottonBannerComponent } from "./components/banners/botton-banner/botton-banner.component";
import { OverlayBannerComponent } from "./components/banners/overlay-banner/overlay-banner.component";
import { OverlayInfoComponent } from "./pages/overlay-info/overlay-info.component";

import { NavbarService } from "./components/navbar/navbar.service";
import { OverlayInfoService } from "./pages/overlay-info/overlay-info.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopBannerComponent,
    OverlayInfoComponent,
    OverlayBannerComponent,
    BottonBannerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ButtonsModule.forRoot(),
    MatButtonModule,
    OverlayModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSnackBarModule
  ],
  providers: [NavbarService, OverlayInfoService],
  bootstrap: [AppComponent],
  entryComponents: [OverlayInfoComponent]
})
export class AppModule {}
