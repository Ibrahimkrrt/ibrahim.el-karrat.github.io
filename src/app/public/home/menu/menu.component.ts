import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { MenuTitle } from './enums/menu-title.enum';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  public open: boolean = false;
  public showcase: string = MenuTitle.Home;
  public menuList: string[] = [MenuTitle.Home, MenuTitle.Component];

  constructor(private _rootElement: ElementRef, private _renderer: Renderer2) {}

  public toggleMenuComponentClick() {
    this.open = !this.open;
    if (this.open) {
      this._renderer.addClass(this._rootElement.nativeElement, 'active');
    } else {
      this._renderer.removeClass(this._rootElement.nativeElement, 'active');
    }
  }

  public updateShowcase(item: string) {
    this.showcase = item;
    this.toggleMenuComponentClick()
  }
}
