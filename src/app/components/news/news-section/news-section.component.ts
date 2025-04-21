import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from '../news-card/news-card.component';

@Component({
  selector: 'jnz-news-section',
  standalone: true,
  imports: [CommonModule, NewsCardComponent],
  template: `
    <section class="news-section">
      <div class="container">
        <div class="section-header">
          <h2>Latest News</h2>
          <p>Stay updated with our latest developments and industry insights</p>
        </div>
        <div class="news-grid">
          <jnz-news-card
            *ngFor="let article of newsArticles"
            [imageUrl]="article.imageUrl"
            [title]="article.title"
            [excerpt]="article.excerpt"
            [date]="article.date"
            [author]="article.author"
            [category]="article.category"
            [slug]="article.slug">
          </jnz-news-card>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .news-section {
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

    .news-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 30px;
    }

    @media (max-width: 768px) {
      .news-grid {
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
export class NewsSectionComponent {
  newsArticles = [
    {
      imageUrl: '/assets/images/news/tech-innovation.jpg',
      title: 'Revolutionizing Industry Standards with AI Integration',
      excerpt: 'Discover how our latest AI-powered solutions are transforming business operations and setting new benchmarks in the industry.',
      date: new Date('2024-03-15'),
      author: 'John Smith',
      category: 'Technology',
      slug: 'revolutionizing-industry-standards-ai'
    },
    {
      imageUrl: '/assets/images/news/cloud-security.jpg',
      title: 'Enhanced Cloud Security Measures for Enterprise Solutions',
      excerpt: 'Learn about our advanced cloud security protocols and how they protect enterprise data in an increasingly digital world.',
      date: new Date('2024-03-10'),
      author: 'Sarah Johnson',
      category: 'Security',
      slug: 'enhanced-cloud-security-measures'
    },
    {
      imageUrl: '/assets/images/news/digital-transformation.jpg',
      title: 'Digital Transformation Success Stories',
      excerpt: 'Explore real-world examples of successful digital transformation projects and their impact on business growth.',
      date: new Date('2024-03-05'),
      author: 'Mike Wilson',
      category: 'Case Study',
      slug: 'digital-transformation-success-stories'
    }
  ];
}
