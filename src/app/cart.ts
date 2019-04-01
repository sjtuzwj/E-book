export class Cart {
    id: string;
    items: CartItem[];
}

export class CartItem {
    id: string;
    num: number;
    prc: number;
    amt: number;
}
