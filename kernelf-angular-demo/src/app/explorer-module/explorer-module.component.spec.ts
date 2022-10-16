import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerModuleComponent } from './explorer-module.component';

describe('ExplorerModuleComponent', () => {
  let component: ExplorerModuleComponent;
  let fixture: ComponentFixture<ExplorerModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorerModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorerModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
