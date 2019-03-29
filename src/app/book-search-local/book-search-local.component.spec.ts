import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSearchLocalComponent } from './book-search-local.component';

describe('BookSearchLocalComponent', () => {
  let component: BookSearchLocalComponent;
  let fixture: ComponentFixture<BookSearchLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSearchLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
