import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';


@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private param: ActivatedRoute, private service: OrderDetailsService) { }

  getHealthId: any;
  healthData: any;

  ngOnInit(): void {
 
    this.getHealthId = this.param.snapshot.paramMap.get('id');
    if (this.getHealthId) {
      this.healthData = this.service.fruitplateDetail.filter((value) => {
        return value.id == this.getHealthId;
      })
    }
  }
}


