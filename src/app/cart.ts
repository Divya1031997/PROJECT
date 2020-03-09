

export class Cart {
    
    itemId:number;
     quantity:number=1;
     price:number;
    
    }
    
    export class ViewCart{
      [x: string]: number;
      cartItemId:number;
      itemId:number;
      quantity:number;
      price:number;
      totalprice:number;
    
    
    }