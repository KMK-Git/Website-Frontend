import { Renderer2, Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, AfterViewInit {

  constructor(private renderer2: Renderer2, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const script = this.renderer2.createElement('script');
    script.type = 'text/javascript';
    script.src = '//cdn.youracclaim.com/assets/utilities/embed.js';
    script.async = 'async';
    this.renderer2.appendChild(this.document.body, script);
  }
}
