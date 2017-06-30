import { Injectable } from '@angular/core';
import {Cards} from './mock-cardlist';
import {Card} from './card';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class CardListService{  
    constructor( private http: Http) {}
    private cardUrl = 'http://localhost:6698/api/card';


    //   cards : Card[];
    // getCardList():Card[]{  
    //    this.cards = Cards; 
    //   return this.cards;
    // }

    getCards():Observable<Card[]>{

        return this.http.get(this.cardUrl)
        .map((res:Response) => <Card[]>res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}