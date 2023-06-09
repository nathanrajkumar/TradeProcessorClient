import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataTableComponent } from 'src/data-table/data-table.component';
import { TradeDataService } from 'src/data-table/trade-data.service';

@NgModule({
  declarations: [
    AppComponent,
      DataTableComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [TradeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
