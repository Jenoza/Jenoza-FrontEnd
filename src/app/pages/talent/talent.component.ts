import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../components/shared/page-header/page-header.component';
import { TalentGalleryComponent } from '../../components/talent/talent-gallery/talent-gallery.component';

@Component({
  selector: 'jnz-talent',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, TalentGalleryComponent],
  template: `
    <jnz-page-header
      title="Our Talent Showcase"
      backgroundImage="url('../../../assets/images/corporate-bg-web.jpg')">
    </jnz-page-header>

    <jnz-talent-gallery></jnz-talent-gallery>
  `,
  styles: []
})
export class TalentComponent {}
