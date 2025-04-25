import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../components/shared/page-header/page-header.component';

@Component({
  selector: 'jnz-about',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  values = [
    {
      title: 'Creativity ',
      description: 'We approach every project with originality and purpose, pushing boundaries to craft bold, engaging solutions that set our clients apart. ',
      icon: 'bi-lightbulb'
    },
    {
      title: 'Integrity',
      description: 'Honesty, transparency, and accountability are at the core of everything we do — in how we work, communicate, and deliver results. ',
      icon: 'bi-shield-fill-check'
    },
    {
      title: 'Excellence',
      description: 'We strive for precision and quality at every level, delivering work that\'s not just good — but exceptional, every time.',
      icon: 'bi-star'
    },
    {
      title: 'Collaboration',
      description: 'We believe in partnership. Internally and externally, we listen, align, and build together — because the best outcomes are co-created.',
      icon: 'bi-people'
    }
  ];

  capabilities = [
    {
      title: 'Branding & Identity Design',
      description: 'Crafting meaningful visuals and brand systems that speak louder than words.',
      icon: 'fa-paint-brush'
    },
    {
      title: 'Media Production & Advertising',
      description: 'Creating cinematic, scroll-stopping content for digital and traditional platforms.',
      icon: 'fa-video-camera'
    },
    {
      title: 'Web Development & UX/UI Design',
      description: 'Building high-performance websites and platforms that merge design with functionality.',
      icon: 'fa-code'
    },
    {
      title: 'Multimedia Content Creation',
      description: 'From short-form video to animation and podcasting — we turn content into engagement.',
      icon: 'fa-film'
    },
    {
      title: 'Digital Strategy & Marketing',
      description: 'Data-driven campaigns and creative concepts engineered to convert and grow.',
      icon: 'fa-line-chart'
    },
    {
      title: 'Creative Talent Sponsorship',
      description: 'Supporting visionary individuals through brand partnerships, mentorship, and exposure.',
      icon: 'fa-handshake-o'
    }
  ];
}
