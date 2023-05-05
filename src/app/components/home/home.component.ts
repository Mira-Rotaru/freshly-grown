import { Component } from '@angular/core';
interface Slide{
  imageUrl: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  slides: Slide[] = [
    {imageUrl:'../../assets/img/afine.jpg'},
    {imageUrl:'../../assets/img/capsuni.jpg'},
    {imageUrl:'../../assets/img/catina.jpg'},
    {imageUrl:'../../assets/img/cirese_galbene.jpg'},
    {imageUrl:'../../assets/img/cirese.jpg'},
    {imageUrl:'../../assets/img/fragute.jpg'},
    {imageUrl:'../../assets/img/zmeura.jpg'},
    {imageUrl:'../../assets/img/castravete.jpg'},
    {imageUrl:'../../assets/img/cartofi.jpg'},
    {imageUrl:'../../assets/img/ceapa_verde.jpg'},
    {imageUrl:'../../assets/img/dovlecel.jpg'},
    {imageUrl:'../../assets/img/ridiche.jpg'},
    {imageUrl:'../../assets/img/salata.jpg'},
  ]
  currentSlideIndex = 0;
  constructor(){}
  ngOnInit(){
    this.showSlide();
  }
  showSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    slides.forEach(slide => slide.classList.remove('active'));
    slides[this.currentSlideIndex].classList.add('active');
  }
  nextSlide() {
    this.currentSlideIndex++;
    if (this.currentSlideIndex >= this.slides.length) {
      this.currentSlideIndex = 0;
    }
    this.showSlide();
  }
  prevSlide() {
    this.currentSlideIndex--;
    if (this.currentSlideIndex < 0) {
      this.currentSlideIndex = this.slides.length - 1;
    }
    this.showSlide();
  }
}



