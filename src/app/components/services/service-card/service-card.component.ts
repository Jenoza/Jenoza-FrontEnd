import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jnz-service-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="service-card">
      <div class="icon-wrapper">
        <i class="fas fa-{{icon}}"></i>
      </div>
      <h3>{{title}}</h3>
      <p>{{description}}</p>
      <ul class="features" *ngIf="features && features.length">
        <li *ngFor="let feature of features">
          <i class="fas fa-check"></i>
          {{feature}}
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .service-card {
      background: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      text-align: center;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 25px rgba(0, 0, 0, 0.12);
      }
    }

    .icon-wrapper {
      width: 80px;
      height: 80px;
      background: var(--primary-color);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;

      i {
        font-size: 32px;
        color: white;
      }
    }

    h3 {
      font-size: 24px;
      color: var(--text-dark);
      margin: 0 0 15px;
    }

    p {
      color: var(--text-muted);
      margin: 0 0 20px;
      line-height: 1.6;
    }

    .features {
      list-style: none;
      padding: 0;
      margin: 0;
      text-align: left;

      li {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
        color: var(--text-dark);

        i {
          color: var(--primary-color);
          font-size: 14px;
        }
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
