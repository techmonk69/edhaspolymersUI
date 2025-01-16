import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})

export class ContactComponent {
  formData = {
    name: '',
    phone: '',
    email: '',
    message: ''
  };

  showAlert: boolean = false;

  onSubmit() {
    // Display success alert
    this.showAlert = true;

    // Reset form data
    this.formData = {
      name: '',
      phone: '',
      email: '',
      message: ''
    };

    // Auto-hide alert after 5 seconds
    setTimeout(() => {
      this.showAlert = false;
    }, 5000);
  }
}


