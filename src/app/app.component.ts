import { Component } from '@angular/core';
import { AppService } from './app.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private appService: AppService) {}
  title = 'ev-comply-test';
  email: string = '';
  emailError: string = '';
  submitNewsletter() {
    this.appService.addNewsletter(this.email).subscribe(
      (data) => {
        this.email = '';
        this.emailError = '';
        alert('Successfully registered!');
      },
      (errorResponse: HttpErrorResponse) => {
        if (errorResponse.error?.errors?.email[0] !== undefined) {
          this.emailError = errorResponse.error?.errors?.email[0];
        }
      }
    );
  }
}
