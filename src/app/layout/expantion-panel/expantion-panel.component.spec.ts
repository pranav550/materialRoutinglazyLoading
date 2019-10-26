import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpantionPanelComponent } from './expantion-panel.component';

describe('ExpantionPanelComponent', () => {
  let component: ExpantionPanelComponent;
  let fixture: ComponentFixture<ExpantionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpantionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpantionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
