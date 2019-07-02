export class Cart {
    id: string;
    items: CartItem[];
}

export class CartItem {
    uid: string;
    id: string;
    num: number;
}
