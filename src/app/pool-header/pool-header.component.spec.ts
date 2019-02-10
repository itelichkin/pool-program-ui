import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolHeaderComponent } from './pool-header.component';

describe('PoolHeaderComponent', () => {
  let component: PoolHeaderComponent;
  let fixture: ComponentFixture<PoolHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
