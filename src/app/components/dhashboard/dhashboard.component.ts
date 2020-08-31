import { Component, OnInit } from '@angular/core';
import { items, Item } from '../../mocks/junior-data';
@Component({
  selector: 'app-dhashboard',
  templateUrl: './dhashboard.component.html',
  styleUrls: ['./dhashboard.component.scss']
})
export class DhashboardComponent implements OnInit {
items = items;
carts : Item[] = []
Total =0

  typeAlert= 'info'
  msgAlert
  showAlert = false;
  dismissible = true;

  constructor() { }

  ngOnInit(): void {
  }
  
  addToCartFn(item : Item){
      console.log(item)
        this.carts.push(item)
        this.Total+= item.price
  }
  deleteFromCartFn(item){
  const index = this.carts.indexOf(item)
  console.log(index)
  this.carts.splice(index, 1);
    this.Total-= item.price
  }

  buy(){
    console.log(this.Total)
    if(this.Total<=0){
      this.showAlert = true
      this.msgAlert = "Please buy something"
    }
   else if(this.Total>1000){
      this.showAlert = true
      this.msgAlert = "You don't have enough gold "
    }
    else{
      this.showAlert = true
      this.msgAlert = "Transaction Success! "
    }
  }

  onClosed(alert){
    this.showAlert =false
  }
}
