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
      subtitle="Let's start a conversation"
      backgroundImage="url('../../assets/images/2BG.jpg')"
      overlayColor="rgba(0, 0, 0, 0.6)">
    </jnz-page-header>

    <section class="contact-section">
      <div class="bg-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
      <div class="container">
        <div class="section-header">
          <div class="header-line"></div>
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you. Fill out the form or contact us directly.</p>
        </div>

        <div class="contact-grid">
          <div class="contact-info">
            <div class="info-card">
              <div class="info-items">
                <div class="info-item">
                  <div class="icon-wrapper">
                    <i class="fa fa-map-marker"></i>
                  </div>
                  <div>
                    <h3>Address</h3>
                    <p>123 Business Street<br>New York, NY 10001</p>
                  </div>
                </div>

                <div class="info-item">
                  <div class="icon-wrapper">
                    <i class="fa fa-phone"></i>
                  </div>
                  <div>
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div class="info-item">
                  <div class="icon-wrapper">
                    <i class="fa fa-envelope"></i>
                  </div>
                  <div>
                    <h3>Email</h3>
                    <p>info&#64;jenoza.com</p>
                  </div>
                </div>
              </div>

              <div class="social-links">
                <h3>Follow Us</h3>
                <div class="social-icons">
                  <a href="#" class="social-link">
                    <i class="fa fa-linkedin"></i>
                  </a>
                  <a href="#" class="social-link">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#" class="social-link">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#" class="social-link">
                    <i class="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
              <div class="form-group">
                <label for="name">Full Name</label>
                <div class="input-wrapper">
                  <i class="fa fa-user"></i>
                  <input
                    type="text"
                    id="name"
                    formControlName="name"
                    placeholder="Enter your full name"
                    [class.error]="isFieldInvalid('name')">
                </div>
                <div class="error-message" *ngIf="isFieldInvalid('name')">
                  Please enter your name
                </div>
              </div>

              <div class="form-group">
                <label for="email">Email Address</label>
                <div class="input-wrapper">
                  <i class="fa fa-envelope"></i>
                  <input
                    type="email"
                    id="email"
                    formControlName="email"
                    placeholder="Enter your email address"
                    [class.error]="isFieldInvalid('email')">
                </div>
                <div class="error-message" *ngIf="isFieldInvalid('email')">
                  Please enter a valid email address
                </div>
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <div class="input-wrapper">
                  <i class="fa fa-tag"></i>
                  <input
                    type="text"
                    id="subject"
                    formControlName="subject"
                    placeholder="Enter message subject"
                    [class.error]="isFieldInvalid('subject')">
                </div>
                <div class="error-message" *ngIf="isFieldInvalid('subject')">
                  Please enter a subject
                </div>
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <div class="input-wrapper textarea-wrapper">
                  <i class="fa fa-comment"></i>
                  <textarea
                    id="message"
                    formControlName="message"
                    rows="6"
                    placeholder="Enter your message"
                    [class.error]="isFieldInvalid('message')"></textarea>
                </div>
                <div class="error-message" *ngIf="isFieldInvalid('message')">
                  Please enter a message (at least 10 characters)
                </div>
              </div>

              <button type="submit" [disabled]="contactForm.invalid || isSubmitting">
                <span *ngIf="!isSubmitting">Send Message</span>
                <span *ngIf="isSubmitting">
                  <i class="fa fa-spinner fa-spin"></i> Sending...
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="map-section">
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343035!2d-74.00880872316815!3d40.74076623568067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xbea9b5a68bc2b3a7!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1680532673329!5m2!1sen!2sus"
          width="100%"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      padding: 80px 0 100px;
      background-color: #f8f9fa;
      position: relative;
      overflow: hidden;
    }

    .bg-shapes {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      overflow: hidden;
    }

    .shape {
      position: absolute;
      border-radius: 50%;
      filter: blur(40px);
    }

    .shape-1 {
      width: 500px;
      height: 500px;
      top: -200px;
      right: -100px;
      background: linear-gradient(45deg, rgba(255, 87, 34, 0.1), rgba(255, 152, 0, 0.05));
    }

    .shape-2 {
      width: 400px;
      height: 400px;
      bottom: -150px;
      left: -100px;
      background: linear-gradient(45deg, rgba(33, 150, 243, 0.05), rgba(156, 39, 176, 0.05));
    }

    .shape-3 {
      width: 300px;
      height: 300px;
      top: 40%;
      right: 30%;
      background: linear-gradient(45deg, rgba(255, 235, 59, 0.05), rgba(255, 193, 7, 0.08));
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      position: relative;
      z-index: 1;
    }

    .section-header {
      text-align: center;
      margin-bottom: 60px;
      position: relative;

      .header-line {
        width: 80px;
        height: 4px;
        background: linear-gradient(90deg, #ff5722, #ff9800);
        margin: 0 auto 20px;
        border-radius: 2px;
      }

      h2 {
        font-size: 36px;
        color: #333;
        margin-bottom: 15px;
        font-weight: 600;
      }

      p {
        font-size: 18px;
        color: #666;
        max-width: 600px;
        margin: 0 auto;
        line-height: 1.6;
      }
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 40px;
      align-items: start;
    }

    .contact-info {
      .info-card {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        border-radius: 16px;
        box-shadow:
          20px 20px 60px rgba(0, 0, 0, 0.05),
          -20px -20px 60px rgba(255, 255, 255, 0.8),
          inset 0 0 0 1px rgba(255, 255, 255, 0.1);
        padding: 40px 30px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        position: relative;
        overflow: hidden;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #ff5722, #ff9800);
          opacity: 0.8;
        }
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
      transition: transform 0.3s ease;

      &:hover {
        transform: translateX(5px);
      }

      .icon-wrapper {
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #ff5722, #ff7043);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 8px 16px rgba(255, 87, 34, 0.15);
        flex-shrink: 0;

        i {
          font-size: 22px;
          color: white;
        }
      }

      h3 {
        font-size: 18px;
        color: #333;
        margin-bottom: 8px;
        font-weight: 600;
      }

      p {
        color: #666;
        line-height: 1.6;
      }
    }

    .social-links {
      h3 {
        font-size: 18px;
        color: #333;
        margin-bottom: 15px;
        font-weight: 600;
      }

      .social-icons {
        display: flex;
        gap: 15px;
      }

      .social-link {
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, #ff5722, #ff7043);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(255, 87, 34, 0.15);

        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(255, 87, 34, 0.2);
        }

        i {
          font-size: 18px;
        }
      }
    }

    .contact-form {
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
      padding: 40px;
      border-radius: 16px;
      box-shadow:
        20px 20px 60px rgba(0, 0, 0, 0.05),
        -20px -20px 60px rgba(255, 255, 255, 0.8),
        inset 0 0 0 1px rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #ff5722, #ff9800);
        opacity: 0.8;
      }

      form {
        display: grid;
        gap: 25px;
        position: relative;
        z-index: 1;
      }
    }

    .form-group {
      display: grid;
      gap: 8px;

      label {
        font-weight: 500;
        color: #333;
        font-size: 15px;
      }

      .input-wrapper {
        position: relative;
        display: flex;
        align-items: center;

        i {
          position: absolute;
          left: 15px;
          color: #666;
          font-size: 16px;
        }

        input, textarea {
          width: 100%;
          padding: 14px 15px 14px 45px;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          font-size: 16px;
          transition: all 0.3s ease;
          background-color: rgba(255, 255, 255, 0.8);
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);

          &:focus {
            outline: none;
            border-color: #ff5722;
            box-shadow: 0 0 0 3px rgba(255, 87, 34, 0.1);
            background-color: white;
          }

          &.error {
            border-color: #f44336;
            box-shadow: 0 0 0 3px rgba(244, 67, 54, 0.1);
          }

          &::placeholder {
            color: #aaa;
          }
        }
      }

      .textarea-wrapper {
        i {
          top: 14px;
        }

        textarea {
          resize: vertical;
        }
      }

      .error-message {
        color: #f44336;
        font-size: 13px;
        margin-top: 4px;
      }
    }

    button {
      background: linear-gradient(135deg, #ff5722, #ff7043);
      color: white;
      border: none;
      padding: 15px 30px;
      border-radius: 50px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 10px 20px rgba(255, 87, 34, 0.15);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      position: relative;
      overflow: hidden;
      z-index: 1;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
        z-index: -1;
        transform: translateY(100%);
        transition: transform 0.4s ease;
      }

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 30px rgba(255, 87, 34, 0.2);

        &::before {
          transform: translateY(0);
        }
      }

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        transform: none;
        box-shadow: 0 5px 15px rgba(255, 87, 34, 0.1);
      }

      i {
        font-size: 16px;
      }
    }

    .map-section {
      height: 450px;
      .map-container {
        width: 100%;
        height: 100%;
        iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }
      }
    }

    @media (max-width: 1024px) {
      .contact-grid {
        gap: 30px;
      }
    }

    @media (max-width: 768px) {
      .contact-section {
        padding: 60px 0 80px;
      }

      .section-header {
        margin-bottom: 40px;

        .header-line {
          width: 60px;
          margin-bottom: 15px;
        }

        h2 {
          font-size: 30px;
        }

        p {
          font-size: 16px;
        }
      }

      .contact-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .contact-form, .info-card {
        padding: 30px 25px;
      }

      .map-section {
        height: 350px;
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
