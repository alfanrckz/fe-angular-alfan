import { Injectable, signal } from '@angular/core';

export interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
    favorite: boolean;
    createdAt: Date;
}

@Injectable({ providedIn: 'root' })
export class ContactService {

    private nextId = 3;

    contacts = signal<Contact[]>([
        
    ]);

    add(data: { name: string; email: string; phone: string }) {
        this.contacts.update(list => [
            ...list,
            { id: this.nextId++, ...data, favorite: false, createdAt: new Date() },
        ]);
    }

    toggleFavorite(id: number) {
        this.contacts.update(list =>
            list.map(c => c.id === id ? { ...c, favorite: !c.favorite } : c)
        );
    }

    delete(id: number) {
        this.contacts.update(list => list.filter(c => c.id !== id));
    }

}
