export function validate(values: any) {
    let errors: any = {
        
    };
    if(values.password && values.password.length<6) {
        errors.password = 'Password has to have min 6 chars'
    }
    return errors;
}