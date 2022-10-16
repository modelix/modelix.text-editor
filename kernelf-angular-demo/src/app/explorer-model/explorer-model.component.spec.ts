import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerModelComponent } from './explorer-model.component';

describe('ExplorerModelComponent', () => {
  let component: ExplorerModelComponent;
  let fixture: ComponentFixture<ExplorerModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorerModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorerModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
