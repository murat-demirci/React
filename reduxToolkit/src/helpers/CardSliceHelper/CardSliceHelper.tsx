export class CSHelper{
    static ChangeQuantity(state: CardState, type: number, quantity = 0) {
        if (type === 1) {
          state.quantity += 1;
          return;
        } else if (type === -1) {
          state.quantity -= 1;
          return;
        } else if (type === 0) {
          state.quantity = state.quantity - quantity;
          return;
        }
        throw new Error("type parameter must be between -1 and 1");
      }

      static ChangeTotal(state: CardState, type: number, price: number) {
        if (type === 1) {
          state.total = state.total + price;
          return;
        } else if (type === -1) {
          state.total = state.total - price;
          return;
        }
        throw new Error("type parameter must be 1 or -1");
      }

      static CheckQuantity(state:CardState,cardItem:ItemObject){
            if (cardItem.quantity === 0) {
                state.item = state.item.filter((itm)=>itm.id !== cardItem.id)
            }
      }
}