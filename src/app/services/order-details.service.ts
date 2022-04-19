import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }
  foodDetails = [
    {
      id: 1,
      foodName: "Paneer Grilled Sandwich",
      foodDetails: "Pan fried Masala Paneer",
      foodPrice: 250,
      foodImg: "https://i.postimg.cc/sD34hwqg/food2.jpg"
    },
    {
      id: 2,
      foodName: "Paneer Grilled Sandwich",
      foodDetails: "Pan fried Masala Paneer",
      foodPrice: 110,
      foodImg: "https://i.postimg.cc/vmxrsjg3/food1.jpg"
    },
    {
      id: 3,
      foodName: "Paneer Grilled Sandwich",
      foodDetails: "Pan fried Masala Paneer",
      foodPrice: 180,
      foodImg: "https://i.postimg.cc/2ySV7cW4/food4.jpg"
    },
    {
      id: 4,
      foodName: "Paneer Grilled Sandwich",
      foodDetails: "Pan fried Masala Paneer",
      foodPrice: 200,
      foodImg: "https://i.postimg.cc/5NtCB05Z/food5.jpg"
    },
    {
      id: 5,
      foodName: "Paneer Grilled Sandwich",
      foodDetails: "Pan fried Masala Paneer",
      foodPrice: 230,
      foodImg: "https://i.postimg.cc/jSgvHmJh/food6.jpg"
    },
    {
      id: 6,
      foodName: "Paneer Grilled Sandwich",
      foodDetails: "Pan fried Masala Paneer",
      foodPrice: 100,
      foodImg: "https://i.postimg.cc/dtn9FpnK/food7.jpg"
    }

  ]

  foodTypesDetailes = [
    {
      no: 101,
      foodTypeImg: "https://i.postimg.cc/nhBFDD2R/pizza-1.webp",
      foodTypeName: "Pizza"
    },
    {
      no: 102,
      foodTypeImg: "https://i.postimg.cc/VL3svRq0/burger.webp",
      foodTypeName: "Burger"
    },
    {
      no: 103,
      foodTypeImg: "https://i.postimg.cc/9Fzzr0sK/health-1.webp",
      foodTypeName: "Health"
    },
    {
      no: 104,
      foodTypeImg: "https://i.postimg.cc/BQybDs06/sandwitch-3.webp",
      foodTypeName: "Sandwich"
    },
    {
      no: 105,
      foodTypeImg: "https://i.postimg.cc/g0b0SDrb/chinese.webp",
      foodTypeName: "chinese"
    },
    {
      no: 106,
      foodTypeImg: "https://i.postimg.cc/HxpkHkQS/noli.webp",
      foodTypeName: "south indian"
    },
    {
      no: 107,
      foodTypeImg: "https://i.postimg.cc/XvKYTCyG/thali-3.webp",
      foodTypeName: "thali"
    },
    {
      no: 108,
      foodTypeImg: "https://i.postimg.cc/HkWzqR30/chicken-1.jpg",
      foodTypeName: "chicken"
    },
    {
      no: 109,
      foodTypeImg: "https://i.postimg.cc/nL1ndf6q/rolls-1.webp",
      foodTypeName: "rolls"
    },
    {
      no: 110,
      foodTypeImg: "https://i.postimg.cc/x8ZfKGB7/paratha.webp",
      foodTypeName: "paratha"
    },
    {
      no: 120,
      foodTypeImg: "https://i.postimg.cc/026293wq/biryani-4.webp",
      foodTypeName: "rice and biryani"
    },

  ]

  PizzaTypesDetails = [
    {
      id: 201,
      pizzaImg: "https://i.postimg.cc/Lssy1vGG/pizza2.webp",
      pizzaName: "Chicken Pizza",
      pizzaPrice: "120"
    },
    {
      id: 202,
      pizzaImg: "https://i.postimg.cc/J0jKLFBH/pizza6.webp",
      pizzaName: "Onion Pizza",
      pizzaPrice: "99"
    },
    {
      id: 203,
      pizzaImg: "https://i.postimg.cc/YSydfYH0/pizza1.webp",
      pizzaName: "Margherita Pizza",
      pizzaPrice: "120"
    },
    {
      id: 204,
      pizzaImg: "https://i.postimg.cc/RF6XPhSR/pizza3.webp",
      pizzaName: "Paneer Pizza",
      pizzaPrice: "120"
    },
    {
      id: 205,
      pizzaImg: "https://i.postimg.cc/RFkG2mqz/pizza4.webp",
      pizzaName: "Tommato Pizza",
      pizzaPrice: "99"
    },
    {
      id: 206,
      pizzaImg: "https://i.postimg.cc/4xPLyj2z/pizza5.webp",
      pizzaName: "Margherita Pizza",
      pizzaPrice: "120"
    },
  ]

  burgerDetails = [
    {
      id: 301,
      burgerImg: "https://i.postimg.cc/MGgYftWZ/Cheese-Supreme-Chicken.webp",
      burgerName: "Cheese Supreme Chicken",
      burgerPrice: "170"
    },
    {
      id: 302,
      burgerImg: "https://i.postimg.cc/g0jMZn8s/chichen-maharaja.webp",
      burgerName: "chichen maharaja",
      burgerPrice: "170"
    },
    {
      id: 303,
      burgerImg: "https://i.postimg.cc/FKT2MMgW/chicken-burger.webp",
      burgerName: "chicken burger",
      burgerPrice: "170"
    },
    {
      id: 304,
      burgerImg: "https://i.postimg.cc/XY7LRpHW/Chilli-burger-With-Pepper-Relish.webp",
      burgerName: "burger With Pepper Relish",
      burgerPrice: "170"
    },
    {
      id: 305,
      burgerImg: "https://i.postimg.cc/R0WR02xb/paneer-burger.webp",
      burgerName: "paneer burger",
      burgerPrice: "170"
    },
    {
      id: 306,
      burgerImg: "https://i.postimg.cc/HkZzddRy/Veg-Burger.webp",
      burgerName: "Veg Burger",
      burgerPrice: "170"
    },
  ]
  fruitplateDetail= [
    {
      id: 401,
      fruitImg: "https://i.postimg.cc/0NN26Mxc/fruit-plate.webp",
      fruitName: "Fruit Plate",
      fruitPrice: "90"
    },
    {
      id: 402,
      fruitImg: "https://i.postimg.cc/rpYy5Vwc/fruit-plate2.webp",
      fruitName: "Fruit Plate",
      fruitPrice: "90"
    },
    {
      id: 403,
      fruitImg: "https://i.postimg.cc/3R48BskG/fruit-plate3.webp",
      fruitName: "Fruit Plate",
      fruitPrice: "90"
    },
  ]



}
