import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEmpComponent } from './crud-emp.component';

describe('CrudEmpComponent', () => {
  let component: CrudEmpComponent;
  let fixture: ComponentFixture<CrudEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
