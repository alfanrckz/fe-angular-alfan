import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appHighlightFavorite]',
})
export class HighlightFavoriteDirective implements OnChanges {

    @Input('appHighlightFavorite') isFavorite = false;

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngOnChanges() {
        if (this.isFavorite) {
            this.renderer.setStyle(this.el.nativeElement, 'background-color', '#FEF9C3'); // highligt
        } else {
            this.renderer.removeStyle(this.el.nativeElement, 'background-color');
        }
    }

}
