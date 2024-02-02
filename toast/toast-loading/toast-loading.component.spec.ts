import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastLoadingComponent } from './toast-loading.component';

describe('ToastLoadingComponent', () => {
  let component: ToastLoadingComponent;
  let fixture: ComponentFixture<ToastLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
