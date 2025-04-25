import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../service-card/service-card.component';

@Component({
  selector: 'jnz-services-section',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent],
  template: `
    <section class="services-section">
      <div class="bg-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
      <div class="container">
        <div class="section-header">
          <div class="header-line"></div>
          <h2>Our Services</h2>
          <p>Comprehensive solutions tailored to your needs</p>
        </div>
        <div class="services-grid">
          <jnz-service-card
            *ngFor="let service of services"
            [icon]="service.icon"
            [title]="service.title"
            [description]="service.description"
            [features]="service.features">
          </jnz-service-card>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services-section {
      padding: 80px 0 100px;
      background-color: #f8f9fa;
      position: relative;
      overflow: hidden;
    }

    .bg-shapes {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      overflow: hidden;
    }

    .shape {
      position: absolute;
      border-radius: 50%;
      background: linear-gradient(45deg, rgba(255, 87, 34, 0.1), rgba(255, 152, 0, 0.05));
      filter: blur(40px);
    }

    .shape-1 {
      width: 500px;
      height: 500px;
      top: -200px;
      right: -100px;
    }

    .shape-2 {
      width: 400px;
      height: 400px;
      bottom: -150px;
      left: -100px;
      background: linear-gradient(45deg, rgba(33, 150, 243, 0.05), rgba(156, 39, 176, 0.05));
    }

    .shape-3 {
      width: 300px;
      height: 300px;
      top: 40%;
      left: 30%;
      background: linear-gradient(45deg, rgba(255, 235, 59, 0.05), rgba(255, 193, 7, 0.08));
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      position: relative;
      z-index: 1;
    }

    .section-header {
      text-align: center;
      margin-bottom: 60px;
      position: relative;

      .header-line {
        width: 80px;
        height: 4px;
        background: linear-gradient(90deg, #ff5722, #ff9800);
        margin: 0 auto 20px;
        border-radius: 2px;
      }

      h2 {
        font-size: 36px;
        color: #333;
        margin-bottom: 15px;
        font-weight: 600;
        position: relative;
        display: inline-block;
      }

      p {
        font-size: 18px;
        color: #666;
        max-width: 600px;
        margin: 0 auto;
        line-height: 1.6;
      }
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 40px;
    }

    @media (max-width: 1024px) {
      .services-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 35px;
      }
    }

    @media (max-width: 768px) {
      .services-section {
        padding: 60px 0 80px;
      }

      .section-header {
        margin-bottom: 50px;

        .header-line {
          width: 60px;
          margin-bottom: 15px;
        }

        h2 {
          font-size: 30px;
        }

        p {
          font-size: 16px;
        }
      }

      .services-grid {
        grid-template-columns: 1fr;
        gap: 30px;
      }
    }
  `]
})
export class ServicesSectionComponent {
  services = [
    {
      icon: 'paint-brush',
      title: 'Brand Identity & Creative Design',
      description: 'Comprehensive visual branding that defines your business and sets it apart.',
      features: [
        'Logo & Identity Design',
        'Brand Guidelines Development',
        'Visual Storytelling',
        'Print & Digital Collateral',
        'Packaging Design'
      ]
    },
    {
      icon: 'video-camera',
      title: 'Media Production & Advertising',
      description: 'High-impact visuals and campaigns that resonate, convert, and build brand equity.',
      features: [
        'Video Ads & Promos',
        'Photography & Post Production',
        'TV Commercials & Corporate Films',
        'Social Media Campaigns',
        'Audio/Podcast Content'
      ]
    },
    {
      icon: 'code',
      title: 'Web Design & Development',
      description: 'Custom websites built to perform, engage, and elevate your digital presence.',
      features: [
        'UX/UI Strategy',
        'Responsive Web Design',
        'Frontend & Backend Development',
        'CMS Integration',
        'E-Commerce Platforms'
      ]
    },
    {
      icon: 'line-chart',
      title: 'Digital Marketing & Strategy',
      description: 'Data-driven digital solutions to grow your reach and drive real results.',
      features: [
        'Social Media Marketing',
        'SEO/SEM Strategy',
        'Google Ads & PPC Campaigns',
        'Email Marketing',
        'Performance Analytic'
      ]
    },
    {
      icon: 'film',
      title: 'Multimedia & Content Creation',
      description: 'Crafting digital experiences through video, animation, and immersive storytelling',
      features: [
        'Motion Graphics & Animation',
        'Explainer Videos',
        'Reels & Short-Form Content',
        'Interactive Presentations',
        '3D Visualization'
      ]
    },
    {
      icon: 'handshake-o',
      title: 'Talent Sponsorship & Development',
      description: 'Nurturing tomorrow’s creatives by investing in raw talent and giving them a platform.',
      features: [
        'Talent Incubation Programs',
        'Creative Mentorship',
        'Sponsored Projects',
        'Showcase & Exposure',
        'Collaboration Opportunities'
      ]
    }
  ];
}
