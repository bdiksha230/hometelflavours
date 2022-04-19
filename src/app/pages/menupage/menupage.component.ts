import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:OrderDetailsService) { }
 

  // getBurgerId:any;
  // burgerData:any

  ngOnInit(): void {
    

    // this.getBurgerId = this.param.snapshot.paramMap.get('id');
    // if(this.getBurgerId){
    //   this.burgerData = this.service.burgerDetails.filter((value)=>{
    //     return value.id == this.getBurgerId;
    //   })
    // }
    
  }

}
