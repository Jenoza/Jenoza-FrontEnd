import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'jnz-page-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header class="page-header" [style.backgroundImage]="backgroundImage">
      <div class="overlay"></div>
      <div class="container">
        <div class="header-content">
          <h1>{{ title }}</h1>
          <div class="breadcrumb">
            <a routerLink="/">Home</a>
            <span class="separator">›</span>
            <span class="current">{{ title }}</span>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .page-header {
      position: relative;
      padding: 120px 0;
      background-size: cover;
      background-position: center;
      color: white;
      text-align: center;
      margin-top: 0 auto;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
    }

    .header-content {
      position: relative;
      z-index: 1;
    }

    h1 {
      font-size: clamp(2rem, 5vw, 3.2rem);
      margin-bottom: 20px;
      font-weight: 700;
      line-height: 1.1;
      word-break: break-word;
    }

    .breadcrumb {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      font-size: 16px;

      a {
        color: white;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: var(--primary-color);
        }
      }

      .separator {
        color: var(--primary-color);
      }

      .current {
        color: var(--primary-color);
      }
    }

    @media (max-width: 600px) {
      h1 {
        font-size: clamp(2rem, 5vw, 3.2rem);
      }
    }
  `]
})
export class PageHeaderComponent {
  @Input() title: string = '';
  @Input() backgroundImage: string = 'url("/assets/images/header-bg.jpg")';
}
