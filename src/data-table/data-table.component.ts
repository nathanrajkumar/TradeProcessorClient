import { ServerMessage } from './ServerMessage.model';
import { Observable,map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TradeDataService } from './trade-data.service';
import { TradeMessage } from './TradeMessage.model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  messages : TradeMessage[] = new Array();

  tradeDataMessages$ : Observable<TradeMessage[]> = this.tradeMessageDataService.getRealTimeTradeMessages().pipe(map( data => {
    let message = data as ServerMessage;
    let tradeMessage = JSON.parse(message.message) as TradeMessage;
    tradeMessage.lastUpdated = message.lastUpdated;
    this.messages.push(tradeMessage);
    return this.messages;
  }));

  constructor(private tradeMessageDataService: TradeDataService) {
  }

  ngOnInit() {

  }

}
