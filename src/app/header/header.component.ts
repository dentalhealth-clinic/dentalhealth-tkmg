import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    interface WindowWithScroll {
      scrollY: number;
    }
    if (typeof window !== "undefined") {
      // browser code
    window.addEventListener('scroll', () => {
      const headerElement = document.querySelector('.site-header') as HTMLElement;
        const scrollTop =
        (window as WindowWithScroll).scrollY || document.documentElement.scrollTop;
      if (scrollTop > 95) {
        console.log('User has scrolled down past 90 pixels');
        headerElement.classList.add('scrolled');
      } else {
        headerElement.classList.remove('scrolled');
      }
    });
  }
  }

  isOpen = false; // Flag to track open/closed state

  toggleNav() {
    this.isOpen = !this.isOpen;
    // console.log("Hi");
    
  }

}
