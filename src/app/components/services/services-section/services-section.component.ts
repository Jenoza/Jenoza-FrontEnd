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
      padding: 80px 0;
      background-color: var(--background-light);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .section-header {
      text-align: center;
      margin-bottom: 60px;

      h2 {
        font-size: 36px;
        color: var(--text-dark);
        margin-bottom: 15px;
      }

      p {
        font-size: 18px;
        color: var(--text-muted);
        max-width: 600px;
        margin: 0 auto;
      }
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    @media (max-width: 768px) {
      .services-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .section-header {
        margin-bottom: 40px;

        h2 {
          font-size: 30px;
        }

        p {
          font-size: 16px;
        }
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
      icon: 'mobile-alt',
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
      icon: 'shield-alt',
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
      icon: 'chart-line',
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
