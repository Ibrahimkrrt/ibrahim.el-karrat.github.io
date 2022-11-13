import { ElementRef, inject, Injectable, Renderer2 } from '@angular/core';

@Injectable()
export class CircleLayoutService {
  private _renderer = inject(Renderer2);

  private readonly SECONDARY_COLOR: string = '#1E1E28';

  init(
    size: number,
    strokeWidth: number,
    rootElement: ElementRef,
    innerCircleElement: ElementRef
  ) {
    this._setParentSize(rootElement, size);
    this._setInnerSize(innerCircleElement, size, strokeWidth);
  }

  private _setParentSize(element: ElementRef, size: number) {
    this._setWidthAndHeighOf(element, size);
  }

  private _setInnerSize(element: ElementRef, size: number, offset: number) {
    this._setWidthAndHeighOf(element, size);
    this._renderer.setStyle(
      element.nativeElement,
      'border',
      `${offset}px solid ${this.SECONDARY_COLOR}`
    );
  }

  private _setWidthAndHeighOf(element: ElementRef<any>, size: number) {
    this._renderer.setStyle(element.nativeElement, 'width', `${size}px`);
    this._renderer.setStyle(element.nativeElement, 'height', `${size}px`);
  }
}
