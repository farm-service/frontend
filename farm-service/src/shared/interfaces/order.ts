export interface Order {
  consumer: string;
  deadline: string;
  product: string;
  amount: number;
  unit: string;
  confirmed: boolean;
  producer: string | null;
}
