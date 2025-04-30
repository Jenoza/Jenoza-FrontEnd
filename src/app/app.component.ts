import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, // Import RouterModule here
    NavigationComponent,
    FooterComponent
  ],
  template: `
    <div class="app-container">
      <jnz-navigation></jnz-navigation>
      <main>
        <router-outlet></router-outlet> <!-- This is where routes will render -->
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    main {
      padding-top: 80px; // To account for fixed navigation
      flex: 1;
    }
  `]
})
export class AppComponent implements AfterViewInit {
  constructor(private router: Router) {}

  ngAfterViewInit() {
    // Listen for NavigationEnd event
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Scroll to the top of the page after navigation
        window.scrollTo(0, 0);
      }
    });
  }
}
