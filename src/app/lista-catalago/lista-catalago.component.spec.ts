import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCatalagoComponent } from './lista-catalago.component';

describe('ListaCatalagoComponent', () => {
  let component: ListaCatalagoComponent;
  let fixture: ComponentFixture<ListaCatalagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCatalagoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCatalagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
