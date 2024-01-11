import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBlogComponent } from './project-blog.component';

describe('ProjectBlogComponent', () => {
  let component: ProjectBlogComponent;
  let fixture: ComponentFixture<ProjectBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
