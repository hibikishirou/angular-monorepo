import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLibraryTestComponent } from './angular-library-test.component';

describe('AngularLibraryTestComponent', () => {
  let component: AngularLibraryTestComponent;
  let fixture: ComponentFixture<AngularLibraryTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularLibraryTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLibraryTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
