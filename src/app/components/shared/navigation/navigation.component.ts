import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'jnz-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="main-nav">
      <div class="container">
        <div class="nav-content">
        <img src="/assets/images/Logo101.png" alt="Jenoza" style="height: 80px; width: auto; margin-left: 80px;" />
          <div class="nav-links">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-link">Home</a>
            <a routerLink="/about" routerLinkActive="active" class="nav-link">About</a>
            <a routerLink="/services" routerLinkActive="active" class="nav-link">Services</a>
            <a routerLink="/talent" routerLinkActive="active" class="nav-link">Talent</a>
            <a routerLink="/contact" routerLinkActive="active" class="nav-link">Contact</a>
          </div>
          <div class="nav-contact">
            <span class="phone-icon">📱</span>
            <span class="phone-number">+12-87458753</span>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .main-nav {
      background-color: white;
      padding: 1rem 0;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
    }

    .nav-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: var(--text-color);
      font-weight: 600;
      font-size: 1.5rem;
    }

    .logo-icon {
      background-color: var(--primary-color);
      color: white;
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
    }

    .nav-link {
      color: var(--text-color);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;

      &:hover, &.active {
        color: var(--primary-color);
      }
    }

    .nav-contact {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .phone-number {
      font-weight: 500;
      color: var(--text-color);
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
    }
  `]
})
export class NavigationComponent {}
