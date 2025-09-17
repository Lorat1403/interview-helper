import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateAnswerModal } from './generate-answer-modal';

describe('GenerateAnswerModal', () => {
  let component: GenerateAnswerModal;
  let fixture: ComponentFixture<GenerateAnswerModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateAnswerModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateAnswerModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
