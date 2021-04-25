import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(public router: Router) {
    router.events.subscribe(() => (event instanceof NavigationEnd) && this.handleRouteChange());
  }

  ngOnInit() {
  }

  handleRouteChange = () => {
    if (this.router.url.includes('portfolio')) {
      alert('hi');
    }
  }

  name() {
    window.scrollTo({
      top: 110,
      behavior: 'smooth'
    });
  }
}
