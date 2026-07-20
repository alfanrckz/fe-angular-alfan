import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '@core/services/contact.service';
import { HighlightFavoriteDirective } from '@shared/directives/highlight-favorite.directive';
import { FormatPhonePipe } from '@shared/pipes/format-phone.pipe';
import { ButtonComponent } from '@shared/ui/button/button.component';

@Component({
    selector: 'app-contact-card',
    imports: [UpperCasePipe, DatePipe, FormatPhonePipe, HighlightFavoriteDirective, ButtonComponent],
    template: `
    <div [appHighlightFavorite]="contact.favorite"
        class="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between gap-4 transition-colors">
        <div>
            <p class="font-medium text-gray-800">{{ contact.name | uppercase }}</p>
            <p class="text-sm text-gray-500">{{ contact.email }}</p>
            <p class="text-sm text-gray-500">{{ contact.phone | formatPhone }}</p>
            <p class="text-xs text-gray-400">Ditambahkan: {{ contact.createdAt | date:'dd MMM yyyy' }}</p>
        </div>
        <div class="flex items-center gap-2">
            <button type="button" class="text-2xl cursor-pointer" title="Favorite"
                (click)="onFavorite.emit(contact.id)">
                {{ contact.favorite ? '★' : '☆' }}
            </button>
            <app-button variant="danger" [debounceTime]="300" (onClick)="onDelete.emit(contact.id)">
                Delete
            </app-button>
        </div>
    </div>
    `,
})
export class ContactCardComponent {

    @Input({ required: true }) contact!: Contact;

    @Output() onFavorite = new EventEmitter<number>();
    @Output() onDelete = new EventEmitter<number>();

}
