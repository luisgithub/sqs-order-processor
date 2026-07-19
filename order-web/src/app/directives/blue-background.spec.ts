import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { BlueBackgroundDirective } from './blue-background';

@Component({
  template: '<div appBlueBackground></div>',
  imports: [BlueBackgroundDirective],
})
class HostComponent {}

describe('BlueBackgroundDirective', () => {
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
  });

  it('should apply blue background', () => {
    const el = fixture.nativeElement.querySelector('div');
    expect(el.style.backgroundColor).toBe('blue');
  });
});
