import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from '@components/navbar';
import {FooterComponent} from '@components/footer';
import {isPlatformBrowser, ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChen';

  /**
   * Creates an instance of the AppComponent.
   *
   * @param viewportScroller - Service for scrolling operations in the viewport.
   * @param platformId - Identifier for the platform to determine if it's a browser environment.
   */
  constructor(
    private viewportScroller: ViewportScroller,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
  }

  /**
   * Scrolls the viewport to the top of the page if running in a browser environment.
   *
   * This method checks if the application is running in the browser and uses
   * `ViewportScroller` to scroll to the top-left corner of the page.
   * It should be called during route activation or when necessary to ensure
   * the view is correctly positioned.
   */
  onActive() {
    if (isPlatformBrowser(this.platformId)) {
      this.viewportScroller.scrollToPosition([0, 0]);
    }
  }
}
