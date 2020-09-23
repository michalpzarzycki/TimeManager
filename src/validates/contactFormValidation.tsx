export function validate(values: any) {
    let errors: any = {
    
    };
    let regex = {
        description:/^\w{5,140}$/
    }
        //Password validation
        if(!values.description) {
            errors.description = "We required description!"
        } else if(!regex.description.test(values.description)) {
            errors.descriptin = "Description must have min 6 characters"
        }
        return errors;

}