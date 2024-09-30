import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.src = '../../assets/js/script.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

}
