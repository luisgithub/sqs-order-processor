import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appBlueBackground]',
})
export class BlueBackgroundDirective implements OnInit {
  private el = inject(ElementRef);

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = 'blue';
  }
}
