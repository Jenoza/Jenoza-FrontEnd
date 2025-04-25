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
          <div class="logo-container">
            <img src="/assets/images/Logo101.png" alt="Jenoza" class="logo-image" />
          </div>
          <div class="nav-links-container">
            <div class="nav-links">
              <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-link">Home</a>
              <a routerLink="/about" routerLinkActive="active" class="nav-link">About</a>
              <a routerLink="/services" routerLinkActive="active" class="nav-link">Services</a>
              <a routerLink="/talent" routerLinkActive="active" class="nav-link">Talent</a>
              <a routerLink="/contact" routerLinkActive="active" class="nav-link">Contact</a>
            </div>
          </div>
          <div class="nav-placeholder"></div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .main-nav {
      background-color: white;
      padding: 0.5rem 0;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .nav-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 90px;
    }

    .logo-container {
      flex-shrink: 0;
      display: flex;
      align-items: center;
    }

    .logo-image {
      height: 105px;
      width: auto;
    }

    .nav-links-container {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      margin: 0 2rem;
    }

    .nav-links {
      display: flex;
      gap: 2.5rem;
    }

    .nav-link {
      color: var(--text-color);
      text-decoration: none;
      font-weight: 500;
      font-size: 1.2rem;
      transition: color 0.3s ease;
      white-space: nowrap;

      &:hover, &.active {
        color: var(--primary-color);
      }
    }

    .nav-placeholder {
      width: 70px;
      flex-shrink: 0;
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
