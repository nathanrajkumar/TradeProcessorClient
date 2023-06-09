import { Observable } from 'rxjs';
import {io, connect} from 'socket.io-client';
import { ServerMessage } from './ServerMessage.model';
import { Injectable } from '@angular/core';

@Injectable()
export class TradeDataService {

  private url = 'http://localhost:3000';
  private socket;


  getRealTimeTradeMessages() {
    let tradeMessages = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        let serverMessage = data as ServerMessage;
        observer.next(serverMessage);
      });
      return () => {
        this.socket.disconnect();
      }
    })
    return tradeMessages;
  }


}
