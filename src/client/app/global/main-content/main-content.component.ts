import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PageHeaderComponent } from './page-header'
//import 'jquery';

@Component({
  selector: 'main-content',
  styleUrls: [
    './main-content.component.css'
  ],
  templateUrl: './main-content.component.html'
})
export class MainContentComponent implements OnInit {
  
  public ngOnInit() {
    console.log('hello `main-content` component');
  }

  ngAfterViewInit(){
    this.updateDom();
  }

  private updateDom(){
    
  }
}
