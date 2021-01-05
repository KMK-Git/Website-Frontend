/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BirthdayLoginFormComponent } from './birthday-login-form.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BirthdayLoginFormComponent', () => {
  let component: BirthdayLoginFormComponent;
  let fixture: ComponentFixture<BirthdayLoginFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BirthdayLoginFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
