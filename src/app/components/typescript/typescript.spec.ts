import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Typescript } from './typescript';

describe('Typescript', () => {
  let component: Typescript;
  let fixture: ComponentFixture<Typescript>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Typescript]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Typescript);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
