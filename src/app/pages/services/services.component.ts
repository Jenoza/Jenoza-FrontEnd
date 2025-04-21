import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../components/shared/page-header/page-header.component';
import { ServicesSectionComponent } from '../../components/services/services-section/services-section.component';

@Component({
  selector: 'jnz-services',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, ServicesSectionComponent],
  template: `
    <jnz-page-header
      title="Our Services"
      backgroundImage="url('/assets/images/services/services-header-bg.jpg')">
    </jnz-page-header>

    <jnz-services-section></jnz-services-section>
  `,
  styles: []
})
export class ServicesComponent {}
