import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrl: './items-page.component.css'
})
export class ItemsPageComponent implements OnInit {

  ngOnInit(): void {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.src = '../assets/js/script.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

}
