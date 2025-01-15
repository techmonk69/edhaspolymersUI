import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  onSubmit(form: any): void {
    console.log('Form Submitted', form);
    alert('Thank you for contacting us!');
  }
}


