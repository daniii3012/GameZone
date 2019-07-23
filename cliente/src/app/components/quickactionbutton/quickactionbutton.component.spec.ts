import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickactionbuttonComponent } from './quickactionbutton.component';

describe('QuickactionbuttonComponent', () => {
  let component: QuickactionbuttonComponent;
  let fixture: ComponentFixture<QuickactionbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickactionbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickactionbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
