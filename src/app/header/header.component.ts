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


  contact() {
    window.scrollTo({
      top: 4000,
      behavior: 'smooth'
    });
  }

  portfolio() {
    // window.location.href = ('/portfolio');
  }

  about() {
    window.scrollTo({
      top: 900,
      behavior: 'smooth'
    });
  }

  name() {
    window.scrollTo({
      top: 110,
      behavior: 'smooth'
    });
  }
}
