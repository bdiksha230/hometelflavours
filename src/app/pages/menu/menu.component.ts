import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  foodData:any;
  foodTypes: any;
  pizzaTypes: any;
  burgerTypes: any;
  fruitplate: any;

  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
    this.foodTypes = this.service.foodTypesDetailes;
    this.pizzaTypes = this.service.PizzaTypesDetails;
    this.burgerTypes = this.service.burgerDetails;
    this.fruitplate = this.service.fruitplateDetail;
  }

}
