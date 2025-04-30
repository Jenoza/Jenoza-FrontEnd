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
          <h2>How We Work With Talent</h2>
          <p>Behind every project is a process rooted in collaboration, creativity, and strategic execution. Here's a glimpse into how we turn raw ideas into refined results.</p>
        </div>

        <div class="gallery-grid">
          <jnz-talent-card
            *ngFor="let project of projects"
            [imageUrl]="project.imageUrl"
            [title]="project.title"
            [description]="project.description">
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
      align-items: stretch;
    }

    @media (max-width: 768px) {
      .gallery-grid {
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
        align-items: stretch;
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
      imageUrl: '../../../assets/images/talent/MoodBoard.jpg',
      title: 'Mood Boards',
      description: 'A complete overhaul of a corporate website with modern UI/UX principles.',
    },
    {
      imageUrl: '../../../assets/images/talent/StoryBoard.jpg',
      title: 'Storyboards',
      description: 'Sequential visual planning that maps out every scene or screen before production begins.'
    },
    {
      imageUrl: '../../../assets/images/talent/WireFrames.jpg',
      title: 'Wireframes',
      description: 'Structural layouts of apps and websites, designed to prioritize user experience and functionality.'
    },
    {
      imageUrl: '../../../assets/images/talent/BrainStorm.jpg',
      title: 'Brainstorm Snapshots',
      description: 'Collaborative sessions with sketches, mind maps, and sticky notes — where raw ideas are born.'
    },
    {
      imageUrl: '../../../assets/images/talent/ProductionNotes.jpg',
      title: 'Production Notes',
      description: 'Blurred insights into planning, scripts, revisions, and timelines — the backbone of smooth execution.'
    },
    {
      imageUrl: '../../../assets/images/talent/Testing.jpg',
      title: 'Concept Testing',
      description: 'User and peer feedback on early concepts to refine direction and validate creative ideas.'

    }
  ];

}
