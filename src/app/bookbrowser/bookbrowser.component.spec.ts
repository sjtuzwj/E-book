import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookbrowserComponent } from './bookbrowser.component';

describe('BookbrowserComponent', () => {
  let component: BookbrowserComponent;
  let fixture: ComponentFixture<BookbrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookbrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookbrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
