import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jnz-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  teamMember = {
    name: 'Christina Park',
    position: 'Senior Designer',
    email: 'christina@example.com',
    phone: '+1 234 567 890',
    location: 'New York, USA'
  };

  services = [
    {
      title: 'Creative Solution',
      description: 'Providing innovative creative solutions for your business needs.'
    },
    {
      title: 'Customer Support',
      description: '24/7 dedicated customer support to assist you with any queries.'
    },
    {
      title: 'Innovative Service',
      description: 'Cutting-edge services tailored to meet modern business challenges.'
    }
  ];
}
