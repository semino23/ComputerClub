import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardBedComponent } from './project-card-bed.component';

describe('ProjectCardBedComponent', () => {
  let component: ProjectCardBedComponent;
  let fixture: ComponentFixture<ProjectCardBedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCardBedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectCardBedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
