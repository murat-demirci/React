declare global{
  interface ItemObject{
    id:string;
    title:string;
    price:number;
    img:string;
    quantity:number;
  }
  interface CardState {
    id: string;
    item: Array<ItemObject>;
    quantity: number;
    total: number;
  }
}

export {};