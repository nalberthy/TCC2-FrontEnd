import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaInternaComponent } from './area-interna.component';

describe('AreaInternaComponent', () => {
  let component: AreaInternaComponent;
  let fixture: ComponentFixture<AreaInternaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaInternaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
