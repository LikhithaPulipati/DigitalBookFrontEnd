import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribedbookComponent } from './subscribedbook.component';

describe('ReadComponent', () => {
  let component: SubscribedbookComponent;
  let fixture: ComponentFixture<SubscribedbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribedbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribedbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
