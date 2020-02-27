import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLivroComponent } from './listLivro.component';

describe('ListLivroComponent', () => {
  let component: ListLivroComponent;
  let fixture: ComponentFixture<ListLivroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLivroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
