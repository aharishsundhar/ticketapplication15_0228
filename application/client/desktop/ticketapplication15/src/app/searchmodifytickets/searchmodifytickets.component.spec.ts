import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchmodifyticketsComponent } from './searchmodifytickets.component';

describe('SearchmodifyticketsComponent', () => {
  let component: SearchmodifyticketsComponent;
  let fixture: ComponentFixture<SearchmodifyticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchmodifyticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchmodifyticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});