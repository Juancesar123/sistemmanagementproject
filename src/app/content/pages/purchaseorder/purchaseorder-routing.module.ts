import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseordercontentComponent } from './purchaseordercontent/purchaseordercontent.component';
const routes: Routes = [
  {
    path:'',
    component:PurchaseordercontentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class PurchaseorderRoutingModule { }
