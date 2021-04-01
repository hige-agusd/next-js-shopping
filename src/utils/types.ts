import { type } from "node:os";

export interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
  category: string;
}

export type Rates = Record<Currencies, string>;

export interface Exchange {
  rates: Rates[];
  base: string;
  date: string;
}

export enum Currencies {
  JPY = 'JPY',
  GBP = 'GBP',
  EUR = 'EUR',
}

export interface ItemInCart {
  id: string;
  qty: number;
}
