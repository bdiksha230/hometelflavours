import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:OrderDetailsService) { }
  getPizzaid: any;
  pizzaData:any;

  ngOnInit(): void {

    this.getPizzaid = this.param.snapshot.paramMap.get('id');
    console.log(this.getPizzaid, 'pizza');
    if(this.getPizzaid){
      this.pizzaData = this.service.PizzaTypesDetails.filter((value)=>{
        return value.id == this.getPizzaid;
      })
    }
  }

}
