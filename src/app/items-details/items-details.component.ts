import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-details',
  templateUrl: './items-details.component.html',
  styleUrl: './items-details.component.css'
})
export class ItemsDetailsComponent implements OnInit {

  ngOnInit(): void {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.src = '../assets/js/script.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

}
