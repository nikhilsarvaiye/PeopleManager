import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TopNavComponent } from './top-nav'
import { PageHeaderComponent } from './page-header'
import { SideNavComponent } from './side-nav'
import { MainContentComponent } from './main-content'

console.log('`Global` bundle loaded asynchronously');

@NgModule({
  declarations: [
    TopNavComponent,
    PageHeaderComponent,
    SideNavComponent,
    MainContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopNavComponent,
    PageHeaderComponent,
    SideNavComponent,
    MainContentComponent
  ]
})
export class GlobalModule {
}
