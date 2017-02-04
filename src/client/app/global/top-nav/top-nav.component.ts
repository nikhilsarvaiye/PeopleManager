import { Component, OnInit, AfterViewInit } from '@angular/core';
import 'jquery';

@Component({
  selector: 'top-nav',
  styleUrls: [
    './top-nav.component.css'
  ],
  templateUrl: './top-nav.component.html'
})
export class TopNavComponent implements OnInit {
  
  public ngOnInit() {
    console.log('hello `Top Nav` component');
  }
  
  ngAfterViewInit(){
    this.updateDom();
  }
  
  private updateDom(){

    // Navbar navigation
    // -------------------------

    // Prevent dropdown from closing on click
    $(document).on('click', '.dropdown-content', function (e) {
        e.stopPropagation();
    });

    // Disabled links
    $('.navbar-nav .disabled a').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });

    // Show tabs inside dropdowns
    $('.dropdown-content a[data-toggle="tab"]').on('click', function (e) {
        (<any>$(this)).tab('show');
    });
  }
}
