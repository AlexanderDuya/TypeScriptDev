import { HasFormatter } from "../interfaces/HasFormatter.js";
//basic invoice class to make objecs
export class Invoice implements HasFormatter {
  readonly client: string;
  private details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}
