import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamMemberCardComponent } from '../team-member-card/team-member-card.component';

@Component({
  selector: 'jnz-team-section',
  standalone: true,
  imports: [CommonModule, TeamMemberCardComponent],
  template: `
    <section class="team-section">
      <div class="container">
        <div class="section-header">
          <h2>Our Team</h2>
          <p>Meet the talented individuals behind our success</p>
        </div>
        <div class="team-grid">
          <jnz-team-member-card
            *ngFor="let member of teamMembers"
            [name]="member.name"
            [position]="member.position"
            [imageUrl]="member.imageUrl"
            [socialLinks]="member.socialLinks">
          </jnz-team-member-card>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .team-section {
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

    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 30px;
    }

    @media (max-width: 768px) {
      .team-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
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
export class TeamSectionComponent {
  teamMembers = [
    {
      name: 'John Doe',
      position: 'CEO & Founder',
      imageUrl: 'assets/images/team/john-doe.jpg',
      socialLinks: [
        { platform: 'linkedin', url: 'https://linkedin.com' },
        { platform: 'twitter', url: 'https://twitter.com' }
      ]
    },
    {
      name: 'Jane Smith',
      position: 'Creative Director',
      imageUrl: 'assets/images/team/jane-smith.jpg',
      socialLinks: [
        { platform: 'linkedin', url: 'https://linkedin.com' },
        { platform: 'instagram', url: 'https://instagram.com' }
      ]
    },
    {
      name: 'Mike Johnson',
      position: 'Lead Developer',
      imageUrl: 'assets/images/team/mike-johnson.jpg',
      socialLinks: [
        { platform: 'linkedin', url: 'https://linkedin.com' },
        { platform: 'github', url: 'https://github.com' }
      ]
    }
    // Add more team members as needed
  ];
}
