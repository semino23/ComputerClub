import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteCommentOrSuggestionFormComponent } from './write-comment-or-suggestion-form.component';

describe('WriteCommentOrSuggestionFormComponent', () => {
  let component: WriteCommentOrSuggestionFormComponent;
  let fixture: ComponentFixture<WriteCommentOrSuggestionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WriteCommentOrSuggestionFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WriteCommentOrSuggestionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
