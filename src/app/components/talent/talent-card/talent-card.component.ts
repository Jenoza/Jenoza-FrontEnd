import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jnz-talent-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="talent-card">
      <div class="image-container">
        <img [src]="imageUrl" [alt]="title">
      </div>
      <div class="content">
        <h3>{{title}}</h3>
        <p class="description">{{description}}</p>
      </div>
    </article>
  `,
  styles: [`
    .talent-card {
      /* Glassmorphism effect */
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(10px);
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);

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
        transition: transform 0.5s ease;
      }

      .category {
        position: absolute;
        top: 15px;
        right: 15px;
        background: var(--primary-color);
        color: white;
        text-transform: capitalize;
        padding: 5px 15px;
        border-radius: 20px;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(5px);
      }
    }

    .content {
      padding: 25px;

      h3 {
        font-size: 22px;
        color: var(--text-dark);
        margin: 0 0 15px;
        line-height: 1.4;
      }

      .description {
        color: var(--text-muted);
        margin: 0 0 20px;
        line-height: 1.6;
      }

      .client {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 20px;

        .label {
          color: var(--primary-color);
          font-weight: 600;
          font-size: 15px;
        }

        .name {
          color: var(--text-muted);
          font-size: 15px;
        }
      }

      .card-actions {
        display: flex;
        justify-content: flex-end;

        .view-btn {
          padding: 8px 20px;
          background: var(--primary-color);
          color: white;
          border: none;
          border-radius: 30px;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            background: #e64a19; /* Darker shade */
            box-shadow: 0 5px 15px rgba(230, 74, 25, 0.3);
          }
        }
      }
    }

    @media (max-width: 768px) {
      .content {
        padding: 20px;

        h3 {
          font-size: 20px;
        }

        .description {
          font-size: 14px;
        }
      }
    }
  `]
})
export class TalentCardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() category: string | undefined = '';
  @Input() description: string = '';
  @Input() clientName: string | undefined = '';
}
