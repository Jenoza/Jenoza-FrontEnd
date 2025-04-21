import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'jnz-news-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <article class="news-card">
      <div class="image-container">
        <img [src]="imageUrl" [alt]="title">
        <div class="category" *ngIf="category">{{category}}</div>
      </div>
      <div class="content">
        <div class="meta">
          <span class="date">
            <i class="far fa-calendar"></i>
            {{date | date:'mediumDate'}}
          </span>
          <span class="author" *ngIf="author">
            <i class="far fa-user"></i>
            {{author}}
          </span>
        </div>
        <h3>{{title}}</h3>
        <p>{{excerpt}}</p>
        <a [routerLink]="['/news', slug]" class="read-more">
          Read More
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </article>
  `,
  styles: [`
    .news-card {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);

        img {
          transform: scale(1.05);
        }
      }
    }

    .image-container {
      position: relative;
      aspect-ratio: 16/9;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }

      .category {
        position: absolute;
        top: 20px;
        left: 20px;
        background: var(--primary-color);
        color: white;
        padding: 5px 15px;
        border-radius: 20px;
        font-size: 14px;
        font-weight: 500;
      }
    }

    .content {
      padding: 25px;

      .meta {
        display: flex;
        gap: 20px;
        color: var(--text-muted);
        font-size: 14px;
        margin-bottom: 15px;

        span {
          display: flex;
          align-items: center;
          gap: 5px;

          i {
            color: var(--primary-color);
          }
        }
      }

      h3 {
        font-size: 22px;
        color: var(--text-dark);
        margin: 0 0 15px;
        line-height: 1.4;
      }

      p {
        color: var(--text-muted);
        margin: 0 0 20px;
        line-height: 1.6;
      }

      .read-more {
        color: var(--primary-color);
        text-decoration: none;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: color 0.3s ease;

        &:hover {
          color: var(--primary-dark);
        }

        i {
          font-size: 14px;
          transition: transform 0.3s ease;
        }

        &:hover i {
          transform: translateX(5px);
        }
      }
    }
  `]
})
export class NewsCardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() excerpt: string = '';
  @Input() date: Date = new Date();
  @Input() author: string = '';
  @Input() category: string = '';
  @Input() slug: string = '';
}
