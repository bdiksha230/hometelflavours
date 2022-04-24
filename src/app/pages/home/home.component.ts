import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  router: any;

  constructor(private service:OrderDetailsService) { }
  foodData:any;
  allFoodType: any;
  foodid:any;

  ngOnInit(): void {
  
    this.foodData = this.service.foodDetails;
    this.allFoodType = this.service.foodTypesDetailes;
   console.log(this.foodTypeScroll);
   
  }
   
  
  foodTypeScroll: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    nav: true,
    navText: ['<img class="prev" src="https://i.postimg.cc/qvYYL9vC/prev.png">', '<img class="next" src="https://i.postimg.cc/Qx6cK7Xf/next.png">'],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 4
      },
      740: {
        items: 6
      },
      940: {
        items: 7
      }
    },
 
  }


}
