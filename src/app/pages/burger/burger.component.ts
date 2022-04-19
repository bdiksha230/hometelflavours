import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';


@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {

  constructor(private param: ActivatedRoute, private service: OrderDetailsService) { }
  
  getBurgerId:any;
  burgerData:any

  ngOnInit(): void {

    this.getBurgerId = this.param.snapshot.paramMap.get('id');
    if(this.getBurgerId){
      this.burgerData = this.service.burgerDetails.filter((value)=>{
        return value.id == this.getBurgerId;
      })
    }
  }

}
