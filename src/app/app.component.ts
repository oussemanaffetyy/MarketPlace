import { Component, OnInit  } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  title = 'MarketPlace';
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


  
}
interface IItems 
{

  id: number;
  name: string;
  price : number;
  }