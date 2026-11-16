export interface OrderDish {
  name: string;
  quantity: number;
  unitPrice: number | null;
}

export interface OrderTicket {
  id: number;
  ordernum: string;
  table: string;
  dishes: OrderDish[];
  orderstatus: string;
  readytime: string;
  total: number | null;
  createdAt: string | null;
  readyAt: string | null;
}

export interface CreateOrderDish {
  name: string;
  quantity: number;
}

export interface CreateOrderRequest {
  table: string;
  dishes: CreateOrderDish[];
}
