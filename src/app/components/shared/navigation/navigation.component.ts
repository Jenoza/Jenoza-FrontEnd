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
            <img src="/assets/images/LogoJ.png" alt="Jenoza" class="logo-image" />
          </div>
          <div class="nav-links-container">
            <div class="nav-links" [class.open]="menuOpen">
              <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-link" (click)="closeMenuOnMobile()">Home</a>
              <a routerLink="/about" routerLinkActive="active" class="nav-link" (click)="closeMenuOnMobile()">About</a>
              <a routerLink="/services" routerLinkActive="active" class="nav-link" (click)="closeMenuOnMobile()">Services</a>
              <a routerLink="/talent" routerLinkActive="active" class="nav-link" (click)="closeMenuOnMobile()">Talent</a>
              <a routerLink="/contact" routerLinkActive="active" class="nav-link" (click)="closeMenuOnMobile()">Contact</a>
            </div>
          </div>
          <button class="hamburger" [class.open]="menuOpen" (click)="toggleMenu()" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div class="nav-overlay" [class.open]="menuOpen" (click)="closeMenuOnMobile()"></div>
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
      z-index: 1200;
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
      position: relative;
      z-index: 1200;
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
      transition: all 0.3s;
      align-items: center;
    }

    .nav-link {
      color: var(--text-color);
      text-decoration: none;
      font-weight: 500;
      font-size: 1.2rem;
      transition: color 0.3s ease;
      white-space: nowrap;
      opacity: 1;
      transform: none;
    }

    .nav-link:hover, .nav-link.active {
      color: var(--primary-color);
    }

    .hamburger {
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      background: none;
      border: none;
      cursor: pointer;
      z-index: 1101;
      margin-left: 1rem;
      margin-top: 8px;
      transition: transform 0.3s;
      position: relative;
    }
    .hamburger span {
      position: absolute;
      left: 6px;
      right: 6px;
      height: 4px;
      background: var(--text-color, #333);
      border-radius: 2px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      width: auto;
    }
    .hamburger span:nth-child(1) {
      top: 10px;
    }
    .hamburger span:nth-child(2) {
      top: 18px;
    }
    .hamburger span:nth-child(3) {
      top: 26px;
    }
    .hamburger.open span:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    .hamburger.open span:nth-child(2) {
      opacity: 0;
      transform: scale(0);
    }
    .hamburger.open span:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }

    .nav-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0,0,0,0.18);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
      z-index: 1000;
    }
    .nav-overlay.open {
      opacity: 1;
      pointer-events: auto;
    }

    @media (max-width: 900px) {
      .nav-content {
        justify-content: space-between;
      }
      .nav-links-container {
        margin: 0;
        flex-grow: 0;
      }
      .nav-links {
        position: absolute;
        top: 90px;
        left: 50%;
        transform: translate(-50%, -20px);
        max-width: 380px;
        width: 92vw;
        background: #fff;
        flex-direction: column;
        gap: 0;
        align-items: center;
        display: none;
        padding: 1.2rem 0 1.2rem 0;
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.10);
        opacity: 0;
        pointer-events: none;
        border: 1.5px solid #ececec;
        border-radius: 16px;
        transition: opacity 0.3s, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .nav-links.open {
        display: flex;
        opacity: 1;
        pointer-events: auto;
        transform: translate(-50%, 0) scale(1.03);
      }
      .nav-links.open .nav-link {
        opacity: 0;
        transform: translateY(20px);
        animation: navLinkFadeIn 0.4s forwards;
      }
      .nav-links.open .nav-link:nth-child(1) { animation-delay: 0.08s; }
      .nav-links.open .nav-link:nth-child(2) { animation-delay: 0.16s; }
      .nav-links.open .nav-link:nth-child(3) { animation-delay: 0.24s; }
      .nav-links.open .nav-link:nth-child(4) { animation-delay: 0.32s; }
      .nav-links.open .nav-link:nth-child(5) { animation-delay: 0.40s; }
      @keyframes navLinkFadeIn {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .nav-link {
        width: 100%;
        text-align: left;
        padding: 0.85rem 2.2rem 0.85rem 1.5rem;
        font-size: 1.15rem;
        font-weight: 500;
        color: var(--text-color);
        background: transparent;
        border: none;
        outline: none;
        transition: color 0.18s, background 0.18s, box-shadow 0.18s, padding 0.18s;
        position: relative;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .nav-link:not(:last-child) {
        border-bottom: 1px solid #f2f2f2;
      }
      .nav-link.active {
        color: var(--primary-color);
        background: #fff7f2;
        box-shadow: 0 2px 8px 0 rgba(255, 102, 0, 0.06);
        border-left: 4px solid var(--primary-color);
        border-radius: 10px;
        font-weight: 600;
        padding-left: 1.2rem;
      }
      .nav-link.active::after {
        content: '\u203A'; /* Unicode chevron */
        color: var(--primary-color);
        font-size: 1.2em;
        margin-left: auto;
        margin-right: 0.5rem;
        font-weight: bold;
      }
      .nav-link:hover:not(.active) {
        background: #f7f7f7;
        color: var(--primary-color);
        padding-left: 1.7rem;
      }
      .hamburger {
        display: flex;
      }
    }
  `]
})
export class NavigationComponent {
  menuOpen = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenuOnMobile() {
    if (window.innerWidth <= 900) {
      this.menuOpen = false;
    }
  }
}


