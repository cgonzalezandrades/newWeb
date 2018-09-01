import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { BsModalService } from "ngx-bootstrap/modal";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ButtonsModule } from "ngx-bootstrap/buttons";
import { MatButtonModule } from "@angular/material/button";
import { AppComponent } from "./app.component";

import { NavbarComponent } from "./components/navbar/navbar.component";
import { MainBannerComponent } from "./components/main-banner/main-banner.component";

@NgModule({
  declarations: [AppComponent, NavbarComponent, MainBannerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ButtonsModule.forRoot(),
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
