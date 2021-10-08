import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'heart-btn',
  templateUrl: './heart-btn.component.html',
  styleUrls: ['./heart-btn.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HeartBtnComponent implements OnInit {

  @Output()
  public onClick: EventEmitter<boolean> = new EventEmitter();

  @Input()
  public isChecked: boolean = false;

  @Input()
  public getValue = () => this.getHeartValue();

  constructor(private el: ElementRef) { }

  ngOnInit(): void { }

  onBtnClick(e: any) {
    this.isChecked = !this.isChecked;

    //this.onClick.emit(this.isChecked)

    const domEvent = new CustomEvent('heart-event', { detail: this.isChecked });
    this.el.nativeElement.dispatchEvent(domEvent);
  }

  getHeartValue() {
    return this.isChecked;
  }

}
