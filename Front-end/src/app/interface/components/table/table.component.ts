import {Component, ViewChild} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Calculation } from 'src/core/models/calculation/Calculation.model';
import CalculationService from 'src/core/services/calculation/Calculation.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-calculation-historic-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableCalculationHistoricComponent {
  public displayedColumns: string[] = ['number1', 'number2', 'result' ];
  public dataSource = new MatTableDataSource<Calculation>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor (
    private calculationService: CalculationService
  ) {
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.updateList();
  }
  
  getResult(element: Calculation) {
    const observer = this.calculationService.getResult(element.getId()).subscribe(() => {
      this.updateList();
      observer.unsubscribe();
    }
    );
  }

  updateList() {
    this.dataSource.data = this.calculationService.getHistoric();
  }
}
