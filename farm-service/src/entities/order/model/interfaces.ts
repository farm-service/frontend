type Status = "open" | "confirm" | "delivery" | "done";
export interface Order {
  status: Status;
  consumer: string;
  deadline: string;
  product: string;
  amount: number;
  unit: string;
  producer: string | null;
}
