import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../components/shared/page-header/page-header.component';
import { TeamSectionComponent } from '../../components/team/team-section/team-section.component';

@Component({
  selector: 'jnz-team',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, TeamSectionComponent],
  template: `
    <jnz-page-header
      title="Our Team"
      backgroundImage="url('/assets/images/team/team-header-bg.jpg')">
    </jnz-page-header>

    <jnz-team-section></jnz-team-section>
  `,
  styles: []
})
export class TeamComponent {}
