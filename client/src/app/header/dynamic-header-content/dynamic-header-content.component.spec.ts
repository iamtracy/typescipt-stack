import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicHeaderContentComponent } from './dynamic-header-content.component';

describe('DynamicHeaderContentComponent', () => {
  let component: DynamicHeaderContentComponent;
  let fixture: ComponentFixture<DynamicHeaderContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicHeaderContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicHeaderContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
