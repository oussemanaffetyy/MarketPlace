import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MarketPlace';

  ngOnInit(): void {
    // Ensure that jQuery is executed after the DOM is ready
    $(document).ready(() => {
      // Custom script using jQuery
      let body = <HTMLDivElement>document.body;
      let script = document.createElement('script');
      script.src = '../assets/js/script.js';
      script.async = true;
      body.appendChild(script);
    });
  }
}
