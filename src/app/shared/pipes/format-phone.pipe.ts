import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatPhone' })
export class FormatPhonePipe implements PipeTransform {

    // 081234567890 -> 0812-3456-7890
    transform(value: string): string {
        if (!value) return '';
        const digits = value.replace(/\D/g, '');
        return digits.replace(/(\d{4})(?=\d)/g, '$1-');
    }

}
