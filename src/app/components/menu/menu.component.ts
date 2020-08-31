import { Item } from './../../mocks/junior-data';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
 @Input() item :Item;
 @Output() addToCart = new EventEmitter();
 @Output() deleteFromCart = new EventEmitter();
 itemAdded = false
  constructor() { }

  ngOnInit(): void {
  }
  
  addToCartFn(){
    this.item.addedToCart = true
    this.addToCart.emit(this.item)
  }
  deleteFromCartFn(){
    this.item.addedToCart = false
    this.deleteFromCart.emit(this.item)
  }

}
