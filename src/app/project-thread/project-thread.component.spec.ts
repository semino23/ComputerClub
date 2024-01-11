import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectThreadComponent } from './project-thread.component';

describe('ProjectThreadComponent', () => {
  let component: ProjectThreadComponent;
  let fixture: ComponentFixture<ProjectThreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectThreadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
