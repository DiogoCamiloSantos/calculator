import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Calculation } from 'src/core/models/calculation/Calculation.model';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import CalculationService from 'src/core/services/calculation/Calculation.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { TableCalculationHistoricComponent } from 'src/ui/components/table/table.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculadora Jitterbit';
  calculationForm: FormGroup;
  
  @ViewChild(TableCalculationHistoricComponent) table: TableCalculationHistoricComponent;

  constructor(
    private calculationService: CalculationService,    
    formBuilder: FormBuilder

  ) {
    this.calculationForm = formBuilder.group({
      number1: new FormControl(0, [Validators.required]),
      number2: new FormControl(0, [Validators.required])
    })
  }
  
  sendCalculation() {    
    const calculation = new Calculation(this.calculationForm.get('number1')?.value, this.calculationForm.get('number2')?.value)
    this.calculationService.send(calculation).subscribe(() => this.table.updateList());
  }
}
