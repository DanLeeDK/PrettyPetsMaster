import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GlobalEventsManager {

    private _showNavBarAndFooter: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public showNavBarAndFooterEmitter: Observable<boolean> = this._showNavBarAndFooter.asObservable();

    constructor() {}

    showNavBarAndFooter(ifShow: boolean) {
        this._showNavBarAndFooter.next(ifShow);
    }
}
