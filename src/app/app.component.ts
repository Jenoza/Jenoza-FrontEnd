import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent],
  template: `
    <div class="app-container">
      <jnz-navigation></jnz-navigation>
      <main>
        <router-outlet></router-outlet>
      </main>
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
export class AppComponent {
  title = 'jenoza';
}
