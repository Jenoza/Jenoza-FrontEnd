import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageHeaderComponent } from '../../components/shared/page-header/page-header.component';

@Component({
  selector: 'jnz-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PageHeaderComponent],
  template: `
    <jnz-page-header
      title="Contact Us"
      backgroundImage="url('/assets/images/contact/contact-header-bg.jpg')">
    </jnz-page-header>

    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you. Please fill out the form or contact us using the information below.</p>

            <div class="info-items">
              <div class="info-item">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Address</h3>
                  <p>123 Business Street<br>New York, NY 10001</p>
                </div>
              </div>

              <div class="info-item">
                <i class="fas fa-phone"></i>
                <div>
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>

              <div class="info-item">
                <i class="fas fa-envelope"></i>
                <div>
                  <h3>Email</h3>
                  <p>info&#64;jenoza.com</p>
                </div>
              </div>
            </div>

            <div class="social-links">
              <a href="#" class="social-link">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#" class="social-link">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-link">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#" class="social-link">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div class="contact-form">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
              <div class="form-group">
                <label for="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  formControlName="name"
                  placeholder="Enter your full name"
                  [class.error]="isFieldInvalid('name')">
              </div>

              <div class="form-group">
                <label for="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  formControlName="email"
                  placeholder="Enter your email address"
                  [class.error]="isFieldInvalid('email')">
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  formControlName="subject"
                  placeholder="Enter message subject"
                  [class.error]="isFieldInvalid('subject')">
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  formControlName="message"
                  rows="5"
                  placeholder="Enter your message"
                  [class.error]="isFieldInvalid('message')"></textarea>
              </div>

              <button type="submit" [disabled]="contactForm.invalid || isSubmitting">
                <span *ngIf="!isSubmitting">Send Message</span>
                <span *ngIf="isSubmitting">Sending...</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      padding: 80px 0;
      background-color: var(--background-light);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 60px;
      align-items: start;
    }

    .contact-info {
      h2 {
        font-size: 32px;
        color: var(--text-dark);
        margin-bottom: 20px;
      }

      > p {
        color: var(--text-muted);
        margin-bottom: 40px;
        line-height: 1.6;
      }
    }

    .info-items {
      margin-bottom: 40px;
    }

    .info-item {
      display: flex;
      align-items: flex-start;
      gap: 20px;
      margin-bottom: 30px;

      i {
        font-size: 24px;
        color: var(--primary-color);
      }

      h3 {
        font-size: 18px;
        color: var(--text-dark);
        margin-bottom: 5px;
      }

      p {
        color: var(--text-muted);
        line-height: 1.6;
      }
    }

    .social-links {
      display: flex;
      gap: 15px;

      .social-link {
        width: 40px;
        height: 40px;
        background: var(--primary-color);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: background-color 0.3s ease;

        &:hover {
          background: var(--primary-dark);
        }

        i {
          font-size: 18px;
        }
      }
    }

    .contact-form {
      background: white;
      padding: 40px;
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

      form {
        display: grid;
        gap: 20px;
      }
    }

    .form-group {
      display: grid;
      gap: 8px;

      label {
        font-weight: 500;
        color: var(--text-dark);
      }

      input, textarea {
        padding: 12px 15px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 16px;
        transition: border-color 0.3s ease;

        &:focus {
          outline: none;
          border-color: var(--primary-color);
        }

        &.error {
          border-color: var(--error-color);
        }
      }

      textarea {
        resize: vertical;
      }
    }

    button {
      background: var(--primary-color);
      color: white;
      border: none;
      padding: 15px 30px;
      border-radius: 5px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover:not(:disabled) {
        background: var(--primary-dark);
      }

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }

    @media (max-width: 992px) {
      .contact-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }
    }

    @media (max-width: 768px) {
      .contact-section {
        padding: 60px 0;
      }

      .contact-form {
        padding: 30px;
      }
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      // Here you would typically make an API call to send the form data
      console.log('Form submitted:', this.contactForm.value);

      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.contactForm.reset();
      }, 1500);
    } else {
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
    }
  }
}
