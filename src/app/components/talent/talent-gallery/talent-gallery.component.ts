import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalentCardComponent } from '../talent-card/talent-card.component';

@Component({
  selector: 'jnz-talent-gallery',
  standalone: true,
  imports: [CommonModule, TalentCardComponent],
  template: `
    <section class="talent-section">
      <div class="container">
        <div class="section-header">
          <h2>Our Showcase</h2>
          <p>Exploring creativity, innovation, and excellence through our project gallery</p>
        </div>

        <!-- Filter controls -->
        <div class="filter-controls">
          <button
            class="filter-btn"
            [class.active]="activeCategory === 'all'"
            (click)="filterProjects('all')">
            All
          </button>
          <button
            class="filter-btn"
            [class.active]="activeCategory === 'design'"
            (click)="filterProjects('design')">
            Design
          </button>
          <button
            class="filter-btn"
            [class.active]="activeCategory === 'development'"
            (click)="filterProjects('development')">
            Development
          </button>
          <button
            class="filter-btn"
            [class.active]="activeCategory === 'branding'"
            (click)="filterProjects('branding')">
            Branding
          </button>
          <button
            class="filter-btn"
            [class.active]="activeCategory === 'marketing'"
            (click)="filterProjects('marketing')">
            Marketing
          </button>
        </div>

        <div class="gallery-grid">
          <jnz-talent-card
            *ngFor="let project of filteredProjects"
            [imageUrl]="project.imageUrl"
            [title]="project.title"
            [category]="project.category"
            [description]="project.description"
            [clientName]="project.clientName">
          </jnz-talent-card>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .talent-section {
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
      margin-bottom: 40px;

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

    .filter-controls {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 15px;
      margin-bottom: 40px;
    }

    .filter-btn {
      padding: 10px 20px;
      border: none;
      background: white;
      border-radius: 30px;
      font-size: 16px;
      font-weight: 500;
      color: var(--text-muted);
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

      &:hover {
        color: var(--text-dark);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      }

      &.active {
        background: var(--primary-color);
        color: white;
      }
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 30px;
    }

    @media (max-width: 768px) {
      .gallery-grid {
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
      }

      .section-header {
        margin-bottom: 30px;

        h2 {
          font-size: 30px;
        }

        p {
          font-size: 16px;
        }
      }

      .filter-controls {
        gap: 10px;
        margin-bottom: 30px;
      }

      .filter-btn {
        padding: 8px 15px;
        font-size: 14px;
      }
    }
  `]
})
export class TalentGalleryComponent {
  activeCategory: string = 'all';

  projects = [
    {
      imageUrl: '../../../assets/images/talent/about-us-bg2.jpeg',
      title: 'Modern Website Redesign',
      category: 'design',
      description: 'A complete overhaul of a corporate website with modern UI/UX principles.',
      clientName: 'TechCorp Inc.'
    },
    {
      imageUrl: '../../../assets/images/talent/about-us-bg.jpg',
      title: 'E-commerce Platform',
      category: 'development',
      description: 'Custom e-commerce solution with advanced features and payment integration.',
      clientName: 'Fashion Retailer'
    },
    {
      imageUrl: '../../../assets/images/talent/about-us-bg.jpg',
      title: 'Brand Identity Package',
      category: 'branding',
      description: 'Complete brand identity including logo, guidelines, and marketing materials.',
      clientName: 'StartUp Innovators'
    },
    {
      imageUrl: '../../../assets/images/talent/team-member.jpg',
      title: 'Digital Marketing Campaign',
      category: 'marketing',
      description: 'Integrated marketing campaign across multiple digital platforms.',
      clientName: 'Consumer Goods Ltd.'
    },
    {
      imageUrl: '../../../assets/images/talent/background1.png',
      title: 'Mobile App Interface',
      category: 'design',
      description: 'User-centric mobile application interface with intuitive navigation.',
      clientName: 'Health & Wellness App'
    },
    {
      imageUrl: '../../../assets/images/talent/background.jpg',
      title: 'CRM System Development',
      category: 'development',
      description: 'Custom CRM solution tailored to client workflow and business processes.',
      clientName: 'Sales Enterprise Inc.'
    }
  ];

  get filteredProjects() {
    if (this.activeCategory === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.activeCategory);
  }

  filterProjects(category: string) {
    this.activeCategory = category;
  }
}
