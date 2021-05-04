import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketaddComponent } from './ticketadd.component';

describe('TicketaddComponent', () => {
  let component: TicketaddComponent;
  let fixture: ComponentFixture<TicketaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});