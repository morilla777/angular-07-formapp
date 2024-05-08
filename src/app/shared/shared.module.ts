import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule,
    SideMenuComponent
  ],
  exports: [
    SideMenuComponent
  ]
})
export class SharedModule { }
