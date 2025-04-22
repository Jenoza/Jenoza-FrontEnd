import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../components/shared/page-header/page-header.component';
import { ServicesSectionComponent } from '../../components/services/services-section/services-section.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'jnz-services',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, ServicesSectionComponent, RouterLink],
  template: `
    <jnz-page-header
      title="Our Services"
      subtitle="Discover how we can help transform your business"
      backgroundImage="url('../../assets/images/2BG.jpg')"
      overlayColor="rgba(0, 0, 0, 0.6)">
    </jnz-page-header>

    <jnz-services-section></jnz-services-section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss how we can help you achieve your business goals</p>
          <a routerLink="/contact" class="cta-button">Contact Us</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .cta-section {
      padding: 70px 0;
      background: linear-gradient(135deg, #ff5722, #e64a19);
      color: white;
      text-align: center;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .cta-content {
      max-width: 600px;
      margin: 0 auto;

      h2 {
        font-size: 32px;
        margin-bottom: 15px;
        font-weight: 600;
      }

      p {
        font-size: 17px;
        margin-bottom: 30px;
        opacity: 0.9;
      }
    }

    .cta-button {
      display: inline-block;
      background: white;
      color: #ff5722;
      border: none;
      padding: 12px 35px;
      font-size: 16px;
      border-radius: 30px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 600;
      text-decoration: none;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        background: #f8f8f8;
      }

      &:active {
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .cta-section {
        padding: 50px 0;
      }

      .cta-content {
        h2 {
          font-size: 26px;
        }

        p {
          font-size: 15px;
          margin-bottom: 25px;
        }
      }

      .cta-button {
        padding: 10px 30px;
        font-size: 15px;
      }
    }
  `]
})
export class ServicesComponent {}
