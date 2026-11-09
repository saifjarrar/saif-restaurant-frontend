import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodParticles } from './food-particles';

describe('FoodParticles', () => {
  let component: FoodParticles;
  let fixture: ComponentFixture<FoodParticles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodParticles],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodParticles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
