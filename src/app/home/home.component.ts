import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  isOpen = false;

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }

  closeOnOutsideClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }


  ngOnInit() {
  }

}