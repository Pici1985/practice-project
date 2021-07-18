import { AbstractControl } from "@angular/forms";

export function PasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirm_password = control.get('confirm_password');
    return password && confirm_password && password.value !== confirm_password.value ? { 'mismatch' : true } : null;
} 