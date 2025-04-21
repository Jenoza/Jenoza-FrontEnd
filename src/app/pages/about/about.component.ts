import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../components/shared/page-header/page-header.component';

@Component({
  selector: 'jnz-about',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent],
  template: `
    <jnz-page-header
      title="About Us"
      backgroundImage="url('/assets/images/about-header-bg.jpg')">
    </jnz-page-header>

    <section class="about-content section">
      <div class="container">
        <h2>Our Story</h2>
        <p>
          Welcome to Jenoza! Founded in [Year], we started with a simple mission: [Your Mission].
          Over the years, we've grown into a passionate team dedicated to [What you do].
        </p>
        <p>
          Our core values are [Value 1], [Value 2], and [Value 3]. These guide everything we do,
          from [Example 1] to [Example 2]. We believe in [Your Core Belief].
        </p>
        <h2>What We Do</h2>
        <p>
          We specialize in providing top-notch [Service/Product 1], [Service/Product 2],
          and [Service/Product 3]. Our unique approach combines [Unique Aspect 1] with
          [Unique Aspect 2] to deliver exceptional results for our clients.
        </p>
        <!-- Add more content sections as needed -->
      </div>
    </section>
  `,
  styles: [`
    .about-content {
      background-color: #ffffff;
      padding: 3rem 0;
    }
    .container {
      max-width: 960px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      color: var(--text-color);
    }
    p {
      margin-bottom: 1.5rem;
      line-height: 1.7;
      color: #6c757d;
    }
  `]
})
export class AboutComponent {}
