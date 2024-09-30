import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
constructor(private router: Router) { }

  items = [222,224];
  populerItem:Array<IItems> = [
 {id:1,name:"item1",price:100},
  {id:2,name:"item2",price:200},
  {id:3,name:"item3",price:300},

  ];
   ngOnInit(): void {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.src = '../assets/js/script.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

  NavigateToPage() {
    this.router.navigate(['/Items']);
    }
  
}
interface IItems 
{

  id: number;
  name: string;
  price : number;
  }