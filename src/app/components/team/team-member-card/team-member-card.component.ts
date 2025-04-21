import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialLink {
  platform: string;
  url: string;
}

@Component({
  selector: 'jnz-team-member-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="team-member-card">
      <div class="member-image">
        <img [src]="imageUrl" [alt]="name">
        <div class="social-links">
          <a *ngFor="let link of socialLinks"
             [href]="link.url"
             target="_blank"
             class="social-icon"
             [attr.data-platform]="link.platform">
            <i class="fab fa-{{link.platform}}"></i>
          </a>
        </div>
      </div>
      <div class="member-info">
        <h3>{{ name }}</h3>
        <p class="position">{{ position }}</p>
      </div>
    </div>
  `,
  styles: [`
    .team-member-card {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);

        .social-links {
          opacity: 1;
        }
      }
    }

    .member-image {
      position: relative;
      overflow: hidden;
      aspect-ratio: 1;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }

      &:hover img {
        transform: scale(1.05);
      }
    }

    .social-links {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      gap: 15px;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 2;

      .social-icon {
        width: 40px;
        height: 40px;
        background: var(--primary-color);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: background-color 0.3s ease;

        &:hover {
          background: var(--primary-dark);
        }

        i {
          font-size: 18px;
        }
      }
    }

    .member-info {
      padding: 20px;
      text-align: center;

      h3 {
        margin: 0;
        font-size: 24px;
        color: var(--text-dark);
        margin-bottom: 5px;
      }

      .position {
        margin: 0;
        color: var(--primary-color);
        font-size: 16px;
      }
    }
  `]
})
export class TeamMemberCardComponent {
  @Input() name: string = '';
  @Input() position: string = '';
  @Input() imageUrl: string = '';
  @Input() socialLinks: SocialLink[] = [];
}
