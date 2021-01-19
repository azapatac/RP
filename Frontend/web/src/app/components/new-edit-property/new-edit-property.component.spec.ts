import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditPropertyComponent } from './new-edit-property.component';

describe('NewEditPropertyComponent', () => {
  let component: NewEditPropertyComponent;
  let fixture: ComponentFixture<NewEditPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEditPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEditPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
