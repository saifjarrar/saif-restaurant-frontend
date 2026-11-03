import { outputAst } from '@angular/compiler';
import { Injectable } from '@angular/core';
type OrderStatus = 'Received' | 'In The Kitchen' | 'Served';
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  restaurantinfo = [
    {
      title: 'orders today',
      value: 128,
      describe: '12% more than last Monday',
      color: '',
    },
    {
      title: ' Reservations ',
      value: '24',
      describe: '6 tables available',
      color: 'up',
    },
    {
      title: 'Sales ',
      value: '$1,250',
      describe: '8% more than last Monday',
      color: '',
    },
    {
      title: 'Guest Rating',
      value: 4.5,
      describe: 'Average rating from customers',
      color: 'up',
    },
  ];
  ordertickets = [
    {
      ordernum: '#2481',
      table: 'Table 1',
      dishes: [
        { name: 'Spaghetti Carbonara', quantity: 1 },
        { name: 'Caesar Salad', quantity: 1 },
        { name: 'Tiramisu', quantity: 1 },
      ],
      orderstatus: 'Received' as OrderStatus,
      readytime: '15 mins',
    },
    {
      ordernum: '#2482',
      table: 'Table 2',
      dishes: [
        { name: 'Chicken Parmesan', quantity: 2 },
        { name: 'Garlic Bread', quantity: 1 },
      ],
      orderstatus: 'In The Kitchen' as OrderStatus,
      readytime: '20 mins',
    },
    {
      ordernum: '#2483',
      table: 'Table 3',
      dishes: [
        { name: 'Beef Steak', quantity: 1 },
        { name: 'Mashed Potatoes', quantity: 2 },
      ],
      orderstatus: 'Served' as OrderStatus,
      readytime: '5 mins',
    },
  ];
  tonightreservations = [
    {
      name: 'Haddad family',
      time: '7:00 PM',
      guests: 4,
      table: 'Table 5',
    },
    {
      name: 'Jane Smith',
      time: '7:30 PM',
      guests: 4,
      table: 'Table 3',
    },
    {
      name: 'Saif Jarrar',
      time: '8:00 PM',
      guests: 3,
      table: 'Table 1',
    },
    {
      name: 'Ali family',
      time: '8:30 PM',
      guests: 2,
      table: 'Table 7',
    },
    {
      name: 'Karam family',
      time: '9:00 PM',
      guests: 2,
      table: 'Table 4',
    },
  ];
  mostordered = [
    { name: 'Mansaf', quantity: 34 },
    { name: 'Mixed grill', quantity: 28 },
    { name: 'Grilled sea bass', quantity: 22 },
    { name: 'Fattoush', quantity: 17 },
    { name: 'Knafeh', quantity: 14 },
  ];

  barWidth(quantity: number): number {
    const max = Math.max(...this.mostordered.map((d) => d.quantity));
    return (quantity / max) * 100;
  }
  markAs(ordernum: string) {
    const order = this.ordertickets.find((o) => o.ordernum === ordernum);
    if (order?.orderstatus === 'Received') {
      order.orderstatus = 'In The Kitchen';
    } else if (order?.orderstatus === 'In The Kitchen') {
      order.orderstatus = 'Served';
    }
  }
}
