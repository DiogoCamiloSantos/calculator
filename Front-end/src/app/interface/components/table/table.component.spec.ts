import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCalculationHistoricComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableCalculationHistoricComponent;
  let fixture: ComponentFixture<TableCalculationHistoricComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableCalculationHistoricComponent]
    });
    fixture = TestBed.createComponent(TableCalculationHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
