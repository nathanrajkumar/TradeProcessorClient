import { SecurityId } from "./SecurityId";

export interface TradeMessage {
  tradeId: string;
  account: string;
  securityId: SecurityId;
  idSource: string;
  qty: Number;
  price: Number;
  lastUpdated: Date;
}
