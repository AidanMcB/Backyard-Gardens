import { FormGroup, FormControl } from '@angular/forms';

export const usernameValidator = (control: FormControl) => {
    if(control?.value?.length < 5){ 
        return { minimum: true }
    }
    return null;
}

export const passwordValidator = (control: FormControl) => {
    if(!control?.value?.test("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$")){ 
        return { minimum: true }
    }
    return null;
}


