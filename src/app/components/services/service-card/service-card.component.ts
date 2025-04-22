import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jnz-service-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="service-card">
      <div class="card-content">
        <div class="icon-wrapper">
          <i class="fa fa-{{icon}}"></i>
        </div>
        <h3>{{title}}</h3>
        <p>{{description}}</p>
        <ul class="features" *ngIf="features && features.length">
          <li *ngFor="let feature of features">
            <i class="fa fa-check"></i>
            {{feature}}
          </li>
        </ul>
        <div class="card-action">
          <button class="learn-more">Learn More</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .service-card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
      height: 100%;
      padding: 30px;
      display: flex;
      flex-direction: column;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);

        .icon-wrapper {
          background-color: var(--secondary-color, #ff5722);
        }
      }
    }

    .card-content {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .icon-wrapper {
      width: 80px;
      height: 80px;
      background: var(--primary-color, #ff5722);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
      transition: all 0.3s ease;

      i {
        font-size: 32px;
        color: white;
      }
    }

    h3 {
      font-size: 22px;
      color: var(--text-dark, #333);
      margin: 0 0 15px;
      text-align: center;
      font-weight: 600;
    }

    p {
      color: var(--text-muted, #666);
      margin: 0 0 20px;
      line-height: 1.5;
      text-align: center;
      flex-grow: 0;
    }

    .features {
      list-style: none;
      padding: 0;
      margin: 0 0 20px;
      text-align: left;
      flex-grow: 1;

      li {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        margin-bottom: 12px;
        color: var(--text-dark, #333);
        font-size: 15px;

        i {
          color: var(--primary-color, #ff5722);
          font-size: 14px;
          margin-top: 4px;
        }
      }
    }

    .card-action {
      margin-top: auto;
      text-align: center;
    }

    .learn-more {
      background: var(--primary-color, #ff5722);
      color: white;
      border: none;
      padding: 10px 24px;
      border-radius: 25px;
      font-weight: 500;
      font-size: 15px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: var(--secondary-color, #e64a19);
        transform: translateY(-2px);
      }
    }

    @media (max-width: 768px) {
      .service-card {
        padding: 25px 20px;
      }

      .icon-wrapper {
        width: 70px;
        height: 70px;
        margin-bottom: 15px;

        i {
          font-size: 28px;
        }
      }

      h3 {
        font-size: 20px;
      }

      p {
        font-size: 14px;
      }
    }
  `]
})
export class ServiceCardComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() features: string[] = [];
}
