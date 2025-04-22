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
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      box-shadow:
        20px 20px 60px rgba(0, 0, 0, 0.05),
        -20px -20px 60px rgba(255, 255, 255, 0.8),
        inset 0 0 0 1px rgba(255, 255, 255, 0.1);
      transition: all 0.4s ease;
      height: 100%;
      padding: 35px 30px;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.2);

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #ff5722, #ff9800);
        opacity: 0.8;
      }

      &:hover {
        transform: translateY(-8px);
        box-shadow:
          20px 20px 60px rgba(0, 0, 0, 0.08),
          -20px -20px 60px rgba(255, 255, 255, 0.8),
          inset 0 0 0 1px rgba(255, 255, 255, 0.1);

        .icon-wrapper {
          transform: scale(1.05);
          background: linear-gradient(135deg, #ff5722, #ff9800);
          box-shadow: 0 10px 20px rgba(255, 87, 34, 0.3);
        }

        .learn-more {
          box-shadow: 0 5px 15px rgba(255, 87, 34, 0.3);
        }
      }
    }

    .card-content {
      display: flex;
      flex-direction: column;
      height: 100%;
      position: relative;
      z-index: 1;
    }

    .icon-wrapper {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #ff5722, #ff7043);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 25px;
      transition: all 0.4s ease;
      box-shadow: 0 8px 16px rgba(255, 87, 34, 0.2);

      i {
        font-size: 32px;
        color: white;
      }
    }

    h3 {
      font-size: 22px;
      color: #333;
      margin: 0 0 15px;
      text-align: center;
      font-weight: 600;
    }

    p {
      color: #666;
      margin: 0 0 20px;
      line-height: 1.6;
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
        margin-bottom: 14px;
        color: #444;
        font-size: 15px;
        transition: transform 0.3s ease;

        &:hover {
          transform: translateX(3px);
        }

        i {
          color: #ff5722;
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
      background: linear-gradient(135deg, #ff5722, #ff7043);
      color: white;
      border: none;
      padding: 12px 28px;
      border-radius: 30px;
      font-weight: 500;
      font-size: 15px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(255, 87, 34, 0.15);

      &:hover {
        transform: translateY(-2px);
        background: linear-gradient(135deg, #ff7043, #ff5722);
      }
    }

    @media (max-width: 768px) {
      .service-card {
        padding: 30px 25px;
      }

      .icon-wrapper {
        width: 70px;
        height: 70px;
        margin-bottom: 20px;

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
