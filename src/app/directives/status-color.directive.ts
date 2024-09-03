import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { ETAT } from '../model/task';

@Directive({
  selector: '[appStatusColor]',
})
export class StatusColorDirective implements OnChanges {

  @Input() appStatusColor!: ETAT;

  constructor(private el: ElementRef) {}

  ngOnChanges(): void {
    this.updateColor();
  }

  private updateColor(): void {
    switch (this.appStatusColor) {
      case ETAT.EN_COURS:
        this.el.nativeElement.style.color = 'blue';
        break;
      case ETAT.A_FAIRE:
        this.el.nativeElement.style.color = 'red';
        break;
      case ETAT.TERMINEE:
        this.el.nativeElement.style.color = 'green';
        break;
      default:
        this.el.nativeElement.style.color = 'black';
        break;
    }
  }
}
