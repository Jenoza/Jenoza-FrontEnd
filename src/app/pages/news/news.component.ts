import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../components/shared/page-header/page-header.component';
import { NewsSectionComponent } from '../../components/news/news-section/news-section.component';

@Component({
  selector: 'jnz-news',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, NewsSectionComponent],
  template: `
    <jnz-page-header
      title="Latest News"
      backgroundImage="url('/assets/images/news/news-header-bg.jpg')">
    </jnz-page-header>

    <jnz-news-section></jnz-news-section>
  `,
  styles: []
})
export class NewsComponent {}
