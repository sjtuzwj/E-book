import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksreadonlyComponent } from './booksreadonly.component';

describe('BooksreadonlyComponent', () => {
  let component: BooksreadonlyComponent;
  let fixture: ComponentFixture<BooksreadonlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksreadonlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksreadonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
