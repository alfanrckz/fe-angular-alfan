import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '@core/services/contact.service';
import { ButtonComponent } from '@shared/ui/button/button.component';
import { ContactListComponent } from './contact-list/contact-list.component';

@Component({
    selector: 'app-daftar-kontak',
    templateUrl: './daftar-kontak.component.html',
    imports: [ReactiveFormsModule, ContactListComponent, ButtonComponent],
})
export class DaftarKontakComponent {

    private contactService = inject(ContactService);

    contacts = this.contactService.contacts;
    deleteTargetId = signal<number | null>(null);

    form = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]),
    });

    onSubmit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        this.contactService.add(this.form.getRawValue() as { name: string; email: string; phone: string });
        this.form.reset({ name: '', email: '', phone: '' });
    }

    onFavorite(id: number) {
        this.contactService.toggleFavorite(id);
    }

    // buka popup konfirmasi
    onDelete(id: number) {
        this.deleteTargetId.set(id);
    }

    confirmDelete() {
        const id = this.deleteTargetId();
        if (id !== null) this.contactService.delete(id);
        this.deleteTargetId.set(null);
    }

    cancelDelete() {
        this.deleteTargetId.set(null);
    }

    isInvalid(name: string): boolean {
        const control = this.form.get(name);
        return !!control && control.invalid && (control.touched || control.dirty);
    }

}
