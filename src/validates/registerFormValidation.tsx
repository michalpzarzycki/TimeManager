
export function validate(values: any) {
    let errors: any = {

    };
    let regex = {
        email : '',
        password: /^\w{6,}$/,
        repeatPassword:"",
        name:/^\w{2,20}$/,
        surname:/^\w{2,30}$/,
        nickname:/^\w{2,15}$/,
        telephone:/^\d{9}$/,
        city:/^\w{2,20}$/,
        country:/^\w{2,20}$/,
        description:/^\w{5,140}$/
    }
        //Password validation
        if(!values.password) {
            errors.password = "We required password!"
        } else if(!regex.password.test(values.password)) {
            errors.password = "Password must have min 6 characters"
        }


        //Check if passwords are the same
        if(!values.repeatPassword) {
            errors.repeatPassword = "You require repeat password!"
        } else if(values.password !== values.repeatPassword){
            errors.repeatPassword = "Passwords have to be the same!"
        } 


        //Name validation
        if(!values.name) {
            errors.name="We require name!"
        } else if(!regex.name.test(values.name)) {
            errors.name="Name has to have from 2 to 20 characters"
        } 

        //Surname validation
        if(!values.surname) {
            errors.surname="We require surname!"
        } else if(!regex.surname.test(values.surname)) {
            errors.surname="Surname has to have from 2 to 30 characters"
        }


        //Nickname validation
        if(!values.nickname) {
            errors.nickname = "We require nickname"
        } else if(!regex.nickname.test(values.nickname)) {
            errors.nickname = "Nickname has to have from 2 to 15 characters"
        } 

        //Telephone validation
        if(!regex.telephone.test(values.telephone)) {
            errors.telephone = "Telephone has to contain 9 digits"
        } 
        //City validation
        if(!values.city) {
            errors.city = "We require city"
        } else if(!regex.city.test(values.city)) {
            errors.city = "City has to have from 2 to 20 characters"
        } 


        //Country validation
        if(!values.country) {
            errors.country="We require country!"
        } else if(!regex.country.test(values.country)) {
            errors.country="Country has to have from 2 to 20 characters"
        } 

    return errors;
}





        // //Description validation
        // if(description) && !regex.description.test(description)) errors.description="Surname has to have from 2 to 20 characters"
        // //Image file validation
        // if(file !== 'image/jpeg') errors.file="We require .jpg files. Check your file type"
    
    // if (!values.email) {
    //   errors.email = 'Email address is required';
    // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    //   errors.email = 'Email address is invalid';
    // }