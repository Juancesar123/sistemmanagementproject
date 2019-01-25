import { Injectable } from '@angular/core';
import { FeathersService } from './../../feathers.service';

@Injectable({
  providedIn: 'root'
})
export class PurchaseorderserviceService {

  constructor(private _feathers : FeathersService) { }
  messages$() {
    // just returning the observable will query the backend on every subscription
    // using some caching mechanism would be wise in more complex applications
    return (this._feathers // todo: remove 'any' assertion when feathers-reactive typings are up-to-date with buzzard
      .service('purchaseorder'))
      .watch()
      .find({
        query: {
          $sort: {createdAt: -1},
          $limit: 25
        }
      });
  }
}
