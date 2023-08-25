import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-exlist',
  templateUrl: './exlist.component.html',
  styleUrls: ['./exlist.component.css']
})
export class ExlistComponent {
 @Input('carsInput') cars:string[]=[ ];
}
