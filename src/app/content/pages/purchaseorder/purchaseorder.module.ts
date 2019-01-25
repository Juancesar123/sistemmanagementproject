import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseorderRoutingModule } from './purchaseorder-routing.module';
import { PurchaseordercontentComponent } from './purchaseordercontent/purchaseordercontent.component';
import { LayoutModule } from '../../layout/layout.module';
import { 
  MatInputModule, 
  MatPaginatorModule, 
  MatProgressSpinnerModule, 
  MatSortModule, 
  MatTableModule, 
  MatSelectModule, 
  MatMenuModule, 
  MatProgressBarModule, 
  MatButtonModule, 
  MatCheckboxModule, 
  MatDialogModule, 
  MatTabsModule, 
  MatNativeDateModule, 
  MatCardModule, 
  MatRadioModule, 
  MatDatepickerModule, 
  MatIconModule, 
  MatAutocompleteModule, 
  MAT_DIALOG_DEFAULT_OPTIONS, 
  MatTooltipModule, 
  MatSnackBarModule 
} from '@angular/material';
import { LayoutUtilsService } from '../components/apps/e-commerce/_core/utils/layout-utils.service';
import { TranslateModule } from '@ngx-translate/core';

import { PartialsModule } from './../../partials/partials.module';
@NgModule({
  imports: [
  CommonModule,
    PurchaseorderRoutingModule,
    LayoutModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    TranslateModule.forChild(),
    MatSortModule,
    MatTableModule,
    MatSelectModule,
    MatMenuModule,
    MatProgressBarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTabsModule,
    MatNativeDateModule,
    MatCardModule,
    MatRadioModule,
    MatIconModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatTooltipModule,
    PartialsModule
  ],
  declarations: [PurchaseordercontentComponent],
  providers: [
		{
			provide: MAT_DIALOG_DEFAULT_OPTIONS,
			useValue: {
				hasBackdrop: true,
				panelClass: 'm-mat-dialog-container__wrapper',
				height: 'auto',
				width: '900px'
			}
    },
  ]
})
export class PurchaseorderModule { }
