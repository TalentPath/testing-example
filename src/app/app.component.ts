import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Testing';

  add(x:number|string,y:number|string):any{
    let num1 = Number(x);
    let num2= Number(y);
    
    if(isNaN(num1) || isNaN(num2)){
      return 'User entered non number';
    }

    return num1+num2;
  }
}
