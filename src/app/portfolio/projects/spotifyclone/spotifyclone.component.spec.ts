import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifycloneComponent } from './spotifyclone.component';

describe('SpotifycloneComponent', () => {
  let component: SpotifycloneComponent;
  let fixture: ComponentFixture<SpotifycloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotifycloneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpotifycloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
