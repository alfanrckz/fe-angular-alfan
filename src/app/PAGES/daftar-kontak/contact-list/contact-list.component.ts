import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '@core/services/contact.service';
import { ContactCardComponent } from '../contact-card/contact-card.component';

@Component({
    selector: 'app-contact-list',
    imports: [ContactCardComponent],
    template: `
    @if (contacts.length === 0) {
        <div class="bg-white rounded-xl p-8 text-center text-gray-400 border border-dashed border-gray-200">
            Belum ada kontak
        </div>
    } @else {
        <div class="flex flex-col gap-3">
            @for (item of contacts; track item.id) {
                <app-contact-card
                    [contact]="item"
                    (onFavorite)="onFavorite.emit($event)"
                    (onDelete)="onDelete.emit($event)" />
            }
        </div>
    }
    `,
})
export class ContactListComponent {

    @Input({ required: true }) contacts: Contact[] = [];

    @Output() onFavorite = new EventEmitter<number>();
    @Output() onDelete = new EventEmitter<number>();

}
