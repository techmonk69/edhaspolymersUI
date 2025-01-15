import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  activeSlideIndex = 0;
   // Images for the carousel
   carouselImages = [
  
    { src: 'assets/p3.jpg', alt: 'Third Slide' },
    { src: 'assets/p4.jpg', alt: 'Fourth Slide' },
    { src: 'assets/p5.jpg', alt: 'Fifth Slide' },
    { src: 'assets/p6.jpg', alt: 'Sixth Slide' },
    { src: 'assets/p7.jpg', alt: 'Seventh Slide'},
    { src: 'assets/p7.jpg', alt: 'Eight Slide'},
    { src: 'assets/p1.jpg', alt: 'First Slide' },
    { src: 'assets/p2.jpg', alt: 'Second Slide' }
  ];

  prevSlide(): void {
    this.activeSlideIndex =
      (this.activeSlideIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
  }

  nextSlide(): void {
    this.activeSlideIndex = (this.activeSlideIndex + 1) % this.carouselImages.length;
  }

  setActiveSlide(index: number): void {
    this.activeSlideIndex = index;
  }
}
