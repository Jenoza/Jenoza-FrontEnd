import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../service-card/service-card.component';

@Component({
  selector: 'jnz-services-section',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent],
  template: `
    <section class="services-section">
      <div class="container">
        <div class="section-header">
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
      padding: 60px 0 80px;
      background-color: var(--background-light, #f9f9f9);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .section-header {
      text-align: center;
      margin-bottom: 50px;

      h2 {
        font-size: 32px;
        color: var(--text-dark, #333);
        margin-bottom: 12px;
        font-weight: 600;
      }

      p {
        font-size: 17px;
        color: var(--text-muted, #666);
        max-width: 600px;
        margin: 0 auto;
      }
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }

    @media (max-width: 1024px) {
      .services-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .services-section {
        padding: 50px 0 60px;
      }

      .section-header {
        margin-bottom: 40px;

        h2 {
          font-size: 28px;
        }

        p {
          font-size: 16px;
        }
      }

      .services-grid {
        grid-template-columns: 1fr;
        gap: 25px;
      }
    }
  `]
})
export class ServicesSectionComponent {
  services = [
    {
      icon: 'code',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: [
        'Responsive Design',
        'Frontend Development',
        'Backend Development',
        'API Integration'
      ]
    },
    {
      icon: 'mobile',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: [
        'iOS Development',
        'Android Development',
        'Cross-platform Solutions',
        'App Store Deployment'
      ]
    },
    {
      icon: 'cloud',
      title: 'Cloud Services',
      description: 'Scalable cloud solutions and infrastructure management.',
      features: [
        'Cloud Migration',
        'AWS/Azure Services',
        'Server Management',
        'Cloud Security'
      ]
    },
    {
      icon: 'cogs',
      title: 'DevOps Services',
      description: 'Streamline your development and deployment processes.',
      features: [
        'CI/CD Pipeline',
        'Infrastructure as Code',
        'Container Orchestration',
        'Monitoring & Logging'
      ]
    },
    {
      icon: 'shield',
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions.',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Security Training',
        'Compliance Management'
      ]
    },
    {
      icon: 'line-chart',
      title: 'Digital Strategy',
      description: 'Strategic consulting for digital transformation and growth.',
      features: [
        'Digital Transformation',
        'Technology Roadmap',
        'Process Optimization',
        'Innovation Consulting'
      ]
    }
  ];
}
