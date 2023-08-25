import { Component } from '@angular/core';

@Component({
  selector: 'app-exampel',
  templateUrl: './exampel.component.html',
  styleUrls: ['./exampel.component.css']
})
export class ExampelComponent {
cars: string[]=[];
carName="";

  addCar() {
     this.cars.push(this.carName);
     this.carName="";
     console.log(this.cars)

}
}   