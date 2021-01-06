import { Renderer2, Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let script = this._renderer2.createElement("script");
    script.type = "text/javascript";
    script.src = "//cdn.youracclaim.com/assets/utilities/embed.js";
    script.async = "async";
    this._renderer2.appendChild(this._document.body, script);
  }
}
