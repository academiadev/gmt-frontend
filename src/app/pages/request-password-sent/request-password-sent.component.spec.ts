import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPasswordSentComponent } from './request-password-sent.component';

describe('LoginComponent', () => {
  let component: RequestPasswordSentComponent;
  let fixture: ComponentFixture<RequestPasswordSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestPasswordSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestPasswordSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
