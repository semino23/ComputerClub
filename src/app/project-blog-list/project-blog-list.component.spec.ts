import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBlogListComponent } from './project-blog-list.component';

describe('ProjectBlogListComponent', () => {
  let component: ProjectBlogListComponent;
  let fixture: ComponentFixture<ProjectBlogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectBlogListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectBlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
