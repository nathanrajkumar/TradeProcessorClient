import { Timestamp } from "rxjs";
import { TradeMessage } from "./TradeMessage.model";

export interface ServerMessage {
  lastUpdated: Date;
  message: string;
}
