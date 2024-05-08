import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'shared-side-menu',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './side-menu.component.html',
  styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {

   public reactiveMenu: MenuItem[] = [
    { title: 'Básicos', route: './reactive/basic'},
    { title: 'Dinámicos', route: './reactive/dynamic'},
    { title: 'Switches', route: './reactive/switches'},
   ];

   public authMenu: MenuItem[] = [
    { title: 'Registro', route: './auth'},
   ];

 }
