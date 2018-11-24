import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core'
declare var $: any
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.style.scss'],
  animations: [
    trigger('scrollAnimation', [
      state(
        'show',
        style({
          background: '#eee',
          transform: 'translateY(0)',
        })
      ),
      state(
        'hide',
        style({
          background: 'transparent',
          transform: 'translateY(0)',
        })
      ),
      transition('show => hide', animate('300ms ease-in')),
      transition('hide => show', animate('300ms ease-in')),
    ]),
  ],
})
export class LoaderComponent implements OnInit {
  state = 'hide'
  private el: HTMLElement
  constructor(el: ElementRef) {
    this.el = el.nativeElement
  }

  ngOnInit() {
    this.state = 'show'
  }
}
