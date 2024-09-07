import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterLinkActive} from '@angular/router';
import {NgClass, NgIf} from '@angular/common';
import {MENU_ITEMS} from '@constants/menu-links.constant';
import {filter} from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgClass,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export default class NavbarComponent implements OnInit {
  headerMenus = MENU_ITEMS;
  isNavOpen = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
    // Close the menu on route change
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isNavOpen = false;
      });
  }

  toggleMobileNav = () => {
    this.isNavOpen = !this.isNavOpen;
  };
}
