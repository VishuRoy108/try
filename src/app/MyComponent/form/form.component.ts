import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  name: string = '';
  
  constructor(private http: HttpClient) {}

  submitForm() {
    console.log('Submitted Name:', this.name);

    const apiUrl = 'http://localhost:5298/api/Employee/post'; 
    const formData = { name: this.name };

    this.http.post(apiUrl, formData).subscribe({
      next: (response) => {
        console.log('POST request successful:', response);
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
}
}