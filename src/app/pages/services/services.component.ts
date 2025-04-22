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
      backgroundImage="url('../../assets/images/services.jpg')"
      overlayColor="rgba(0, 0, 0, 0.6)">
    </jnz-page-header>

    <jnz-services-section></jnz-services-section>

    <section class="cta-section">
      <div class="cta-bg-shapes">
        <div class="cta-shape cta-shape-1"></div>
        <div class="cta-shape cta-shape-2"></div>
      </div>
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
      padding: 80px 0;
      background: linear-gradient(135deg, #ff5722, #ff7043);
      color: white;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .cta-bg-shapes {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .cta-shape {
      position: absolute;
      border-radius: 50%;
    }

    .cta-shape-1 {
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%);
      top: -300px;
      right: -200px;
    }

    .cta-shape-2 {
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 70%);
      bottom: -200px;
      left: -100px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      position: relative;
      z-index: 1;
    }

    .cta-content {
      max-width: 650px;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      padding: 50px;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);

      h2 {
        font-size: 36px;
        margin-bottom: 20px;
        font-weight: 600;
      }

      p {
        font-size: 18px;
        margin-bottom: 35px;
        opacity: 0.9;
        line-height: 1.6;
      }
    }

    .cta-button {
      display: inline-block;
      background: white;
      color: #ff5722;
      border: none;
      padding: 14px 40px;
      font-size: 16px;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      font-weight: 600;
      text-decoration: none;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      position: relative;
      overflow: hidden;
      z-index: 1;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
        z-index: -1;
        transform: translateY(100%);
        transition: transform 0.4s ease;
      }

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
        background: #fff;

        &::before {
          transform: translateY(0);
        }
      }

      &:active {
        transform: translateY(0);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      }
    }

    @media (max-width: 768px) {
      .cta-section {
        padding: 60px 0;
      }

      .cta-content {
        padding: 35px 25px;
        border-radius: 15px;

        h2 {
          font-size: 28px;
          margin-bottom: 15px;
        }

        p {
          font-size: 16px;
          margin-bottom: 30px;
        }
      }

      .cta-button {
        padding: 12px 30px;
        font-size: 15px;
      }
    }
  `]
})
export class ServicesComponent {}
