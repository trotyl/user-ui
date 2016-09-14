import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {DomSanitizationService} from "@angular/platform-browser";

@Component({
  selector: 'thread-create',
  templateUrl: './create.component.html',
  styleUrls: [
    './create.component.scss'
  ]
})
export class ThreadCreateComponent implements OnInit {
  html;
  constructor(private http: Http, private sanitizer: DomSanitizationService) {
  }

  ngOnInit() {
  }
  update(text) {
    this.html = text;//this.sanitizer.bypassSecurityTrustHtml(text);
  }
}
