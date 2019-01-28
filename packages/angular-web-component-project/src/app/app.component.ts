import { Component, ViewEncapsulation, ElementRef, Input } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native,
})
export class AppComponent  {
  title = 'Angular 7'
  results: string[] = []
  @Input()
  value : number = 0;

  constructor(private el: ElementRef) {}


  public increment(): void {
    this.value += 1
    this._valueChanged()
  }
  
  public decrement(): void {
    this.value -= 1;
    this._valueChanged();
  }

  _valueChanged(): void {
    this.el.nativeElement
      .dispatchEvent(new CustomEvent('value-changed', {
        detail: this.value,
        bubbles: true
      }));
  }
}
