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
  
    { src: 'assets/p2.jpg', alt: 'Third Slide' },
    { src: 'assets/p3.jpg', alt: 'Fourth Slide' },
    { src: 'assets/p4.jpg', alt: 'Fifth Slide' },
    { src: 'assets/p5.jpg', alt: 'Sixth Slide' },
    { src: 'assets/p6.jpg', alt: 'Seventh Slide'},
    { src: 'assets/p7.jpg', alt: 'Eight Slide'},
    { src: 'assets/p1.jpg', alt: 'First Slide' },
    { src: 'assets/p8.jpg', alt: 'Second Slide' }
  ];

  private intervalId: any;

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    this.stopCarousel(); // Prevent memory leaks
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 1500); // 1.5 seconds
  }

  stopCarousel() {
    clearInterval(this.intervalId);
  }

  nextSlide() {
    this.activeSlideIndex = (this.activeSlideIndex + 1) % this.carouselImages.length;
  }

  prevSlide() {
    this.activeSlideIndex = (this.activeSlideIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
  }

    setActiveSlide(index: number) {
    this.activeSlideIndex = index;
    this.stopCarousel(); // Stop automatic sliding when user interacts
    this.startCarousel();// Restart after the user changes the slide
  }

  
}
