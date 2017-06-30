import { Component, OnInit } from '@angular/core';
import {CardListService} from './cardlist.service';
import {GridOptions} from 'ag-grid/main';
import {Card} from './card';
@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css'],
  providers : [CardListService],
  moduleId: module.id
})

export class CardlistComponent implements OnInit {
 cards : Card[];
  errorMessage: string;
   error: any;
    gridOptions: any = [];

    //public gridOptions:GridOptions;
   
  constructor(private _cardListService : CardListService) {  // we pass an empty gridOptions in, so we can grab the api out   
   
     this.gridOptions = <GridOptions>{
            context: {
                componentParent: this
            }
        };
        // this.gridOptions.rowData =   this.cards;
        // this.gridOptions.columnDefs = this.createColumnDefs();

        // this.gridOptions.api.setRowData(this.cards);
        // this.gridOptions.api.setColumnDefs(this.createColumnDefs()); 
      
   }

    onGridReady(params) {
        params.api.sizeColumnsToFit();
    }

 private createColumnDefs () {
        return [           
            {headerName: "CardId", field: "cardId", width: 100},
            // {headerName: "PAN", field: "PAN", width: 100},
            // {headerName: "CardTypeId", field: "CardTypeId", width: 100},
            // {headerName: "StatusId", field: "StatusId", width: 100},
            // {headerName: "TokenTypeId", field: "TokenTypeId", width: 100},
            // {headerName: "EmbossingId", field: "EmbossingId", width: 100},
            // {headerName: "EncodingID", field: "EncodingID", width: 100},
            // {headerName: "ThermalID", field: "ThermalID", width: 100},
            // {headerName: "ExpiryDate", field: "ExpiryDate", width: 100},
            // {headerName: "IsPINChangeable", field: "IsPINChangeable", width: 100},
            // {headerName: "PIN", field: "PIN", width: 100}           
        ];
    }


getAllCards(){
 this._cardListService.getCards()
 .subscribe(cards => {
                        this.cards = cards;
                        debugger;
                        this.gridOptions = {
                                                rowData: cards,                                                
                                                columnDefs: [ {headerName: "CardId", field: "cardId", width: 100}]
                                            };
                    }),
  error =>  this.errorMessage = <any>error

    };
  ngOnInit() { 
    this.getAllCards();
  }    
}