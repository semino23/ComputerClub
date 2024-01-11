import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBlogFormComponent } from './new-blog-form.component';

describe('NewBlogFormComponent', () => {
  let component: NewBlogFormComponent;
  let fixture: ComponentFixture<NewBlogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewBlogFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewBlogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
