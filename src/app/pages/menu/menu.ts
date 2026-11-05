import { Component, inject } from '@angular/core';
import { Menuservice } from '../../services/menu-service/menu-service';
import { TitleCasePipe } from '@angular/common';

@Component({
  imports: [TitleCasePipe],
  selector: 'app-menu',
  styleUrl: './menu.css',
  templateUrl: './menu.html',
})
export class Menu {
  menuservice = inject(Menuservice);
  menu = this.menuservice.Menu;
}
