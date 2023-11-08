import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppContext } from 'src/core/repositories/app-context';
import CalculationRepository from 'src/core/repositories/calculation/Calculation.repository';
import CalculationService from 'src/core/services/calculation/Calculation.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableCalculationHistoricComponent } from './interface/components/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    TableCalculationHistoricComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule
  ],  
  exports: [ MatFormFieldModule, MatInputModule ],
  providers: [    
    CalculationService,
    CalculationRepository,
    AppContext
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
