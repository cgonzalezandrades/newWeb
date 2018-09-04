import { Injectable } from "@angular/core";
import { Overlay } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";

import { OverlayInfoComponent } from "../../pages/overlay-info/overlay-info.component";

@Injectable()
export class NavbarService {
  constructor(private overlay: Overlay) {}

  overlayref: any;
  something: "";

  open() {
    // Returns an OverlayRef (which is a PortalHost)
    this.overlayref = this.overlay.create({
      width: "100%",
      height: "100%",
      panelClass: "overlay-info"
    });

    // Create ComponentPortal that can be attached to a PortalHost
    const previewPortal = new ComponentPortal(OverlayInfoComponent);

    // Attach ComponentPortal to PortalHost
    this.overlayref.attach(previewPortal);
  }

  close() {
    this.overlayref.dispose();
  }
}
