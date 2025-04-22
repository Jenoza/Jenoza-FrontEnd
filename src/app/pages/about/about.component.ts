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
      title: 'Innovation',
      description: 'Pushing boundaries and embracing new ideas to drive progress.',
      icon: 'bi-lightbulb'
    },
    {
      title: 'Integrity',
      description: 'Building trust through transparency and ethical practices.',
      icon: 'bi-shield-fill-check'
    },
    {
      title: 'Excellence',
      description: 'Delivering superior quality in everything we do.',
      icon: 'bi-star'
    },
    {
      title: 'Collaboration',
      description: 'Working together to achieve extraordinary results.',
      icon: 'bi-people'
    }
  ];

  team = [
    {
      name: 'John Doe',
      position: 'CEO & Founder',
      image: 'assets/images/team/john.jpg',
      bio: 'Visionary leader with 15+ years of industry experience.'
    },
    {
      name: 'Jane Smith',
      position: 'CTO',
      image: 'assets/images/team/jane.jpg',
      bio: 'Technology innovator driving our digital transformation.'
    },
    {
      name: 'Mike Johnson',
      position: 'Head of Operations',
      image: 'assets/images/team/mike.png',
      bio: 'Operations expert ensuring seamless business processes.'
    }
  ];
}
